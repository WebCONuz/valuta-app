import axios from "../../api/axios";
import { useEffect, useRef, useState } from "react";
import { PiCurrencyDollarBold } from "react-icons/pi";

const API_KEY = import.meta.env.VITE_ACCESS_API_KEY;
const Converter = () => {
  const [convert, setConvert] = useState(0);
  const [types, setTypes] = useState([]);
  const [inputMoney, setInputMoney] = useState("");
  const from = useRef(0);
  const to = useRef(0);

  const getData = async (val) => {
    try {
      if ((from.current.value && to.current.value) || val === "first") {
        const selectValue = from.current.value || "USD";
        const res = await axios.get(`/${API_KEY}/latest/${selectValue}`);

        if (val === "first") {
          const keys = [];
          for (let item in res.data.conversion_rates) {
            keys.push(item);
          }
          setTypes(keys);
        }

        if (val === true) {
          const data = res.data.conversion_rates[to.current.value];
          setConvert(data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getMoneyValue = (e) => {
    setInputMoney(+e.target.value);
  };

  useEffect(() => {
    // getData("first");
  }, []);

  return (
    <div className="container">
      <div className="row p-4 shadow border rounded-3">
        <div className="col-12">
          <div className="row mb-3">
            <div className="col-4 px-2">
              <div className="position-relative">
                <label
                  htmlFor="amount"
                  className="position-absolute"
                  style={{
                    top: "0.3rem",
                    left: "0.9rem",
                    color: "rgba(0,0,0,0.5)",
                  }}
                >
                  Amount
                </label>
                <PiCurrencyDollarBold
                  className="position-absolute"
                  style={{
                    bottom: "0.85rem",
                    left: "0.5rem",
                    fontSize: "1.2rem",
                  }}
                />
                <input
                  type="number"
                  className="w-100 pt-4 pb-2 ps-4 pe-3 rounded fw-bold"
                  aria-label="Amount"
                  style={{
                    outline: "none",
                    borderColor: "rgba(0,0,0,0.1)",
                    fontSize: "20px",
                  }}
                  onChange={getMoneyValue}
                />
              </div>
            </div>
            <div className="col-4 px-2">
              <label className="d-block w-100 border rounded px-3 py-2">
                <span className="text-primary">From</span>
                <select
                  className="w-100 d-block border-0"
                  style={{ outline: "none" }}
                  ref={from}
                  onChange={() => getData(true)}
                >
                  {types.map((item, i) => (
                    <option value={item} key={i}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div className="col-4 px-2">
              <label className="d-block w-100 border rounded px-3 py-2">
                <span className="text-success">To</span>
                <select
                  className="w-100 d-block border-0"
                  style={{ outline: "none" }}
                  ref={to}
                  onChange={() => getData(true)}
                >
                  {types.map((item, i) => (
                    <option value={item} key={i}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <p className="mb-0 display-6 fw-bold mb-1">
                Result:{" "}
                <span className="text-success">
                  {(inputMoney * convert).toFixed(2) === "NaN"
                    ? 0
                    : (inputMoney * convert).toFixed(2)}
                </span>{" "}
                {to.current.value}
              </p>
              <span className="fw-bold text-secondary">
                1 {from.current.value || "USD"} = {convert || ""}{" "}
                {to.current.value || "1 USD"}
              </span>
            </div>
            <div className="col-6 ">
              <span className="display-6 fw-bold">
                Date:{" "}
                <span className="text-success">
                  {`${new Date().getDate()}.${
                    new Date().getMonth() + 1
                  }.${new Date().getFullYear()}`}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Converter;
