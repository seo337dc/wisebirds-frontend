# 과제 결과 및 내용

## 과제 요구사항

### 1. TO-DO 보드

1. 보드를 생성할 수 있어야 합니다. [완료]
2. 보드를 수정할 수 있어야 합니다. [완료]
3. 보드를 삭제할 수 있어야 합니다. [완료]
4. 보드의 순서를 변경할 수 있어야 합니다. [완료]

### 2. TO-DO 할일

1. 할 일은, 하나의 텍스트 박스를 가집니다. [완료]
2. 보드 안에서, 할 일을 생성할 수 있어야 합니다. [완료]
3. 보드 안에서, 할 일을 삭제할 수 있어야 합니다. [완료]
4. 보드 안에서, 할 일의 내용을 수정할 수 있어야 합니다. [완료]
5. 할 일의 위치를 변경할 수 있어야 한다. (보드간의 할 일 위치, 보드 내에서의 할 일 위치) [완료]

## 🛠 사용한 언어 및 프레임워크

- Framework: Next.js 14
- Core: Typescript
- State Management: Zustand
- Styling: Tailwind CSS, Styled-components
- library: dnd-kit (순서 및 위치 변경 라이브러리)

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
