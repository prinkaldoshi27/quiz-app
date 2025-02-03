import React, { useState, useEffect, useRef } from 'react';
import { ProgressBar } from 'primereact/progressbar';
import { Toast } from 'primereact/toast';

export default function Timer({ stepperRef, duration }) {
    const [value, setValue] = useState(0);
    const toast = useRef(null);
    const interval = useRef(null);
    const maxTime = duration * 60 * 1000; 

    useEffect(() => {
        let _val = value;

        interval.current = setInterval(() => {
            _val += 2000; 

            if (_val >= maxTime) {
                _val = maxTime;
                toast.current.show({ severity: 'error', summary: 'Error', detail: 'Time Completed', life: 3000 });
                clearInterval(interval.current);
                stepperRef.current.nextCallback();
                setValue(0);
                _val = 0;
            }

            setValue((_val / maxTime) * 100); 
        }, 2000);

        return () => {
            if (interval.current) {
                clearInterval(interval.current);
                interval.current = null;
            }
        };
    }, []);

    return (
        <div className="card">
            <Toast ref={toast}></Toast>
            <ProgressBar value={value} displayValueTemplate={() => null} style={{ height: '5px' }}></ProgressBar>
        </div>
    );
}
