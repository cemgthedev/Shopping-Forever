import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Categories } from "./pages/Categories";
import { Coupons } from "./pages/Coupons";
import { Sponsors } from "./pages/Sponsors";
import { Feedbacks } from "./pages/Feedbacks";
import { About } from "./pages/About";
import { SingIn } from "./pages/SingIn";
import { SingUp } from "./pages/SingUp";

export function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/categories" element={ <Categories/> } />
        <Route path="/coupons" element={ <Coupons/> }/>
        <Route path="/sponsors" element={ <Sponsors/> } />
        <Route path="/feedbacks" element={ <Feedbacks/> } />
        <Route path="/about" element={<About/>} />
        <Route path="/singin" element={<SingIn/>} />
        <Route path="/singup" element={<SingUp/>} />
      </Routes>
    </Router>
  );

}

