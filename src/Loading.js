import React from 'react';
import { ProgressBar } from 'primereact/progressbar';
import { Card } from 'primereact/card';
const Loading = () => {
    return (
        <div className='card flex justify-content-center align-items-center' style={{ height: '100vh', width: '60%', margin: 'auto' }}>    
          
            <ProgressBar mode="indeterminate" style={{ height: '6px' }}></ProgressBar>
           
        </div>
    )
}
export default Loading