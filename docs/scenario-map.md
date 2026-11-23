# 시나리오 분기 지도

7개 시나리오의 선택 흐름입니다. 초록은 안전, 노랑은 아슬아슬, 빨강은 피해 결말입니다. `index.html`의 시나리오 데이터에서 `node scripts/make-map.js`로 자동으로 만들었습니다.
선택 화면 17개, 결말 27개.

## 1. 자녀를 사칭한 문자

```mermaid
flowchart TD
  child_start{"어떻게 하시겠어요?"}
  child_start -->|"그래, 무슨 일이야? 하고 답장한다"| child_n2
  child_start -->|"이 번호로 전화해서 아이 목소리인지 들어 본다"| child_voice
  child_start -->|"평소 쓰던 번호로 아이에게 직접 전화해 본다"| child_safe1
  child_start -->|"누군지 모르니 답장하지 않는다"| child_safe2
  child_voice{"목소리가 아이 같아요. 어떻게 하시겠어요?"}
  child_voice -->|"목소리를 들었으니 믿고 보내 준다"| child_danger1
  child_voice -->|"그래도 끊고, 저장된 원래 번호로 다시 전화한다"| child_warn1
  child_warn1["아슬아슬: 원래 번호로 확인해서 막았어요. 하지만 문자 속 번호로 걸면 사기범이 받아요. 요즘은 AI로 가족 목소리도 흉내 낼 수 있으니, 처음부터 저장된 번호로 거세요."]:::warn
  child_n2{"아이가 급하다고 해요. 어떻게 하시겠어요?"}
  child_n2 -->|"신분증 사진과 카드 번호를 보낸다"| child_danger1
  child_n2 -->|"가족 암호를 물어본다"| child_n3
  child_n2 -->|"'네 원래 번호로 전화할게' 하고 대화를 멈춘다"| child_safe1
  child_n3{"암호를 대답하지 못해요."}
  child_n3 -->|"이상하다. 원래 번호로 아이에게 전화한다"| child_safe1
  child_n3 -->|"애가 급하다니 그냥 보내준다"| child_danger1
  child_safe1["안전: 원래 번호로 전화해 보니 아이는 회사에서 일하는 중이었어요. 문자는 사기였습니다."]:::safe
  child_safe2["안전: 잘하셨어요. 가족에게 이런 문자가 왔다고 알리고, 번호를 차단하면 더 좋아요."]:::safe
  child_danger1["피해: 사기범이 신분증과 카드 정보로 어르신 이름의 휴대폰을 새로 만들고 대출을 받았어요."]:::danger
  classDef safe fill:#E2F3E9,stroke:#1A7A47
  classDef warn fill:#FBF0DC,stroke:#9A5B00
  classDef danger fill:#FBE5E3,stroke:#B8322A
```

**이것만 기억하세요**

1. 가족이 '폰이 고장 났다', '번호가 바뀌었다'며 돈이나 신분증을 달라고 하면 먼저 사기를 의심하세요.
2. 답장하지 말고, 휴대폰에 저장된 원래 번호로 직접 전화하세요. 문자 속 번호로 걸면 목소리가 비슷해도 사기범이 받아요.
3. 가족끼리 정한 암호를 물어보세요. 대답하지 못하면 사기입니다.

## 2. 부고 문자

