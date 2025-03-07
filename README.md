# 과제 결과 및 내용

1. 초기 세팅 : 1시간 (사용하던 방식으로 재활용 및 필요한 라이브러리 및 파일구조 세팅)
2. api 세팅 : 약 1.5시간 (목데이터 생성 및 각 api 관련 코드 작성)
3. Header ui 및 기능 개발 : 약 1시간 (antd 라이브러리 세팅, 컴포넌트 개발, 메뉴 권한, 내 정보, 권한 설정)
4. 캠페인 페이지 ui 및 기능 개발 : 약 1.5시간 (테이블 적용, 기능 적용, api 적용 및 처리)
5. 사용자 페이지 ui 및 목록 노출 개발 : 약 0.5시간(30분) (테이블 적용, api 적용)

## 과제 요구사항

### 1. 헤더

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

1. 테이블의 컬럼 위치 및 텍스트 : 각 요구사항에 맞게 적용(antd table의 align 적용)
2. 캠페인 페이지 - 제목 : 캠페인 관리
3. 캠페인 목록 리스트 노출 : 목록 목데이터 api 적용
4. 페이지네이션 : 25개 씩

### 3. 캠페인 상태 수정

- 뷰어일 경우 클릭 방지
- 상태 변경 api 적용

### 4. 사용자 리스트 조회

1. 사용자 페이지 - 제목 : 사용자 관리
2. 요구사항에 맞게 테이블의 컬럼 값 노출
3. 사용자 목록 리스트 노출 : 목록 목데이터 api 적용
4. 페이지네이션 25개 씩

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
┣ 📂 api # 내 정보, 캠페인, 사용자 관련 api 관리 폴더
┣ 📂 app
┃ ┣ page.tsx # 메인 페이지 (빈 페이지)
┃ ┣ 📂 campaign/page.tsx # 캠페인 목록 페이지
┣ 📂 components
┃ ┣ 📂 common # Layout 관리 컴포넌트
┃ ┣ 📂 template # 각 화면에 적용되는 template (보드 생성 Modal)
┃ ┣ 📂 view
┃ ┃ ┣ 📂 home # 메인 페이지 관련된 view 컴포넌트
┃ ┃ ┣ 📂 campaign # 캠페인 페이지 관련된 view 컴포넌트
┣ 📂 data # api에 적용할 목데이터 관리 폴더
┣ 📂 hook # 커스텀 훅(react-query용 커스텀 hook) 폴더
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
