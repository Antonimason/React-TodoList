import React, { useState } from "react";
import "./App.css";
import Calendar from "react-calendar";
import Label from "./Components/Label/Label";
import { VscIssues } from "react-icons/vsc";
import LocalStorage from "./Context/LocalStorage";

function App() {

  const [date, setDate] = useState(new Date());
  const [maintitle, setMaintitle] = useState("");
  const [maindescription, setMaindescription] = useState("");
  const [mainlabel, setMainlabel] = useState("");
  const [maindate, setMaindate] = useState("");
  const [id, setId] = useState("");

  const mandar = () => {
    LocalStorage(maintitle, maindescription, maindate, mainlabel, id);
  };

  return (
    <>
      <div className="main-container">
        <h4>Select your date</h4>
        <form onSubmit={mandar}>
          <div className="app">
            <div className="calendar-container">
              <Calendar onChange={setDate} value={date} />
            </div>
            <div className="text-center">
              Selected date: {date.toDateString()}
            </div>
          </div>

            <div className="form-urgency">
              <h4>Select your priority</h4>
              <div className="label-container">
                <div
                  className="circle-green circle"
                  onClick={() => {
                    setMainlabel("normal");
                  }}
                >
                  <Label name="green" icon=<VscIssues /> color="green" />
                  <p>Normal</p>
                </div>

                <div
                  className="circle-blue circle"
                  onClick={() => {
                    setMainlabel("medium");
                  }}
                >
                  <Label name="blue" icon=<VscIssues /> color="blue" />
                  <p>Medium</p>
                </div>

                <div
                  className="circle-red circle"
                  onClick={() => {
                    setMainlabel("urgent");
                  }}
                >
                  <Label name="red" icon=<VscIssues /> color="red" />
                  <p>Urgent</p>
                </div>
              </div>
              <p>Selected priority: {mainlabel}</p>
            </div>

          <div className="form--contaner">
            <section className="input-form">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                required
                placeholder="Taks name"
                onChange={(e) => {
                  setMaintitle(e.target.value);
                }}
              ></input>
            </section>
            <section className="input-form">
              <label htmlFor="why">Task</label>
              <textarea
                type="text"
                id="why"
                required
                placeholder="Task"
                onChange={(e) => {
                  setMaindate(date.toDateString());
                  const newId = new Date().getTime().toString();
                  setId(newId);
                  setMaindescription(e.target.value);
                }}
              ></textarea>
            </section>
            <button id="button-sub" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
  
}

export default App;
