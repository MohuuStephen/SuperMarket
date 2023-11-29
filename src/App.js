import { Homepage } from "./HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Register } from "./RegisterPage";
import { Login } from "./LoginPage";

function App() {
  return (
    <>
     <BrowserRouter>
    <Homepage/>
    <Login/>
    <Routes>
      <Route path="createproduct" exact element={<Register/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;