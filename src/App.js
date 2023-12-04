import { Homepage1 } from "./HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Register } from "./RegisterPage";
import { Login } from "./LoginPage";
import { Listallproduct } from "./Listall";
import { Reading1 } from "./ReadPage";
import { Updating } from "./UpdatePage";

function App() {
  return (
    <>
     {
        (sessionStorage.getItem("auth"))?
        <>
          <BrowserRouter>
          <Homepage1/>
          <Routes>
          <Route path="createproduct" exact element={<Register/>}/>
          <Route path="listallproductdetails" exact element={<Listallproduct/>}/>
          <Route path="reading/:myid" exact element={<Reading1/>} />
          <Route path="updating/:myid" exact element={<Updating/>} />
          </Routes>
          </BrowserRouter>
        </>
        :
        <>
          <Login/>
        </>
      }
    </>
  );
}

export default App;