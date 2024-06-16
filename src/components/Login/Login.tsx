import "./login.scss";

function Login() {
  const KAKAO_CLIENT_ID = process.env.REACT_APP_KAKAO_CLIENT_ID;
  const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;
  const REDIRECT_URI = process.env.REACT_APP_REDIECET_URI;
  const STATE = "false";
  const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;
  //jwt든 뭐든 구현해서 프론트로 넘기면 데이터 받고 로그인 처리 해야함(아마 로컬스토리지에 jwt토큰 저장?)
  const NAVER_AUTH_URI = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${STATE}&redirect_uri=${REDIRECT_URI}`;
  const loginHandler = (e: React.MouseEvent<HTMLElement>) => {
    switch (e.currentTarget.className) {
      case "kakao-login":
        window.location.href = KAKAO_AUTH_URI;
        break;
      case "naver-login":
        window.location.href = NAVER_AUTH_URI;
        break;
    }
    // window.location.href = KAKAO_AUTH_URI;
  };

  return (
    <div className="login-page">
      <button className="kakao-login" onClick={(e) => loginHandler(e)}>
        <img
          src={require("../../assets/kakao_login_medium_narrow.png")}
          alt="카카오로그인"
        />
      </button>
      <button className="naver-login" onClick={(e) => loginHandler(e)}>
        네이버 로그인
      </button>
    </div>
  );
}

export default Login;
