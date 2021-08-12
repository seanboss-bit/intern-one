import React, { useEffect, useState } from "react";
import axios from "./axios";
import { Pie, Line, defaults } from "react-chartjs-2";

const Summary = () => {
  // for Enroll State
  const [enroll, setEnroll] = useState(0);
  // Facility Data
  const [facilityData, setFacilityData] = useState({});
  // for Facility total
  const [facility, setFacility] = useState(0);
  defaults.plugins.legend.align = "center";
  // Testing State
  const [chartData, setChartData] = useState({});

  const chart = async () => {
    let num = [];
    try {
      const responseNum = await axios.get("/enrollments/plan");
      const payNum = responseNum.data.data.enrollee_plan;
      num.push(Object.values(payNum));
      setChartData({
        labels: ["bhcpf", "equity", "formal", "informal"],
        datasets: [
          {
            label: "LOREM",
            data: num[0],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.3)",
              "rgba(24, 162, 23, 0.3)",
            ],
            borderColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 206, 86)",
              "rgb(24, 162, 23)",
            ],
            borderWidth: 1,
          },
        ],
      });
    } catch (error) {}
  };
  useEffect((e) => {
    facilitate();
    chart();
    enrollment();
    let num = [];
    const category = async () => {
      const res = await axios.get("/facility/category");
      num.push(Object.values(res.data.data.facility_category));
      setFacilityData({
        labels: ["health_clinicds", "pharmacy", "phc", "private"],
        datasets: [
          {
            label: "",
            data: num[0],
            backgroundColor: ["red", "blue", "pink", "green"],
            borderColor: ["white"],
            borderWidth: 2,
          },
        ],
      });
    };
    category();
  }, []);
  // For Chart Category
  const comboBox = async (e) => {
    let num = [];
    let num2 = [];
    const resz = await axios.get("/facility/zone");
    const res = await axios.get("/facility/category");
    if (e.target.value === "category") {
      num.push(Object.values(res.data.data.facility_category));
      setFacilityData({
        labels: ["health_clinicds", "pharmacy", "phc", "private"],
        datasets: [
          {
            label: "",
            data: num[0],
            backgroundColor: ["red", "blue", "pink", "green"],
            borderColor: ["white"],
            borderWidth: 3,
          },
        ],
      });
    } else if (e.target.value === "zone") {
      num2.push(Object.values(resz.data.data.facility_zone));
      setFacilityData({
        labels: ["central", "north", "south"],
        datasets: [
          {
            label: "",
            data: num2[0],
            backgroundColor: ["red", "blue", "pink", "green"],
            borderColor: ["white"],
            borderWidth: 3,
          },
        ],
      });
    }
  };
  const lookintoit = async (e) => {
    if (e.target.value === "visits") {
      const res = await axios.get("/enrollments/visit");
      let num = [];
      num.push(Object.values(res.data.data.enrollee_visit));
      setChartData({
        labels: ["encounters", "no encounter"],
        datasets: [
          {
            label: "LOREM",
            data: num[0],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgb(54, 162, 235)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgb(52, 15, 24)",
            ],
            borderWidth: 1,
          },
        ],
      });
    } else if (e.target.value === "plan") {
      chart();
    } else if (e.target.value === "zone") {
      const res = await axios.get("/enrollments/zone");
      let num = [];
      num.push(Object.values(res.data.data.enrollee_zone));
      setChartData({
        labels: ["central", "north", "south"],
        datasets: [
          {
            label: "LOREM",
            data: num[0],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgb(54, 162, 235)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgb(52, 15, 24)",
            ],
            borderWidth: 1,
          },
        ],
      });
    } else if (e.target.value === "gender") {
      const res = await axios.get("/enrollments/gender");
      let num = [];
      num.push(Object.values(res.data.data.enrollee_gender));
      setChartData({
        labels: ["female", "male"],
        datasets: [
          {
            label: "LOREM",
            data: num[0],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgb(54, 162, 235)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgb(52, 15, 24)",
            ],
            borderWidth: 1,
          },
        ],
      });
    } else if (e.target.value === "category") {
      const res = await axios.get("/enrollments/category")
      console.log(res);
      let num = []
      num.push(Object.values(res.data.data.enrollee_category));
      setChartData({
        labels: ["disability", "over 65", "pregnant", "under 5"],
        datasets: [
          {
            label: "LOREM",
            data: num[0],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgb(54, 162, 235)",
              "rgb(54, 162, 23)",
            ],
            borderColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgb(52, 15, 24)"],
            borderWidth: 1,
          },
        ],
      });
    }
  };
  // Enrollment Number Function
  const enrollment = async () => {
    const response = await axios.get("/enrollments/total");
    setEnroll(response.data.data.enrollee_total);
  };
  //  Facilities Number Function
  const facilitate = async () => {
    const res = await axios.get(`/facility/total`);
    setFacility(res.data.data.facility_total);
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
            <span>{facility}</span>
            <h4>facilities</h4>
          </div>
          <div className="box-1">
            <span>0</span>
            <h4>encounters</h4>
          </div>
        </div>
        <div className="pie-chart-container">
          <div className="facilities">
            <p>
              facilities summary by{" "}
              <select onChange={(e) => comboBox(e)}>
                <option value="category">category</option>
                <option value="zone">zone</option>
              </select>
            </p>

            {facilityData ? (
              <Pie
                data={facilityData}
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
              <select onChange={(e) => lookintoit(e)}>
                <option value="plan">plan</option>
                <option value="zone">zone</option>
                <option value="gender">Gender</option>
                <option value="category">Category</option>
                <option value="visits">Visits</option>
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
