import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Layout from "./components/Layout/Layout";
import Main from "./pages/main";
import MyPage from "./pages/myPage/myPage";
import Community from "./pages/community/community";
import Investment from "./pages/investment/investment";
import Redirect from "./pages/redirect/redirect";
import Login from "./components/Login/Login";

function App() {
  const redirectPage = window.location.pathname;

  if (redirectPage === "/api/auth/kakao/callback") {
    //나중에 여기 페이지로 접근할 수 있으니 아마 뒤에 인가코드 없으면 접근 못하게 막아야 할 듯?
    return <Redirect />;
  }

  return (
    <Layout>
      <main className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/community" element={<Community />} />
          <Route path="/investment" element={<Investment />} />
          <Route path="/mypage/login" element={<Login />} />
        </Routes>
      </main>
    </Layout>
  );
}

export default App;
