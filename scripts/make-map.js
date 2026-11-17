// index.html의 시나리오 데이터(SC)로 docs/scenario-map.md를 다시 만듭니다.
// 사용법: node scripts/make-map.js
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const m = html.match(/const SC = (\[[\s\S]*?\n  \]);/);
if (!m) throw new Error("index.html에서 SC 배열을 찾지 못했습니다.");
const SC = new Function("return " + m[1])();

const q = s => String(s).replace(/\|/g, "").replace(/\n/g, " ").replace(/"/g, "'");
const label = { safe: "안전", warn: "아슬아슬", danger: "피해" };

// 데이터 점검: 없는 노드로 가는 선택지, 도달할 수 없는 노드
for (const s of SC) {
  const seen = new Set(), todo = ["start"];
  while (todo.length) {
    const id = todo.pop();
    if (seen.has(id)) continue;
    const n = s.nodes[id];
    if (!n) throw new Error(`${s.id}: 없는 노드 '${id}'`);
    seen.add(id);
    if (!n.end) n.choices.forEach(c => todo.push(c[1]));
  }
  const orphan = Object.keys(s.nodes).filter(id => !seen.has(id));
  if (orphan.length) throw new Error(`${s.id}: 도달할 수 없는 노드 ${orphan.join(", ")}`);
}

let asks = 0, ends = 0;
const parts = SC.map((s, i) => {
  const lines = ["```mermaid", "flowchart TD"];
  for (const [id, n] of Object.entries(s.nodes)) {
    const k = `${s.id}_${id}`;
    if (n.end) {
      ends++;
      lines.push(`  ${k}["${label[n.end]}: ${q(n.text)}"]:::${n.end}`);
    } else {
      asks++;
      lines.push(`  ${k}{"${q(n.ask)}"}`);
      n.choices.forEach(([t, to]) => lines.push(`  ${k} -->|"${q(t)}"| ${s.id}_${to}`));
    }
  }
  lines.push("  classDef safe fill:#E2F3E9,stroke:#1A7A47", "  classDef warn fill:#FBF0DC,stroke:#9A5B00", "  classDef danger fill:#FBE5E3,stroke:#B8322A", "```");
  return `## ${i + 1}. ${s.title}\n\n${lines.join("\n")}\n\n**이것만 기억하세요**\n\n${s.lesson.map((l, j) => `${j + 1}. ${l}`).join("\n")}\n`;
});

const out = `# 시나리오 분기 지도

${SC.length}개 시나리오의 선택 흐름입니다. 초록은 안전, 노랑은 아슬아슬, 빨강은 피해 결말입니다. \`index.html\`의 시나리오 데이터에서 \`node scripts/make-map.js\`로 자동으로 만들었습니다.
선택 화면 ${asks}개, 결말 ${ends}개.

${parts.join("\n")}`;
fs.writeFileSync(path.join(root, "docs", "scenario-map.md"), out);
console.log(`시나리오 ${SC.length}개, 선택 화면 ${asks}개, 결말 ${ends}개`);
