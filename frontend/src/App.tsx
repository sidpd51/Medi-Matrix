import { Route, Routes } from "react-router";
import SignInPage from "./Pages/auth/SignInPage";
import SignUpPage from "./Pages/auth/SignUpPage";
import Layout from "./Pages/layout/Layout";

function App() {

  return (
    <Routes>
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/layout" element={<Layout children={<div>MAIN COMPONENT</div>} />} />
    </Routes>
  )
}

export default App;
