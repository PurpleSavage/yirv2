import { BrowserRouter,Routes,Route } from "react-router-dom"
import IndexLayout from "./presentation/layouts/IndexLayout";
import LandingPage from "./presentation/pages/index/LandingPage";
import LoginPage from "./presentation/pages/index/LoginPage";
import RegisterPage from "./presentation/pages/index/RegisterPage";
function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexLayout/>}>
          <Route index element={<LandingPage/>}/>
          <Route path="login" element={<LoginPage/>}/>
          <Route path="register" element={<RegisterPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
