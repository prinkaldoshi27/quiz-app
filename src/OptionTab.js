import React, { useState } from "react";
import { Card } from 'primereact/card';

const OptionTab = ({ index, option, stepperRef, question, handleOptionClick, selectedOption }) => {

  return (
    <Card
      style={{
        backgroundColor: selectedOption.includes(option.description)
          ? (option.is_correct ? 'var(--green-100)' : 'var(--red-100)')
          : "transparent",
        height: "5rem",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        margin: "1rem 0",
        borderRadius: "0.5rem",
        transition: "background-color 0.3s ease-in-out"
      }}
      className="hover:bg-blue-300 cursor-pointer"
      onClick={() => handleOptionClick(option)}
    >
      <label htmlFor={option.description} className="ml-2 text-white" style={{ marginLeft: "1rem" }}>
        {option.description}
      </label>
    </Card>
  )
}
export default OptionTab