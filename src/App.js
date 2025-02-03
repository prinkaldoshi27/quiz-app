import { PrimeReactProvider } from 'primereact/api';
import { useEffect, useState } from 'react';
import Loading from './Loading';
import { BrowserRouter as Switch, Route, Routes } from 'react-router-dom';
import ResultPage from './ResultPage';
import Header from './Header';
import FetchData from './FetchData';
import HomePage from './HomePage';

function App() {
  const [ques, setQues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [correctMarks, setCorrectMarks] = useState(0);
  const [negMarks, setNegMarks] = useState(0);
  const [topic, setTopic] = useState('')
  const [duration, setDuration] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);
  const [title, setTitle] = useState('');
  const [totalMarks, setTotalMarks] = useState(0);
  const [negAnswer, setNegAnswer] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [skipAnswer, setSkipAnswer] = useState(0);
 
  useEffect(() => {
      setTimeout(() => {
        FetchData(setQues, setLoading, setCorrectMarks, setNegMarks, setTopic, setDuration, setQuestionCount, setTitle, setTotalMarks);
      }, 0);
  }, []);

  useEffect(() => {
    console.log("Correct Answer : ", correctAnswer);
    console.log("Negative Answer : ", negAnswer);
    console.log("Skip Answer : ", skipAnswer);
  },[correctAnswer, negAnswer, skipAnswer])

  return (
    <PrimeReactProvider>
        {loading ? <Loading/> : 
          <>  
          <Routes>
            <Route path="/" element={<HomePage topic={topic} duration={duration} questionCount={questionCount} title={title} correctMarks={correctMarks} negMarks={negMarks} totalMarks={totalMarks}/>} />
              
            <Route path='/quiz' element={ <Header questions = {ques} total = {total} setTotal={setTotal} correctMarks={correctMarks} negMarks ={negMarks} duration={duration} correctAnswer={correctAnswer} setCorrectAnswer={setCorrectAnswer} negAnswer={negAnswer} setNegAnswer={setNegAnswer} skipAnswer={skipAnswer} setSkipAnswer={setSkipAnswer}/> }/>
            
            <Route path="/result" element={<ResultPage total={total} totalMarks={totalMarks} correctAnswer={correctAnswer} negAnswer={negAnswer} skipAnswer={skipAnswer}/>} />
          </Routes>
        </>
      }
    </PrimeReactProvider>

  );
}

export default App;
