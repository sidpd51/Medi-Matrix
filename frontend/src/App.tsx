import { Route, Routes } from "react-router";
import SignInPage from "./Pages/auth/SignInPage";
import SignUpPage from "./Pages/auth/SignUpPage";
import LayoutWrapper from "./components/LayoutWrapper";

function App() {

  return (
    <Routes>
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/" element={<LayoutWrapper />} >
        <Route index element={<div>Dashboard Page</div>} />
        <Route path="patients" element={<div>Patient Page</div>} />
        <Route path="appointments" element={<div>Appointment Page</div>} />
        <Route path="patients" element={<div>Patient Page</div>} />
        <Route path="doctors" element={<div>Doctor Page</div>} />
      </Route>
    </Routes>
  )
}

export default App;
