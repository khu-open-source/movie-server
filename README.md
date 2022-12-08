![header](https://capsule-render.vercel.app/api?type=egg&color=auto&height=200&section=header&text=WATCHVIE%20&fontSize=60)



# About the Project 🎬 - WATCHVIE
Watch Movie의 줄임말로 영화 API를 이용한 영화 정보를 제공하는 웹 서비스입니다.

영화 제목, 장르, 개봉일, 인기도 등의 정보를 제공합니다.

#### Contents
- [Team Member](#1-team-member)<br/>
- [Getting Start](#2-installation)<br/>
- [Project Architecture](#3-project-architecture)<br/>
- [Usage](#4-usage)<br/>
- [Roadmap](#5-roadmap)<br/>
- [Contributing](#6-contributing)<br/>
- [Environment](#7-environment)<br/>
- [Convention](#8-convention)<br/>
- [License](#9-license)<br/>


## 1. Team Member  

<table>
  <tr>
    <th align="center"><a href="https://github.com/L2HYUNN"><img src="https://avatars.githubusercontent.com/u/79739512?v=4" width="150x;" alt=""/><br /></a></th>
    <th align="center"><a href="https://github.com/daminoworld"><img src="https://avatars.githubusercontent.com/u/32871014?v=4" width="150px;" alt=""/><br /></a></th>
    <th align="center"><a href="https://github.com/Sam-Ryong"><img src="https://avatars.githubusercontent.com/u/114723339?s=64&v=4" width="150px;" alt=""/><br /></a></th>
    <th align="center"><a href="https://github.com/Pharaohshan"><img src="https://avatars.githubusercontent.com/u/114723339?s=64&v=4" width="150px;" alt=""/><br /></a></th>
  </tr>
  <tr>  
    <th><a href="https://github.com/L2HYUNN"><b>이동현</b></a></th>
    <th><a href="https://github.com/daminoworld"><b>김담인</b></a></th>
    <th><a href="https://github.com/Sam-Ryong"><b>홍승표</b></a></th>
    <th><a href="https://github.com/Pharaohshan"><b>루창</b></a></th>
  </tr>
</table>


## 2. Installation

### Install NPM Dependencies
- [npm-install](https://docs.npmjs.com/cli/v8/commands/npm-install)

```bash
> npm install
```

### Set `.env`
- create `.env` in root folder

```bash
PORT="YOUR_PORT_NUMBER"
SESSION_SECRET="YOUR_SESSION_SECRET"
TMDB_KEY="YOUR_TMDB_KEY"
DB_URL="YOUR_MONGO_DB_URL"
```

### Start Dev Server
- [npm-start](https://docs.npmjs.com/cli/v8/commands/npm-start)

```bash
> npm start
```



## 3. Project Architecture

![openSW](https://user-images.githubusercontent.com/79739512/206521554-2fdd3b14-52ee-4c21-87c3-572348ee5c94.png)

## 4. Usage 
주요 기능 소개
- Home page
<img width="1428" alt="바뀐 homepage" src="https://user-images.githubusercontent.com/114723339/206464101-19bb5605-9d9f-410a-a57e-38c71cdde95b.png"> <br/>
메인 페이지에서 인기있는 영화 목록을 보여줍니다. <br/>
옵션(1) 상단의 내비게이션 바에서 5가지 장르 중 맘에 드는 장르를 선택합니다.<br/>
옵션(2) 내비게이션 바 우측 상단의 로그인 및 회원가입 버튼으로 WATCHVIE에 사용자 정보를 등록할 수 있습니다. <br/>
옵션(3) 상단의 내비게이션 바 좌측의 팀 로고인 WATCHVIE를 누르면 어떤 화면에 있던지 메인으로 돌아갑니다.<br/>
옵션(4) 영화에 대한 정보를 검색하여 확인해볼 수 있습니다.<br/>
<br/>

- 로그인된 상태
<img width="1428" alt="로그인한 홈페이지" src="https://user-images.githubusercontent.com/114723339/206464686-4a49dc03-8027-4f4e-a9fa-70f5aaf7dd28.png"><br/>
로그인 후 메인화면입니다. 내비게이션 바 우측 상단의 로그아웃 버튼을 누르면 앞선 홈화면의 형태로 돌아갑니다.

- SignUp page
![signuppage](https://user-images.githubusercontent.com/114723339/206430239-d55a003c-d17c-4653-acd8-3fd6b89e55e0.jpeg) <br/>
homepage에서 옵션(2)의 SingUp버튼을 누르면 위 화면으로 이동합니다.<br/>
이메일,이름,ID,PW(password)를 입력하여 회원가입 절차를 진행합니다. <br/>
화면 하단의 SignUp 버튼을 누르면 SignIn page로 넘어갑니다.<br/>

- SignIn page
![loginpage](https://user-images.githubusercontent.com/114723339/206430248-c534ab34-109b-48ce-8738-54b3bd5f828b.jpeg)<br/>
homepage에서 옵션(2)의 SignIn버튼을 누르면 위 화면으로 이동합니다. <br/>
UserID와 PW를 입력하고 하단의 SignIn 버튼을 눌러 페이지에 로그인합니다. <br/>


## 5. Roadmap
#### Backend
1️⃣ 프로젝트 세팅 및 예제 코드 생성 <br/>

2️⃣ 영화 정보 제공 API 구성 <br/>

3️⃣ MongoDB 세팅 및 Schema 생성 <br/>

4️⃣ 회원가입 및 로그인 API 구성 <br/>

5️⃣ Github action을 통한 CI, CD 구성 ( 배포 - AWS EC2 ) <br/>

6️⃣ 영화 찜하기 API 구성 <br/>

7️⃣ 리팩토링


## 6. Contributing
프로젝트에 기여하고 싶으신 분들은 아래 절차를 따라주시기 바랍니다.

    1. 프로젝트 fork
    2. feature branch 생성 (git checkout -b feature/name)
    3. commit (git commit -m "Add feature)
    4. push (git push origin feature/name)
    5. pull request 생성
    
    Pull request는 최대한 빨리 확인하도록 하겠습니다. 
    
pull request 포함 문의사항은 📧[contact](#1-team-member)  으로 연락 부탁드립니다.
<br/>

## 7. Environment
- Language <br/> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=black"> <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=black">

- Framework <br/> <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=Express&logoColor=white">

- DataBase <br/>   <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white">


## 8. Convention
#### Commit Convention
- [Conventional Commit](https://www.conventionalcommits.org/ko/v1.0.0/#%ea%b7%9c%ea%b2%a9)

- [Commit msg](https://medium.com/humanscape-tech/%ED%9A%A8%EC%9C%A8%EC%A0%81%EC%9D%B8-commit-message-%EC%9E%91%EC%84%B1%EC%9D%84-%EC%9C%84%ED%95%9C-conventional-commits-ae885898e754)
![image](https://user-images.githubusercontent.com/114723339/206160359-4cbfbdaa-4ca1-4197-a784-b091d7b11687.png)
commit의 종류는 위와 같이 구분합니다.

#### Work Flow
1. ISSUE 생성<br/>
작업에 대한 정보를 포함한 ISSUE를 생성합니다. <br/>
2. 생성된 ISSUE에 대해 Draft PR 생성<br/>
ISSUE를 연결하여 관리하고 Pair Programming을 어느정도 진행하기 위해 Draft PR을 생성합니다. <br/>
3. 작업을 마친후 PR Open 및 코드 리뷰<br/>
작업이 끝나게 되면 Draft PR을 일반 PR로 변경하고 서로 코드 리뷰를 진행합니다.<br/>
4. Merge & PR Close & Remove Branch<br/>
코드 리뷰까지 모두 마리가 되면 해당 브런치를 dev에 merge하고 pr 닫기 및 브런치 삭제를 진행합니다.<br/>

## 9. License
movie-server is licensed under the [MIT License](https://github.com/khu-open-source/movie-server/blob/main/LICENSE)


