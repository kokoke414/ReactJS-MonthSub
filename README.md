# 📝 MonthSub
<img width="20%" src="https://user-images.githubusercontent.com/88189402/146893680-0c14334c-4e23-4164-b0e7-04a608b0971b.jpg"/>

</br>

# 🖼 프로젝트 설명

### 한줄 소개
Monthsub은 개인 작가가 보다 편리하게 구독자를 모집하고, 작품을 제공할 수 있게 해주는 1인 창작가를 위한 월간 구독 플랫폼 서비스입니다!! 😎

### 기획 배경
작가 이슬아는 "학자금 대출을 갚겠다"며 한 달 원고료 1만원을 받고 구독자를 직접 모집해 메일링을 한 '일간 이슬아'가 성공을 거두면서 메일링 구독 서비스는 신입 및 비등단 작가들의 새로운 지면의 창이 되어가고 있다.
작가의 SNS에 홍보, 일정 기간동안 구글 폼을 이용하여 유료 독자를 모집하고, 작가의 창작물을 독자들에게 이메일 발송을 통해 공유하는 형식이다.
지금은 작가들의 홍보가 개인 SNS에 의존적이기 때문에 작가와 독자의 연결이 어려운 부분이 있다. 작가와 독자를 이어줄 수 있는 플랫폼이 있으면 좋지 않을까?

</br>

# 📜 서비스 플로우

#### 작가

1. 작가가 되고 싶은 유저는 회원가입을 하고 구독자 모집 게시글을 올린다.
2. 구독자 모집 게시글에는 연재 기간, 연재 요일, 시간, 금액, 카테고리 등 연재에 대한 정보를 기입한다.
3. 설정한 연재 기간동안 지정한 요일, 시간에 맞춰 아티클을 작성한다.

#### 독자

1. 구독자 모집 중인 게시글들을 조회하거나 생각해둔 작품 또는 작가를 검색한다.
2. 마음에 드는 작품을 구독(결재)한다.
3. 작가가 정한 요일과 시간에 맞춰 작가채널에 업로드 된 아티클을 감상한다.
4. 작가 팔로우, 게시글 좋아요, 댓글 작성을 할 수 있다.

</br>

# 📜 배포

