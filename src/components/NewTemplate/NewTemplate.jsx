import React, { useState } from "react";
import "./NewTemplate.css";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import DropDown from "../DropDown/DropDown";
import { Input, TextField } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

const NewTemplate = () => {
  const theme = useTheme();
  const [templateName, setTemplateName] = useState([]);
  const [templateType, setTemplateType] = useState([]);
  const [progressingColor, setProgressingColor] = useState([]);
  const [completedColor, setCompletedColor] = useState([]);
  const [delayedColor, setDelayedColor] = useState([]);
  const [milestoneName, setMilestoneName] = useState("");
  const [taskName, setTaskName] = useState("");

  const handleType = (event) => {
    const {
      target: { value },
    } = event;
    setTemplateType(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleName = (event) => {
    const {
      target: { value },
    } = event;
    setTemplateName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleProgressingColor = (event) => {
    const {
      target: { value },
    } = event;
    setProgressingColor(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleCompletedColor = (event) => {
    const {
      target: { value },
    } = event;
    setCompletedColor(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleDelayedColor = (event) => {
    const {
      target: { value },
    } = event;
    setDelayedColor(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleMilestoneName = (event) => {
    setMilestoneName(event.target.value);
  };

  const handleTaskName = (event) => {
    setTaskName(event.target.value);
  };

  const handleSubmit = () => {
    const template = {
      templateType: templateType,
      templateName: templateName,
      progressingColor: progressingColor,
      completedColor: completedColor,
      delayedColor: delayedColor,
      milestoneName: milestoneName,
      taskName: taskName,
    };
    console.log(template);
  };

  return (
    <div id="new">
      <div className="wrapper">
        <div className="top-section">
          <div className="heading">Add templates</div>
        </div>

        <div className="main-body">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 20,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <label htmlFor="">Template type</label>
              <DropDown
                placeholder={"Select"}
                templateName={templateType}
                handleChange={handleType}
                MenuProps={MenuProps}
                names={names}
                theme={theme}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <label htmlFor="">Template name</label>
              <DropDown
                placeholder={"Please select"}
                templateName={templateName}
                handleChange={handleName}
                MenuProps={MenuProps}
                names={names}
                theme={theme}
              />
            </div>
          </div>
          <p style={{ fontSize: 17, fontWeight: 400, marginBottom: 0 }}>
            Colours
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 20,
            }}
          >
            <div
              style={{
                width: "100%",
              }}
            >
              <DropDown
                placeholder={"Progressing colour"}
                templateName={progressingColor}
                handleChange={handleProgressingColor}
                MenuProps={MenuProps}
                names={names}
                theme={theme}
              />
            </div>
            <div
              style={{
                width: "100%",
              }}
            >
              <DropDown
                placeholder={"Completed colour"}
                templateName={completedColor}
                handleChange={handleCompletedColor}
                MenuProps={MenuProps}
                names={names}
                theme={theme}
              />
            </div>
            <div
              style={{
                width: "100%",
              }}
            >
              <DropDown
                placeholder={"Delayed colour"}
                templateName={delayedColor}
                handleChange={handleDelayedColor}
                MenuProps={MenuProps}
                names={names}
                theme={theme}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "end",
              justifyContent: "space-between",
              gap: 20,
              marginTop: 20,
              backgroundColor: "#f8f8f8",
              padding: 20,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <label htmlFor="">Milestone name</label>
              <FormControl sx={{ width: "100%", mt: 3 }}>
                <TextField
                  placeholder="Please type"
                  value={milestoneName}
                  onChange={handleMilestoneName}
                />
              </FormControl>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <label htmlFor="">Task name</label>
              <FormControl sx={{ width: "100%", mt: 3 }}>
                <TextField
                  placeholder="Please type task name"
                  value={taskName}
                  onChange={handleTaskName}
                />
              </FormControl>
            </div>
            <div style={{ margin: 0, padding: 0 }}>
              <button
                style={{
                  width: 118,
                  height: 58,
                  color: "#ffffff",
                  backgroundColor: "#000080",
                  borderRadius: 8,
                  border: 0,
                }}
              >
                Add Task
              </button>
            </div>
          </div>
          <div
            style={{ display: "flex", justifyContent: "end", marginTop: 20 }}
          >
            <button
              style={{
                width: 214,
                height: 40,
                borderRadius: 8,
                backgroundColor: "#ffffff",
                border: "1px solid #000080",
                color: "#000080",
              }}
            >
              Save/Add new milestone
            </button>
          </div>
          <hr style={{ opacity: 0.4, marginTop: 40, width: "100%" }} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 40,
            }}
          >
            <button
              style={{
                width: 125,
                height: 40,
                borderRadius: 8,
                backgroundColor: "#ffffff",
                border: "1px solid #263032",
                color: "#263032",
              }}
            >
              Cancel
            </button>
            <button
              style={{
                width: 125,
                height: 40,
                borderRadius: 8,
                backgroundColor: "#000080",
                border: "1px solid #263032",
                color: "#ffffff",
              }}
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTemplate;
