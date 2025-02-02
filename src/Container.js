import React, { useEffect, useState } from 'react';
import { Card } from 'primereact/card';

import Timer from './Timer';
import OptionTab from './OptionTab';
import Keywords from './Keywords';

const Container = ({ question, stepperRef }) => {
    const [selectedOption, setSelectedOption] = useState([]);

    const handleOptionClick = (option) => {
        const updatedOptions = [...selectedOption];
        if (updatedOptions.includes(option.description)) {
            updatedOptions.splice(updatedOptions.indexOf(option.description), 1);
        } else {
            updatedOptions.push(option.description);
            if (!option.is_correct) {
                const correctOption = question.options.find(opt => opt.is_correct);
                if (correctOption) {
                    setTimeout(() => {
                        setSelectedOption((prev) => [...prev, correctOption.description]);


                        setTimeout(() => {
                            stepperRef.current.nextCallback();
                        }, 2000);
                    }, 1000);
                }
            } else {
                setTimeout(() => {
                    stepperRef.current.nextCallback();
                }, 1000);
            }
        }
        setSelectedOption(updatedOptions);
    };

    return (
        <Card>
            <Timer stepperRef={stepperRef} />
            <p className="m-0">{question.description}</p>
            <div>
                {question.options.map((option, index) => (
                    <div key={index}>
                        <OptionTab index={index} option={option} stepperRef={stepperRef} question={question} handleOptionClick={handleOptionClick} selectedOption={selectedOption} />
                    </div>
                ))}
            </div>
            <Keywords question={question} />
        </Card>
    );
}

export default Container;
