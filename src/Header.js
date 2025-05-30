import React, { useRef } from "react";
import HeaderCard from "./HeaderCard";
import { Stepper } from 'primereact/stepper';
import { StepperPanel } from 'primereact/stepperpanel';

const Header = ({
    questions, total, setTotal, correctMarks, negMarks, duration,
    correctAnswer, setCorrectAnswer, negAnswer, setNegAnswer,
    skipAnswer, setSkipAnswer
}) => {
    const stepperRef = useRef(null);

    return (
        <div className='flex justify-content-center align-items-center'
            style={{ height: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '1rem' }}>

            <Stepper linear ref={stepperRef} className='flex'
                style={{ flexBasis: '50rem', width: '60%', margin: 'auto' }}>

                {questions.map((question, index) => (
                    <StepperPanel
                        key={index}
                        label={`Question ${index + 1}`}  // Updated label
                    >
                        <HeaderCard
                            question={question}
                            stepperRef={stepperRef}
                            index={index}
                            total={total}
                            setTotal={setTotal}
                            correctMarks={correctMarks}
                            negMarks={negMarks}
                            duration={duration}
                            correctAnswer={correctAnswer}
                            setCorrectAnswer={setCorrectAnswer}
                            negAnswer={negAnswer}
                            setNegAnswer={setNegAnswer}
                            skipAnswer={skipAnswer}
                            setSkipAnswer={setSkipAnswer}
                        />
                    </StepperPanel>
                ))}
            </Stepper>
        </div>
    );
};

export default Header;
