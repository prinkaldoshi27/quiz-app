import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { ProgressBar } from 'primereact/progressbar';

import { useNavigate } from 'react-router-dom';
import { Tag } from 'primereact/tag';

const ResultPage = ({ total, totalMarks, correctAnswer, negAnswer, skipAnswer }) => {
  const navigate = useNavigate();
 

  
  const percentage = Math.min((total / totalMarks) * 100, 100);

  return (
    <div className="flex justify-content-center align-items-center" style={{ height: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Card title="Quiz Results" style={{ width: '30rem' }} className="p-shadow-3">
        <div className="text-center">
          <h2>Your Total Score</h2>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: '1rem 0' }}>{total}</p>
          <ProgressBar value={percentage} showValue={true} style={{ height: '1.5rem' }} />
          <p style={{ marginTop: '1rem', fontSize: '1rem' }}>You scored {percentage.toFixed(0)}%!</p>
          <div className="p-mt-3">

            <p>
              <strong>Correct Answer:</strong> <Tag value={correctAnswer} severity="warning" />
                               </p>
                               <p>
              <strong>Wrong Answer:</strong> <Tag value={negAnswer} severity="danger" />
                               </p>
                               <p>
              <strong>Skipped Question: </strong> <Tag value={skipAnswer} severity="contrast" />
                               </p>
            <Button
              label="Retake Quiz"
              icon="pi pi-refresh"
              className="p-button-outlined"
              onClick={() => navigate('/')}
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ResultPage;
