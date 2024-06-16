import { Link } from "react-router-dom";
import "./header.scss";

function Header() {
  return (
    <header className="header">
      <p>헤더</p>
      <nav className="navigation">
        <ul>
          <Link to="/">홈</Link>
          <Link to="/community">커뮤니티</Link>
          <Link to="/investment">재테크</Link>
          <Link to="/mypage">마이</Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
