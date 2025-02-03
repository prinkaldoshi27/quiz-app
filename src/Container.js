import React, { useEffect, useState } from 'react';
import { Card } from 'primereact/card';
import Timer from './Timer';
import OptionTab from './OptionTab';
import Keywords from './Keywords';
import { useNavigate } from 'react-router-dom';

const Container = ({ question, stepperRef, total, setTotal, correctMarks, negMarks, index, duration }) => {
    const [selectedOption, setSelectedOption] = useState([]);
    const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        console.log(index);
    },[]);

    const handleOptionClick = (option) => {
        const updatedOptions = [...selectedOption];
        if (updatedOptions.includes(option.description)) {
            updatedOptions.splice(updatedOptions.indexOf(option.description), 1);
        } else {
            updatedOptions.push(option.description);
            if (!option.is_correct) {
                const correctOption = question.options.find(opt => opt.is_correct);
                if (correctOption) {
                    setTotal(total - negMarks);
                    setShowCorrectAnswer(true); // Show the correct answer
                    setTimeout(() => {
                        setSelectedOption((prev) => [...prev, correctOption.description]);
                        setTimeout(() => {
                            if (index === 9) {
                                navigate('/result'); // Navigate to /result after showing the correct answer
                            } else {
                                stepperRef.current.nextCallback();
                            }
                        }, 2000); // Delay before navigating
                    }, 1000); // Delay before showing the correct answer
                }
            } else {
                setTotal(total + correctMarks);
                setShowCorrectAnswer(true); // Show the correct answer
                setTimeout(() => {
                    if (index === 9) {
                        navigate('/result'); // Navigate to /result after showing the correct answer
                    } else {
                        stepperRef.current.nextCallback();
                    }
                }, 1000); // Delay before navigating
            }
        }
        setSelectedOption(updatedOptions);
    };

    return (
        <Card>
            <Timer stepperRef={stepperRef} duration={duration} />
            <p className="m-0">{question.description}</p>
            <div>
                {question.options.map((option, index) => (
                    <div key={index}>
                        <OptionTab
                            option={option}
                            stepperRef={stepperRef}
                            question={question}
                            handleOptionClick={handleOptionClick}
                            selectedOption={selectedOption}
                            showCorrectAnswer={showCorrectAnswer}
                        />
                    </div>
                ))}
            </div>
            <Keywords question={question} />
        </Card>
    );
};

export default Container;