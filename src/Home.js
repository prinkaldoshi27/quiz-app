
import React, { useEffect, useRef, useState } from "react";
import { Stepper } from 'primereact/stepper';
import { StepperPanel } from 'primereact/stepperpanel';
import { Button } from 'primereact/button';
import Container from "./Container";

const Home = ({ questions }) => {
  const [options, setOptions] = useState([]);
    const stepperRef = useRef(null);
   
return (
    <div className='flex justify-content-center align-items-center' style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Stepper model={questions} ref={stepperRef} className='flex' style={{ flexBasis: '50rem', width: '60%', margin: 'auto', flexBasis: '50rem' }}>
            {questions.map((question, index) => (
                <StepperPanel key={index} label={question.label} >
                    <div className="flex flex-column h-12rem">
                        <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
                            <Container question={question} />
                        </div>
                    </div>
                    <div className="flex pt-4 justify-content-between">
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
                        <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
                    </div>
                </StepperPanel>


            ))}
        </Stepper>
    </div>

   


)
}
export default Home