import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { ProgressBar } from 'primereact/progressbar';
import { useNavigate } from 'react-router-dom';

const ResultPage = ({ total }) => {
  const navigate = useNavigate();

  // For demonstration, assuming a maximum score of 100.
  // You can calculate a percentage if your max score differs.
  const percentage = Math.min((total / 100) * 100, 100);

  return (
    <div className="flex justify-content-center align-items-center" style={{ height: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Card title="Quiz Results" style={{ width: '30rem' }} className="p-shadow-3">
        <div className="text-center">
          <h2>Your Total Score</h2>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: '1rem 0' }}>{total}</p>
          <ProgressBar value={percentage} showValue={true} style={{ height: '1.5rem' }} />
          <p style={{ marginTop: '1rem', fontSize: '1rem' }}>You scored {percentage.toFixed(0)}%!</p>
          <div className="p-mt-3">
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
