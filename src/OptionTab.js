import React from "react";
import { Card } from 'primereact/card';

const OptionTab = ({ option, handleOptionClick, selectedOption, question }) => {
  const isSelected = selectedOption.includes(option);
  const isCorrect = option === question.answer;

  return (
    <Card
      style={{
        backgroundColor: isSelected
          ? (isCorrect ? 'var(--green-100)' : 'var(--red-100)')
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
      <label className="ml-2 text-white" style={{ marginLeft: "1rem" }}>
        {option}
      </label>
    </Card>
  );
};

export default OptionTab;
