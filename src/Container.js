import React, { useEffect, useState } from 'react';
import { Card } from 'primereact/card';
import Timer from './Timer';
import OptionTab from './OptionTab';
import Keywords from './Keywords';
import { useNavigate } from 'react-router-dom';

const Container = ({ question, stepperRef, total, setTotal, correctMarks, negMarks, index, duration, correctAnswer, setCorrectAnswer, negAnswer, setNegAnswer, skipAnswer, setSkipAnswer }) => {
    const [selectedOption, setSelectedOption] = useState([]);
    const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
    const navigate = useNavigate();

    const handleOptionClick = (option) => {
        
        if (selectedOption.length > 0) return;

        const updatedOptions = [...selectedOption];
        updatedOptions.push(option.description);

        
        if (!option.is_correct) {
            const correctOption = question.options.find(opt => opt.is_correct);
            if (correctOption) {
                setTotal(prev => prev - negMarks);
                setNegAnswer(prev => prev + 1);
                setShowCorrectAnswer(true); 
                
                setTimeout(() => {
                    setSelectedOption((prev) => [...prev, correctOption.description]);
                    setTimeout(() => {
                        if (index === 9) {
                            navigate('/result'); 
                        } else {
                            stepperRef.current.nextCallback();
                        }
                    }, 2000);
                }, 1000);
            }
        } else {
            
            setTotal(prev => prev + correctMarks);
            setCorrectAnswer(prev => prev + 1);
            setShowCorrectAnswer(true); 
            setTimeout(() => {
                if (index === 9) {
                    navigate('/result'); 
                } else {
                    stepperRef.current.nextCallback();
                }
            }, 1000);
        }

        
        setSelectedOption(updatedOptions);
    };

    return (
        <Card>
            <Timer stepperRef={stepperRef} duration={duration} />
            <p className="m-0">{question.description}</p>
            <div>
                {question.options.map((option, idx) => (
                    <div key={idx}>
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
