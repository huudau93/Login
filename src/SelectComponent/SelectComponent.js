import React from "react";
import { Select } from "antd";
import "./SelectComponent.css";
const { Option } = Select;
function handleChange(value) {
  console.log(`Selected: ${value}`);
}

function SelectComponent() {
  const [size, setSize] = React.useState("default");

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };
  return (
    <>
      <Select
        className="customSelect"
        size={size}
        defaultValue="Chon"
        onChange={handleChange}
      >
        <Option value={"Multiple choice"}>Multiple choice</Option>
        <Option value={"Text"}>Text</Option>
        <Option value={"number"}>number</Option>
        <Option value={"Date"}>Date</Option>
        <Option value={"Date and time"}> Date and time</Option>
        <Option value={"Checkbox"}>Checkbox (multi)</Option>
        <Option value={"Dropdown"}>Dropdown</Option>
        <Option value={"Single line"}>Single line</Option>
      </Select>
    </>
  );
}
export default SelectComponent;
