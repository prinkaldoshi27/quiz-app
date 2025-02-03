import React from 'react';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Tag } from 'primereact/tag';
import { useNavigate } from 'react-router-dom';

const HomePage = ({ topic, duration, questionCount, title, correctMarks, negMarks }) => {
    const navigate = useNavigate();

    const startQuiz = () => {
        navigate('/quiz');
    };

    return (
        <div className="flex justify-content-center align-items-center" style={{ height: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Card title="Welcome to the Quiz App" style={{ width: '30rem' }}>
                <p className="m-0" style={{ fontSize: '1.2rem' }}>
                    Get ready to test your knowledge!
                </p>
                <div style={{ marginTop: '2rem' }}>
                    <p>
                        <strong>Title:</strong> <Tag value={title} severity="danger" />
                    </p>
                    <p>
                        <strong>Topic:</strong> <Tag value={topic} severity="warning" />
                    </p>
                    <p>
                        <strong>Timer: </strong> <Tag value={duration + " Minutes Per Question"} severity="contrast" />
                    </p>
                    <p>
                        <strong>Total Questions:</strong> <Tag value={questionCount} severity="info" />
                    </p>
                    <p>
                        <strong>Positive Marks Per Question:</strong> <Tag value={"+" + correctMarks} severity="success" />
                    </p>
                    <p>
                        <strong>Negative Marks Per Question:</strong> <Tag value={"-" + negMarks} severity="danger" />
                    </p>
                    <p>
                        <strong>Total Marks:</strong> <Tag value={questionCount * correctMarks} severity="warning" />
                    </p>
                </div>
                <div style={{ marginTop: '2rem' }}>
                    <Button label="Start Quiz" icon="pi pi-play" onClick={startQuiz} className="p-button-success p-button-lg" />
                </div>
            </Card>
        </div>
    );
};

export default HomePage;
