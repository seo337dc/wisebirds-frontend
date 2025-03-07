# 과제 결과 및 내용

1. 초기 세팅 : 1시간 (사용하던 방식으로 재활용 및 필요한 라이브러리 및 파일구조 세팅)
2. api 세팅 : 약 1.5시간 (목데이터 생성 및 각 api 관련 코드 작성)
3. Header ui 및 기능 개발 : 약 1시간 (antd 라이브러리 세팅, 컴포넌트 개발, 메뉴 권한, 내 정보, 권한 설정)

## 과제 요구사항

### 1. 혜더

1. 로고

- Wisebirds 표기

2. 메뉴 권한

- 캠페인 : 어드민, 매니저, 뷰어 Select 박스 노출
- 사용자 : 어드민만 노출

3. 내 정보

- 클릭 시 팝업으로 이름, 메일(아이디), 회사 이름 표기
- api 목 데이터로 데이터 노출

4. 권한 설정

- 어드민, 매니저, 뷰어 선택하여 권한을 변경 (Select 박스 사용)
- 매니저, 뷰어 선택 시 사용자 메뉴는 제거 & 접근 불가

### 2. 캠페인 리스트 조회

1. 할 일은, 하나의 텍스트 박스를 가집니다. [완료]

### 3. 캠페인 상태 수정

### 4. 사용자 리스트 조회

### 5. 사용자 생성

### 6. 사용자 수정

### 7. 사용자 이메일 중복 체크

1. 할 일은, 하나의 텍스트 박스를 가집니다. [완료]

## 🛠 사용한 언어 및 프레임워크

- Framework: Next.js 14
- Core: Typescript
- State Management: Zustand, React-query
- Styling: Tailwind CSS, Styled-components
- library: antd-ui

## 📂 폴더 구조

📂 src
┣ 📂 app
┃ ┣ page.tsx # 메인 및 board 페이지
┃ ┣ 📂 detail/[slug]/page.tsx # board 상세 페이지
┣ 📂 components
┃ ┣ 📂 common # Layout 관리 컴포넌트
┃ ┣ 📂 template # 각 화면에 적용되는 template (보드 생성 Modal)
┃ ┣ 📂 ui # 재사용 가능한 UI 컴포넌트 (Button, Input, Modal ... 등)
┃ ┣ 📂 view # board, board-detail
┣ 📂 model # TypeScript 인터페이스 정의
┣ 📂 store # Zustand 상태 관리
┣ 📂 styles # 글로벌 스타일 및 스타일컴포넌트 관리
┣ 📂 public # 정적 파일 (아이콘, 로고 등)
┣ 📂 util # 기타 코드 관리

## 실행방법

```shell
npm install
npm run build
npm run dev
```
