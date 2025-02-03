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
 
  useEffect(() => {
      setTimeout(() => {
        FetchData(setQues, setLoading, setCorrectMarks, setNegMarks, setTopic, setDuration, setQuestionCount, setTitle);
      }, 0);
  }, []);

  return (
    <PrimeReactProvider>
        {loading ? <Loading/> : 
          <>  
          <Routes>
            <Route path="/" element={<HomePage topic={topic} duration={duration} questionCount={questionCount} title={title} correctMarks={correctMarks} negMarks={negMarks}/>} />
              
            <Route path='/quiz' element={ <Header questions = {ques} total = {total} setTotal={setTotal} correctMarks={correctMarks} negMarks ={negMarks} duration={duration}/> }/>
            
            <Route path="/result" element={<ResultPage total={total} />} />
          </Routes>
        </>
      }
    </PrimeReactProvider>

  );
}

export default App;
