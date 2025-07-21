import { Route, Routes } from "react-router";
import SignInPage from "./Pages/Auth/SignInPage";
import SignUpPage from "./Pages/Auth/SignUpPage";

function App() {

  return (
    <Routes>
       <Route path="/" element={<SignInPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  )
}

export default App;
