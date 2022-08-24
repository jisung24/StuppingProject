## passport 모듈

### 역할 
- passport는 인증을 편하게 하기위한 패키지
- req.session객체 안에 passport프로퍼티를 만들어서 값으로 쿠키와 식별자를 매칭해서 저장한다.(serialize)
- 이후 페이지를 방문할 때 마다 로그인 요청을 하는데, 유져의 data를 찾아서 req.user에다가 data를 저장한다. 

### <u>실행순서(아주 중요!)</u>
- 