```mermaid
flowchart TD
  bugo_start{"모르는 이름의 부고 문자가 왔어요."}
  bugo_start -->|"누가 돌아가셨는지 링크를 눌러 확인한다"| bugo_n2
  bugo_start -->|"링크는 누르지 않고, 아는 사람에게 전화로 물어본다"| bugo_safe1
  bugo_start -->|"문자를 지우고 번호를 차단한다"| bugo_safe2
  bugo_n2{"어떻게 하시겠어요?"}
  bugo_n2 -->|"[설치]를 누른다"| bugo_danger1
  bugo_n2 -->|"이상하다. 화면을 닫고 가족에게 알린다"| bugo_warn1
  bugo_safe1["안전: 아는 사람들 중 돌아가신 분은 없었어요. 링크를 누르지 않은 것이 정답입니다."]:::safe
  bugo_safe2["안전: 잘하셨어요. 링크를 누르지 않으면 피해가 생기지 않아요."]:::safe
  bugo_warn1["아슬아슬: 다행히 앱은 설치하지 않았어요. 링크를 누른 것만으로도 위험할 수 있으니 118(한국인터넷진흥원)에 상담해 보세요."]:::warn
  bugo_danger1["피해: 설치한 앱이 악성 앱이었어요. 연락처와 문자, 은행 정보가 사기범에게 넘어갔습니다."]:::danger
  classDef safe fill:#E2F3E9,stroke:#1A7A47
  classDef warn fill:#FBF0DC,stroke:#9A5B00
  classDef danger fill:#FBE5E3,stroke:#B8322A
```

**이것만 기억하세요**

1. 부고·청첩장 문자 속 인터넷 주소(링크)는 누르지 마세요.
2. 진짜 부고라면 아는 사람에게 전화로 확인할 수 있어요.
3. '앱을 설치하라'는 화면이 나오면 절대 누르지 마세요.

## 3. 택배 주소 확인 문자

```mermaid
flowchart TD
  parcel_start{"마침 시킨 물건이 있어요."}
  parcel_start -->|"링크를 눌러 주소를 고친다"| parcel_n2
  parcel_start -->|"늘 쓰던 택배 앱이나 물건 산 곳에 직접 확인한다"| parcel_safe1
  parcel_start -->|"자녀에게 문자를 보여주고 물어본다"| parcel_safe2
  parcel_n2{"300원이라고 해요."}
  parcel_n2 -->|"300원이면 괜찮다. 입력한다"| parcel_danger1
  parcel_n2 -->|"주소 고치는데 카드번호가 왜 필요하지? 닫는다"| parcel_warn1
  parcel_safe1["안전: 택배 앱에는 아무 문제가 없었어요. 문자는 가짜였습니다."]:::safe
  parcel_safe2["안전: 자녀가 바로 사기 문자라고 알려줬어요. 함께 확인하는 습관이 가장 든든합니다."]:::safe
  parcel_warn1["아슬아슬: 잘 멈추셨어요. 이름이나 주소를 이미 입력했다면 카드사에 전화해 확인해 두세요."]:::warn
  parcel_danger1["피해: 300원이 아니라 카드 정보가 통째로 넘어가 큰돈이 결제됐어요."]:::danger
  classDef safe fill:#E2F3E9,stroke:#1A7A47
  classDef warn fill:#FBF0DC,stroke:#9A5B00
  classDef danger fill:#FBE5E3,stroke:#B8322A
```

**이것만 기억하세요**

1. '[국제발신]'으로 오는 택배 문자는 대부분 사기입니다.
2. 택배 확인은 문자 링크가 아니라 늘 쓰던 앱이나 산 곳에서 하세요.
3. 적은 돈이라도 카드번호와 비밀번호를 달라고 하면 사기입니다.

## 4. 검찰 수사관이라는 전화

```mermaid
flowchart TD
  prosecutor_start{"검찰이라고 해요. 어떻게 하시겠어요?"}
  prosecutor_start -->|"깜짝 놀라 시키는 대로 한다"| prosecutor_n2
  prosecutor_start -->|"'제가 직접 검찰청에 전화하겠습니다' 하고 끊는다"| prosecutor_safe1
  prosecutor_start -->|"가족에게 말하면 안 된다니 혼자 고민한다"| prosecutor_n2
  prosecutor_n2{"은행에 가라고 해요."}
  prosecutor_n2 -->|"은행에서 돈을 찾는다"| prosecutor_danger1
  prosecutor_n2 -->|"은행 직원에게 사실대로 이야기한다"| prosecutor_safe2
  prosecutor_n2 -->|"전화를 끊고 112에 신고한다"| prosecutor_safe1
  prosecutor_safe1["안전: 검찰·경찰·금융감독원은 전화로 돈을 옮기라고 하지 않아요. 끊고 확인한 것이 정답입니다."]:::safe
  prosecutor_safe2["안전: 은행 직원이 사기임을 알아채고 경찰에 신고해 돈을 지켰어요."]:::safe
  prosecutor_danger1["피해: 검찰은 절대 돈을 옮기라고 하지 않아요. 평생 모은 돈을 잃었습니다."]:::danger
  classDef safe fill:#E2F3E9,stroke:#1A7A47
  classDef warn fill:#FBF0DC,stroke:#9A5B00
  classDef danger fill:#FBE5E3,stroke:#B8322A
```

