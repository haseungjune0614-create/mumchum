# 시나리오 분기 지도

5개 시나리오의 선택 흐름입니다. 초록은 안전, 노랑은 아슬아슬, 빨강은 피해 결말입니다. `index.html`의 시나리오 데이터에서 자동으로 만들었습니다.
선택 화면 11개, 결말 17개.


## 1. 자녀를 사칭한 문자

```mermaid
flowchart TD
  child_start{"어떻게 하시겠어요?"}
  child_start -->|"그래, 무슨 일이야? 하고 답장한다"| child_n2
  child_start -->|"평소 쓰던 번호로 아이에게 직접 전화해 본다"| child_safe1
  child_start -->|"누군지 모르니 답장하지 않는다"| child_safe2
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
2. 답장하지 말고, 휴대폰에 저장된 원래 번호로 직접 전화하세요.
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
  card_n2 -->|"이상하다. 끊고 카드 뒷면 번호로 다시 전화한다"| card_safe1
  card_safe1["안전: 진짜 카드사에 물어보니 발급된 카드가 없었어요. 문자는 미끼였습니다."]:::safe
  card_safe2["안전: 자녀와 함께 카드사에 확인해 사기를 막았어요."]:::safe
  card_danger1["피해: 설치한 앱으로 사기범이 휴대폰을 마음대로 조종해 계좌의 돈을 빼 갔어요."]:::danger
  classDef safe fill:#E2F3E9,stroke:#1A7A47
  classDef warn fill:#FBF0DC,stroke:#9A5B00
  classDef danger fill:#FBE5E3,stroke:#B8322A
```

**이것만 기억하세요**

1. 모르는 카드 발급 문자는 미끼입니다. 문자 속 번호로 전화하지 마세요.
2. 카드사나 은행 확인은 카드 뒷면이나 통장에 적힌 번호로 직접 하세요.
3. 전화로 앱을 설치하라고 하면 사기입니다.
