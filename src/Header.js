import React, { useRef } from "react";
import HeaderCard from "./HeaderCard"
import { Stepper } from 'primereact/stepper';
import { StepperPanel } from 'primereact/stepperpanel';

const Header = ({questions, total, setTotal, correctMarks, negMarks, duration}) => {
     const stepperRef = useRef(null);
 
  return (
      <div className='flex justify-content-center align-items-center' style={{ height: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '1rem' }}>
            <Stepper model={questions} ref={stepperRef} className='flex' style={{ flexBasis: '50rem', width: '60%', margin: 'auto', flexBasis: '50rem' }}>
                {questions.map((question, index) => (
                    <StepperPanel key={index} label={question.label} >
                        <HeaderCard question={question} stepperRef={stepperRef} index={index} total={total} setTotal={setTotal} correctMarks={correctMarks} negMarks={negMarks} duration={duration}/>
                    </StepperPanel>
                ))}
          </Stepper> 
                   </div>
  )
}
export default Header