import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Transactions from "./pages/Transactions";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
