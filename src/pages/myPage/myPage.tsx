import { Link } from "react-router-dom";

function MyPage() {
  return (
    <div className="my-page">
      <ul>
        <li>
          <Link to="/mypage/login">로그인하러가기</Link>
        </li>
      </ul>
    </div>
  );
}

export default MyPage;