- 링크: [MonthSub](https://monthsub.netlify.app/)

</br>

# 📜 프로젝트 문서
- [협업 문서  - 노션](https://www.notion.so/backend-devcourse/13-7f3fe0d00a2442b490c62a41d85f3dd2)
- [프로젝트 이슈 관리 - 지라](https://monthsub.atlassian.net/jira/software/projects/MON/boards/1)

</br>

# 🗓 개발 일정
| 단위  | 주요 업무                                                                                                                                                                                                                                                                                                                                                                                    |
| ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0차 스프린트  | 프로젝트 세팅 / 와이어프레임 및 기초 디자인 작업 / 기초 컴포넌트 구현                                                                                                                                                                                                                                                                         |
| 1차 스프린트    | 시리즈 작성&수정&조회 페이지 구현 / 로그인 페이지 구현 |
| 2차 스프린트  | 회원가입 / 아티클 / 채널 / 마이페이지 구현                                                                                                                                                                                                                                                                                |
| 3차 스프린트   | 메인 페이지 / 결제 페이지 구현                                                                                                                                                                   |
| 4차 스프린트 | 좋아요&팔로우 기능 구현 / 기능 고도화 / 코드 프리징                                                                                                                                                                            |
</br>

# 📚 기술 스택

| 분류  | 기술                                                                                                                                                                                                                                                                                                                                                                                    |
| ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 언어  | <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=ffffff"/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=ffffff"/>                                                                                                                                                                                                                                                                            |
| FE    | <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=ffffff"/> <img src="https://img.shields.io/badge/Emotion-DB7093?style=for-the-badge&logo=emotion&logoColor=ffffff"/> <img src="https://img.shields.io/badge/Axios-8DD6F9?style=for-the-badge"/> <img src="https://img.shields.io/badge/Craco-9999FF?style=for-the-badge"/> |
| 배포  | <img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=Netlify&logoColor=ffffff"/>                                                                                                                                                                                                                                                                                |
| ETC   | <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=ESLint&logoColor=ffffff"/> <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=ffffff"/>                                                                                                                                                                     |
| Tools | <img src="https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=Jira&logoColor=ffffff"/> <img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=ffffff"/>                                                                                                                                                                             |
</br>

# 🛠 주요 기능 및 페이지 설명

</br>

**"시리즈"** 
구독 모집 게시글로 모집 기간엔 결재가 가능하고, 연재 기간엔 아티클 생성, 조회가 가능하다.

**"아티클"** 
작가가 연재하는 게시글로 해당 시리즈를 구독한 독자만 조회 가능하다.

</br>

### **메인 페이지**

- 인기 작가, 인기 시리즈, 최신 시리즈 조회 가능
<img width="60%" src="https://user-images.githubusercontent.com/81611808/159422767-5217f86f-1968-48bb-b9b2-ce3ed32e6584.png"/>

</br>

### **시리즈 목록 조회**

- 원하는 카테고리와 게시 상태를 선택해 필터링된 시리즈 조회 가능
- 무한 스크롤링 기능 구현
<img width="60%" src="https://user-images.githubusercontent.com/81611808/159422822-39e782e6-e297-48e7-a6a8-60bca2561207.png"/>


</br>

### **시리즈 생성/수정**

- 구독자를 모집해 연재하고 싶은 유저가 작성함
- 카테고리, 설명, 구독모집 기간, 연재기간, 연재 요일/시간, 가격 등의 정보 기입
<img width="60%" src="https://user-images.githubusercontent.com/81611808/159424983-f4e8f4b3-8375-4c51-85c4-7c5cb1783dd4.png"/>


</br>

### **시리즈 상세 정보 조회**

- 작가가 생성한 시리즈 정보를 조회할 수 있음
- 작가가 아티클을 작성해 연재하는 페이지
- 독자는 시리즈를 구독하고, 연재된 아티클을 조회할 수 있음
<img width="60%" src="https://user-images.githubusercontent.com/81611808/159424106-02d7a227-28bc-43cb-88a8-acea1d4e5674.png"/>

</br>

### **시리즈 결제(구독)**

- 모집 기간 내에 시리즈 페이지에서 결제해 구독할 수 있음
<img width="60%" src="https://user-images.githubusercontent.com/81611808/159449617-51e7b23c-6445-43a9-978a-d0ffd285cbef.gif"/>

</br>

### **아티클 생성/수정**

- 작가는 연재 기간 동안 설정한 요일, 시간에 아티클을 작성할 수 있음
<img width="60%" src="https://user-images.githubusercontent.com/81611808/159446658-dfa52c5a-8ccd-43c5-84e4-8388a24a206e.png"/>

</br>

### **아티클 조회**

- 구독한 독자에 한하여 작가의 아티클을 조회할 수 있음
<img width="60%" src="https://user-images.githubusercontent.com/81611808/159431018-40ffa46e-686c-4dd4-bc85-78cdc1f0bdad.png"/>



</br>

### **시리즈 검색**

- 제목 또는 작가 이름으로 시리즈를 검색할 수 있음
<img width="60%" src="https://user-images.githubusercontent.com/81611808/159449240-621a94ca-d746-489f-be1f-2154983af3c2.gif"/>

</br>

### **채널**

- 모든 유저는 개인 채널을 가지게 됨
- 본인 채널 - 팔로우한 작가 & 구독한 시리즈 & 작성한 시리즈 조회 가능
- 작가 또는 다른 유저 채널 - 팔로우한 작가 & 작성한 시리즈 조회 가능  
<img width="60%" src="https://user-images.githubusercontent.com/81611808/159423730-9cbbeba5-baed-40da-9fff-a09190200ded.png"/>



</br>

# 🗂 디렉토리 구조
<img width="494" alt="image" src="https://user-images.githubusercontent.com/81611808/155936129-1eb36e8b-525e-4f5c-9f11-1ee0ab4eeb70.png">

</br>

# 🧸 팀원 소개

|                                        [박송이](https://github.com/thddlmy)                                         |                                         [양윤](https://github.com/yyoooon)                                          |                                       [박예진](https://github.com/kokoke414)                                        |
| :-----------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------: |
| <img width="60%" alt="image" src="https://user-images.githubusercontent.com/88189402/146892679-4aaaf9b4-1412-4cb9-b49f-65b0d92e3d75.jpeg"> | <img width="60%" alt="image" src="https://user-images.githubusercontent.com/81611808/155938773-ad5b8169-6468-4d95-9824-b0ca2cfe0306.png"> | <img width="60%" alt="image" src="https://user-images.githubusercontent.com/88189402/146893012-17507821-c407-4a5b-842e-f93792b3889a.png"> |

</br>

# 👧 내 작업 내역

바로가기를 누르시면 해당 파일의 코드를 확인하실 수 있습니다.

<br />

## 컴포넌트별로 확인하기

### atom

- [Icon](https://github.com/kokoke414/ReactJS-MonthSub/blob/develop/src/components/atom/Icon/index.jsx)
- [IconWrapper](https://github.com/kokoke414/ReactJS-MonthSub/blob/develop/src/components/atom/IconWrapper/index.jsx)

### molecules

- [Card](https://github.com/kokoke414/ReactJS-MonthSub/blob/develop/src/components/molecules/Card/index.jsx)
- [CheckedButtonList](https://github.com/kokoke414/ReactJS-MonthSub/blob/develop/src/components/molecules/CheckedButtonList/index.jsx)
- [NoData](https://github.com/kokoke414/ReactJS-MonthSub/blob/develop/src/components/molecules/NoData/index.jsx)
- [UserProfile](https://github.com/kokoke414/ReactJS-MonthSub/blob/develop/src/components/molecules/UserProfile/index.jsx)

### organisms

- comment
    - [CommentForm](https://github.com/kokoke414/ReactJS-MonthSub/blob/develop/src/components/organisms/comment/CommentForm/index.jsx)
    - [CommentItem](https://github.com/kokoke414/ReactJS-MonthSub/blob/develop/src/components/organisms/comment/CommentItem/index.jsx)
    - [CommentList](https://github.com/kokoke414/ReactJS-MonthSub/blob/develop/src/components/organisms/comment/CommentList/index.jsx)
- follow
    - [FollowListItem](https://github.com/kokoke414/ReactJS-MonthSub/blob/develop/src/components/organisms/follow/FollowListItem/index.jsx)
- general
    - [CardList](https://github.com/kokoke414/ReactJS-MonthSub/blob/develop/src/components/organisms/general/CardList/index.jsx)
    - [CardSlider](https://github.com/kokoke414/ReactJS-MonthSub/blob/develop/src/components/organisms/general/CardSlider/index.jsx)
    - [HottestList](https://github.com/kokoke414/ReactJS-MonthSub/blob/develop/src/components/organisms/general/HottestList/index.jsx)
- series
    - [DetailBody](https://github.com/kokoke414/ReactJS-MonthSub/blob/develop/src/components/organisms/series/DetailBody/index.jsx)
- user
    - [UserList](https://github.com/kokoke414/ReactJS-MonthSub/blob/develop/src/components/organisms/user/UserList/index.jsx)

<br />

## 페이지별로 확인하기

### [홈](https://github.com/kokoke414/ReactJS-MonthSub/blob/develop/src/pages/general/HomePage.jsx)

- URL: https://monthsub.netlify.app/
- 디자인 및 마크업
- API연동 및 기능 구현
    - 인기 시리즈 슬라이드
    - 작가 조회
    - 리스트 조회

### [구독 모집](https://github.com/kokoke414/ReactJS-MonthSub/blob/develop/src/pages/series/SeriesListPage.jsx)

- URL: https://monthsub.netlify.app/series
- 디자인 및 마크업
- API연동 및 기능 구현
    - 리스트 조회
    - 카테고라이징
    - 무한 스크롤링

### [시리즈 상세](https://github.com/kokoke414/ReactJS-MonthSub/blob/develop/src/pages/series/SeriesDetailPage.jsx)

- URL: https://monthsub.netlify.app/series/1
- 디자인 및 마크업
- API연동 및 기능 구현
    - 시리즈 상세 조회
    - 아티클 리스트 조회
    - 댓글 및 대댓글 생성/조회/수정/삭제

### [채널](https://github.com/kokoke414/ReactJS-MonthSub/blob/develop/src/pages/channel/ChannelPage.jsx)

- URL: https://monthsub.netlify.app/channel/6
- 디자인 및 마크업
- API연동 및 기능 구현
    - 유저 프로필 조회
    - 팔로우 리스트 조회
    - 시리즈 슬라이드

### [검색](https://github.com/kokoke414/ReactJS-MonthSub/blob/develop/src/pages/general/SearchPage.jsx)

- URL: https://monthsub.netlify.app/search (분류 제목, 키워드 '어둠'으로 검색하시면 게시물 확인이 가능합니다.)
- 디자인 및 마크업

<br />

## 기타

- 로고 디자인
- src/styles
    - [constants](https://github.com/kokoke414/ReactJS-MonthSub/blob/develop/src/styles/constants.jsx)
    - [theme](https://github.com/kokoke414/ReactJS-MonthSub/blob/develop/src/styles/theme.jsx)
- src/utils
    - [convertCategory](https://github.com/kokoke414/ReactJS-MonthSub/blob/develop/src/utils/convertCategory.jsx)
    - [convertDay](https://github.com/kokoke414/ReactJS-MonthSub/blob/develop/src/utils/convertDay.jsx)
