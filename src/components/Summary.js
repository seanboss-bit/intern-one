import React, { useEffect, useState } from "react";
import { Pie, Line } from "react-chartjs-2";
import { Data1 } from "./testData";

const Summary = () => {
  const [chartData, setChartData] = useState({});
  const [pieData, setPieData] = useState({});

  const chart = () => {
    setChartData({
      labels: ["Laboratories", "Pharmacies", "Hospitals"],
      datasets: [
        {
          label: "LOREM",
          data: [12, 19, 3],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
          ],
          borderWidth: 1,
        },
      ],
    });
  };
  useEffect(() => {
    chart();
    setPieData(Data1[0]);
  }, []);
  const comboBox = (e) => {
    const selectedId = e.target.value;
    // eslint-disable-next-line 
    const selectedData = Data1.filter((d) => d.id == selectedId)[0];
    setPieData(selectedData);
  };
  return (
    <div>
      <div className="container">
        <div className="header">
          <h4>DashBoard</h4>
        </div>
        <div className="status">
          <div className="box-1">
            <span>34500</span>
            <h4>enrolles</h4>
          </div>
          <div className="box-1">
            <span>404</span>
            <h4>facilities</h4>
          </div>
          <div className="box-1">
            <span>34500</span>
            <h4>encounters</h4>
          </div>
        </div>
        <div className="pie-chart-container">
          <div className="facilities">
            <p>
              facilities summary by{" "}
              <select onChange={(e) => comboBox(e)} value={pieData?.id}>
                {Data1.map((data) => (
                  <option value={data.id} key={data.id}>
                    {data.name}
                  </option>
                ))}
              </select>
            </p>
            {pieData ? (
              <Pie
                data={pieData?.dat}
                options={{
                  responsive: true,
                  title: { text: "Test Charts", display: true },
                }}
                className="pie-chart"
              />
            ) : null}
          </div>
          <div className="enrolles">
            <p>
              enrolles summary by{" "}
              <select name="">
                <option>plan</option>
                <option>zone</option>
                <option>Gender</option>
                <option>Category</option>
                <option>Visits</option>
              </select>
            </p>
            <Pie
              data={chartData}
              options={{
                responsive: true,
                title: { text: "Test Charts", display: true },
              }}
              className="pie-chart"
            />
          </div>
        </div>
        <div className="line-chart">
          <p>
            encounter summary by{" "}
            <select name="">
              <option>month</option>
              <option>Week</option>
            </select>
          </p>
          <Line
            data={chartData}
            options={{
              responsive: true,
              title: { text: "Test Charts", display: true },
            }}
            className="pie-chart"
          />
        </div>
      </div>
    </div>
  );
};

export default Summary;
