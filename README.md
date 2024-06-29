## 프로젝트 소개
Codeit 단기심화 과제 to-do
간단한 할일과 이미지,메모 등을 저장하는 웹,앱 입니다.
 - Next.js
 - Typescript

## 배포완료
주소 : https://codeit-todo.vercel.app/
Deployment : Vercel

# 헤더
- 파비콘 적용 하였습니다.
- 로고 클릭시 메인페이지로 이동하며, pc와 모바일 로고가 다르게 나타납니다.

# 메인페이지
- 상단의 input에서 할일을 작성하여, Enter 및 추가하기 버튼을 클릭하면 할 일이 추가됩니다.
- 추가하기 버튼이 PC와 모바일이 다르게 나타납니다.
- 할일 목록과 완료된 목록을 따로 볼수있으며, 체크박스 클릭시 해야할일 <-> 완료 목록을 오갈수있습니다.
- 제목 클릭시 상세페이지로 이동됩니다.

# 상세페이지
- 완료했는지 상태와 제목을 변경할수있습니다.
- 이미지 ( 최대 1개 ) 업로드가 가능하고 미리보기가 가능합니다.
- 이미지 추가 이미지가 업로드된 이미지가 있을때와 없을때 다르게 나타납니다.
- 메모를 작성할수있습니다.
- 수정, 삭제 기능을 사용할수있습니다.

# 폴더구조
```
📦app
 ┣ 📂backup
 ┣ 📂components
 ┃ ┣ 📜check-list-detail.tsx
 ┃ ┣ 📜check-list.tsx
 ┃ ┣ 📜header.tsx
 ┃ ┗ 📜search.tsx
 ┣ 📂detail
 ┃ ┗ 📂[id]
 ┃ ┃ ┗ 📜page.tsx
 ┣ 📂main
 ┃ ┗ 📜page.tsx
 ┣ 📂model
 ┃ ┗ 📜todo.tsx
 ┣ 📜globals.css
 ┣ 📜layout.tsx
 ┣ 📜page.module.css
 ┗ 📜page.tsx
```


## 디자인
- PC환경 - 1920px
- 태블릿환경 - 770px
- 모바일환경 - 370px
반응형으로 작업하였습니다.
