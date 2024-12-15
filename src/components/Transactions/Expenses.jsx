import React from "react";
import MyChart from "../Charts/MyChart";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { IoTrashOutline } from "react-icons/io5";

const data = [
  { year: "15.12.2024", title: "Something", count: 10 },
  { year: "16.12.2010", title: "Something", count: 20 },
  { year: "17.12.2010", title: "Something", count: 15 },
  { year: "18.12.2010", title: "Something", count: 25 },
  { year: "19.12.2010", title: "Something", count: 22 },
  { year: "20.12.2010", title: "Something", count: 30 },
  { year: "21.12.2010", title: "Something", count: 28 },
];

const Expenses = () => {
  return (
    <div className="row pb-5">
      <div className="col-12">
        <h3 className="mb-4 text-center">Tushumlar holati</h3>
      </div>
      <div className="col-6">
        <MyChart chartData={data} chartLabel="test chart" />
      </div>
      <div className="col-6">
        <button className="btn btn-lg btn-success w-100 mb-3">
          Tushum qo'shish
        </button>
        <ul className="p-0">
          {data.map((item, index) => (
            <li
              key={index}
              className="border px-3 py-2 mb-2 rounded d-flex align-items-center justify-content-between"
            >
              <div className="d-flex">
                <span className="me-2">{item.title}</span>
                <span className="me-3">{item.count}$</span>
                <span>{item.year}</span>
              </div>
              <div className="d-flex">
                <HiOutlinePencilSquare className="fs-5 text-success me-2" />
                <IoTrashOutline className="fs-5 text-danger" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Expenses;