**이것만 기억하세요**

1. 검찰·경찰·금융감독원은 전화로 돈을 옮기라고 절대 하지 않습니다.
2. '아무에게도 말하지 마라'는 말이 나오면 사기입니다.
3. 일단 끊고, 112나 가족에게 바로 알리세요.

## 5. 카드 발급 완료 문자

```mermaid
flowchart TD
  card_start{"카드를 신청한 적이 없어요."}
  card_start -->|"문자에 적힌 고객센터 번호로 전화한다"| card_n2
  card_start -->|"가진 카드 뒷면에 적힌 번호로 직접 전화한다"| card_safe1
  card_start -->|"자녀에게 보여주고 같이 확인한다"| card_safe2
  card_n2{"앱을 설치하라고 해요."}
  card_n2 -->|"앱을 설치한다"| card_danger1
  card_n2 -->|"이상하다. 끊고 카드 뒷면 번호로 다시 전화한다"| card_warn1
  card_safe1["안전: 진짜 카드사에 물어보니 발급된 카드가 없었어요. 문자는 미끼였습니다."]:::safe
  card_safe2["안전: 자녀와 함께 카드사에 확인해 사기를 막았어요."]:::safe
  card_warn1["아슬아슬: 앱을 설치하기 전에 잘 끊으셨어요. 하지만 문자 속 고객센터 번호로 건 순간 이미 사기범과 연결된 거예요. 확인 전화는 처음부터 카드 뒷면 번호로 하세요."]:::warn
  card_danger1["피해: 설치한 앱으로 사기범이 휴대폰을 마음대로 조종해 계좌의 돈을 빼 갔어요."]:::danger
  classDef safe fill:#E2F3E9,stroke:#1A7A47
  classDef warn fill:#FBF0DC,stroke:#9A5B00
  classDef danger fill:#FBE5E3,stroke:#B8322A
```

**이것만 기억하세요**

1. 모르는 카드 발급 문자는 미끼입니다. 문자 속 번호로 전화하지 마세요.
2. 카드사나 은행 확인은 카드 뒷면이나 통장에 적힌 번호로 직접 하세요.
3. 전화로 앱을 설치하라고 하면 사기입니다.

## 6. AI 가짜 의사의 건강식품 광고

```mermaid
flowchart TD
  aidoctor_start{"의사가 직접 나와서 권해요. 어떻게 하시겠어요?"}
  aidoctor_start -->|"의사가 하는 말이니 [지금 구매하기]를 누른다"| aidoctor_n2
  aidoctor_start -->|"다니는 병원 의사나 약사에게 이 제품을 물어본다"| aidoctor_safe1
  aidoctor_start -->|"자녀에게 영상을 보여 주고 같이 살펴본다"| aidoctor_safe2
  aidoctor_n2{"할인이 오늘까지래요."}
  aidoctor_n2 -->|"놓치기 전에 카드번호를 입력한다"| aidoctor_danger1
  aidoctor_n2 -->|"뭔가 이상하다. 화면을 닫고 가족에게 물어본다"| aidoctor_warn1
  aidoctor_safe1["안전: 약사에게 물어보니 '먹기만 하면 낫는' 건강식품은 없다고 했어요. 영상 속 의사는 AI로 만든 가짜였습니다."]:::safe
  aidoctor_safe2["안전: 자녀가 함께 보더니 AI로 만든 가짜 의사라고 알려줬어요. 'AI로 만든 영상'이라는 표시도 없었어요."]:::safe
  aidoctor_warn1["아슬아슬: 결제 전에 잘 멈추셨어요. 이미 돈을 냈다면 카드사와 1372(소비자상담센터)에 바로 알리세요."]:::warn
  aidoctor_danger1["피해: 평범한 식품을 비싸게 산 데다, 카드 정보가 넘어가 다른 결제까지 빠져나갔어요. 먹던 약을 끊어 무릎 통증도 심해졌어요."]:::danger
  classDef safe fill:#E2F3E9,stroke:#1A7A47
  classDef warn fill:#FBF0DC,stroke:#9A5B00
  classDef danger fill:#FBE5E3,stroke:#B8322A
```

