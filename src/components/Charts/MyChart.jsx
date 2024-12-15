import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useEffect, useState } from "react";
Chart.register(CategoryScale);

const MyChart = ({ chartData, chartLabel }) => {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let val = 0;
    chartData.forEach((item) => (val += Number(item.count)));
    let avg = val / chartData.length;
    setTotal(avg.toFixed(2));
  }, []);
  return (
    <div className="w-100 position-relative border pb-3 rounded">
      <span
        className="position-absolute top-50 start-50 fs-4 fw-bold"
        style={{
          transform: "translate(-50%, 60%)",
        }}
      >
        {total}
      </span>
      <Doughnut
        data={{
          labels: chartData.map((data) => data.year),
          datasets: [
            {
              label: chartLabel,
              data: chartData.map((data) => data.count),
            },
          ],
        }}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020",
            },
          },
        }}
      />
    </div>
  );
};

export default MyChart;
