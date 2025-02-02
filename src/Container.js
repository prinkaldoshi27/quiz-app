import React, { useEffect } from 'react';
import { Card } from 'primereact/card';
import { useState } from 'react';
import { RadioButton } from 'primereact/radiobutton';

import { Checkbox } from "primereact/checkbox";
import { ListBox } from 'primereact/listbox';
const Container = ({ question }) => {

    const [checked, setChecked] = useState(false);
    const [selectedOption, setSelectedOption] = useState([]);
    return (
        <div className="card">
            <Card>
                <p className="m-0">
                    {question.description}
                </p>
                <div>
                    {question.options.map((option, index) => (
                        <div key={index}>
                            <Card
                                style={{
                                    backgroundColor: selectedOption.includes(option.description) ? 'var(--highlight-bg)' : "transparent", // Blue when selected
                                    height: "5rem",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    margin: "1rem 0",
                                    borderRadius: "0.5rem",
                                    transition: "background-color 0.3s ease-in-out", // Smooth color transition
                                }}
                                className="hover:bg-blue-300 cursor-pointer" // Light blue on hover
                                onClick={() => {
                                    const updatedOptions = [...selectedOption];
                                    if (updatedOptions.includes(option.description)) {
                                        updatedOptions.splice(updatedOptions.indexOf(option.description), 1);
                                    } else {
                                        updatedOptions.push(option.description);
                                    }
                                    setSelectedOption(updatedOptions);
                                }}
                            >
                                <Checkbox
                                    onChange={e => {
                                        const updatedOptions = [...selectedOption];
                                        if (e.checked) {
                                            updatedOptions.push(option.description);
                                        } else {
                                            const optionIndex = updatedOptions.indexOf(option.description);
                                            if (optionIndex > -1) {
                                                updatedOptions.splice(optionIndex, 1);
                                            }
                                        }
                                        setSelectedOption(updatedOptions);
                                    }}
                                    checked={selectedOption.includes(option.description)}
                                    className="mr-2"
                                />
                                <label
                                    htmlFor={option.description}
                                    className="ml-2 text-white"
                                    style={{ marginLeft: "1rem" }}
                                >
                                    {option.description}
                                </label>
                            </Card>

                        </div>
                    ))}
                </div>
            </Card>
        </div>
    )
}
export default Container