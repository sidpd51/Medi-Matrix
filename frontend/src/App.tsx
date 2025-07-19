import { Route, Routes } from "react-router"
import SignInPage from "./Pages/Auth/SignInPage"

function App() {

  return (
    <Routes>
      <Route path="/signin" element={<SignInPage />} />
    </Routes>
  )
}

export default App;
