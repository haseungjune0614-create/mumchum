/**
 * 멈춤 연습장 테스트 결과를 받는 구글 시트 코드 (Google Apps Script)
 * 붙여 넣는 곳과 배포 방법: docs/sheet-setup.md
 *
 * 앱이 테스트를 마친 휴대폰에서 결과 한 줄(JSON)을 보내면, '결과' 시트에 한 줄씩 쌓는다.
 * 이름·전화번호는 받지 않는다. 앱이 자동으로 만든 참여자 번호와 점수, 고른 답만 온다.
 */

const SHEET_NAME = "결과";
const HEAD = [
  "받은 시각", "참여자", "문항 수",
  "사전 점수", "사후 점수", "변화",
  "사전 응답", "사후 응답", "사전 소요(초)", "사후 소요(초)",
  "안전 결말", "아슬아슬 결말", "피해 결말",
  "상황별 결말", "수상한 점 찾기", "선택 경로"
];

function doPost(e) {
  const lock = LockService.getScriptLock(); // 여러 분이 동시에 끝내도 줄이 섞이지 않게
  lock.waitLock(10000);
  try {
    const d = JSON.parse(e.postData.contents);
    const sheet = getSheet();
    const pre = num(d.pre), post = num(d.post);
    sheet.appendRow([
      new Date(), text(d.pid, 20), num(d.n),
      pre, post, pre === "" || post === "" ? "" : post - pre,
      text(d.preAns, 20), text(d.postAns, 20), num(d.preSec), num(d.postSec),
      num(d.safe), num(d.warn), num(d.danger),
      text(d.ends, 300), text(d.spots, 200), text(d.paths, 3000)
    ]);
    return ContentService.createTextOutput("ok");
  } catch (err) {
    return ContentService.createTextOutput("error");
  } finally {
    lock.releaseLock();
  }
}

// 주소를 브라우저로 열었을 때 동작 확인용
function doGet() {
  return ContentService.createTextOutput("멈춤 연습장 결과 수집 중");
}

function getSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEAD);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, HEAD.length).setFontWeight("bold");
  }
  return sheet;
}

// 숫자가 아니면 빈칸
function num(v) {
  const n = Number(v);
  return v === null || v === undefined || v === "" || isNaN(n) ? "" : n;
}

// 글자 길이 제한, '=' 등으로 시작하면 수식으로 실행되지 않게 앞에 ' 를 붙임
function text(v, max) {
  let s = String(v === null || v === undefined ? "" : v).slice(0, max);
  if (/^[=+\-@]/.test(s)) s = "'" + s;
  return s;
}
