import React, { useEffect, useState } from "react";
import axios from "./axios";
import { Pie, Line} from "react-chartjs-2";
import { Data1 } from "./testData";

const Summary = () => {
  const [enroll, setEnroll] = useState("");
  const [chartData, setChartData] = useState({});
  const [pieData, setPieData] = useState({});

  const chart = async () => {
    let label = [];
    let num = [];
    try {
      const response = await axios.get("/lga/enrollment");
      const responseNum = await axios.get("/all/lgas");
      const payLoad = response.data.data;
      const payNum = responseNum.data.data;
      label.push(parseInt(payLoad));
      num.push(Object.values(payNum));
      console.log(num);
      setChartData({
        labels: payLoad,
        datasets: [
          {
            label: "LOREM",
            data: num[0],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.3)",
              "rgb(54, 162, 235)",
              "rgba(54, 2, 235, 0.4)",
              "rgba(54, 162, 235, 0.5)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(54, 162, 5, 0.7)",
              "rgba(5, 162, 235, 0.7)",
              "rgba(54, 12, 235, 0.7)",
              "rgba(54, 162, 45, 0.7)",
              "rgba(56, 162, 235, 0.7)",
              "rgba(255, 142, 235, 0.7)",
              "rgb(24, 152, 235)",
              "rgb(58, 162, 235)",
              "rgb(54, 14, 235)",
              "rgba(54, 11, 235, 0.2)",
              "rgb(54, 14, 235)",
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
    } catch (error) {}
  };
  useEffect(() => {
    chart();
    setPieData(Data1[0]);
    enrollment();
  }, []);
  // For Chart Category
  const comboBox = async (e) => {
    const selectedId = e.target.value;
    // eslint-disable-next-line
    const selectedData = Data1.filter((d) => d.id == selectedId)[0];
    setPieData(selectedData);
  };
  // Enrollment Number Function
  const enrollment = async () => {
    const response = await axios.get("/all/enrollments");
    setEnroll(response.data.data);
  };
  return (
    <div>
      <div className="container">
        <div className="header">
          <h4>DashBoard</h4>
        </div>
        <div className="status">
          <div className="box-1">
            <span>{enroll}</span>
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
