import axios from "axios";
import { useEffect } from "react";

function Redirect() {
  useEffect(() => {
    const backEndCode = new URL(window.location.href).searchParams.get("code");
    const response = async () => {
      await axios.post(
        "https://api.albaring.com/api/auth/kakao",
        {
          code: backEndCode,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    };
    response();
    console.log(response);
    //post요청하고 받아온 값 = 사용자의 데이터인데 이거는 아마 전역으로 관리해아할 듯?
    //redux에 저장해야함, 서버 아직 세팅이 안되서 값 못불러옴.
  }, []);
  return (
    <div>
      <p>로딩중입니다</p>
      <p>잠시만 기다려주세요.</p>
    </div>
  );
}

export default Redirect;
