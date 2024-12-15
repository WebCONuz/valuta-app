import { useState } from "react";
import Converter from "../components/Converter/Converter";
import Expenses from "../components/Transactions/Expenses";
import { Receipts } from "../components/Transactions/Receipts";

const Home = () => {
  const [type, setType] = useState("kirim");
  return (
    <main className="pt-5">
      <Converter />
      <div className="container mt-5">
        <div className="row mb-4">
          <div className="col-6">
            <button
              onClick={() => setType("kirim")}
              className="btn btn-lg btn-primary w-100"
            >
              Tushumlar
            </button>
          </div>
          <div className="col-6">
            <button
              onClick={() => setType("chiqim")}
              className="btn btn-lg btn-warning w-100"
            >
              Chiqimlar
            </button>
          </div>
        </div>

        {type === "kirim" ? <Expenses /> : <Receipts />}
      </div>
    </main>
  );
};

export default Home;