**이것만 기억하세요**

1. 광고 속 의사·유명인은 AI로 만든 가짜일 수 있어요. 영상에서 특정 제품을 사라고 하면 의심하세요.
2. '먹기만 하면 낫는다', '오늘만 할인'은 과장 광고의 신호예요.
3. 사기 전에, 그리고 먹던 약을 끊기 전에 다니는 병원 의사나 약사에게 먼저 물어보세요.

## 7. 지원금 준다는 가짜 뉴스 영상

```mermaid
flowchart TD
  fakenews_start{"뉴스라서 믿음이 가요. 어떻게 하시겠어요?"}
  fakenews_start -->|"링크를 눌러 바로 신청한다"| fakenews_n2
  fakenews_start -->|"친구들 단체방에 영상을 공유한다"| fakenews_n3
  fakenews_start -->|"주민센터나 129(보건복지상담센터)에 진짜인지 물어본다"| fakenews_safe1
  fakenews_n2{"지원금 받을 계좌를 적으래요."}
  fakenews_n2 -->|"모두 입력하고 인증번호도 넣는다"| fakenews_danger1
  fakenews_n2 -->|"인증번호까지 달라니 이상하다. 닫고 주민센터에 물어본다"| fakenews_warn1
  fakenews_n3{"친구가 가짜라고 해요."}
  fakenews_n3 -->|"그래도 혹시 모르니 링크를 눌러 본다"| fakenews_n2
  fakenews_n3 -->|"공유한 영상을 지우고 주민센터에 확인한다"| fakenews_warn2
  fakenews_safe1["안전: 주민센터에서는 그런 지원금이 없다고 했어요. 영상 속 아나운서는 AI로 만든 가짜였습니다."]:::safe
  fakenews_warn1["아슬아슬: 개인정보를 넣기 전에 멈추셨어요. 이미 무언가 입력했다면 가족에게 알리고 118(한국인터넷진흥원)에 상담하세요."]:::warn
  fakenews_warn2["아슬아슬: 가짜 뉴스를 여러 사람에게 퍼뜨릴 뻔했어요. 놀라운 소식일수록 공유하기 전에 먼저 확인해요."]:::warn
  fakenews_danger1["피해: 주민등록번호와 인증번호로 사기범이 어르신 이름의 휴대폰을 만들고 대출을 받았어요. 지원금은 처음부터 없었습니다."]:::danger
  classDef safe fill:#E2F3E9,stroke:#1A7A47
  classDef warn fill:#FBF0DC,stroke:#9A5B00
  classDef danger fill:#FBE5E3,stroke:#B8322A
```

**이것만 기억하세요**

1. 정부 지원금은 영상 속 링크로 신청하지 않아요. 주민센터나 129에 먼저 물어보세요.
2. 아나운서와 뉴스 화면도 AI로 진짜처럼 만들 수 있어요. 믿을 만한 방송사 뉴스에도 나오는지 확인하세요.
3. 놀라운 영상일수록 공유하기 전에 멈추세요. 가족과 친구가 피해를 볼 수 있어요.
