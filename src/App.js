import { PrimeReactProvider } from 'primereact/api';
import { useEffect, useState } from 'react';
import Loading from './Loading';
import { BrowserRouter as Switch, Route, Routes } from 'react-router-dom';
import ResultPage from './ResultPage';
import Header from './Header';
import FetchData from './FetchData';

function App() {
  const [ques, setQues] = useState([]);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
      setTimeout(() => {
        FetchData(setQues, setLoading);
      }, 0);
  }, []);

  return (
    <PrimeReactProvider>
        {loading ? <Loading/> : 
          <>  
          <Routes>
            <Route path="/" element={
              <>
                <Header questions = {ques}/>
              </>
             } />
            <Route path="/result" element={<ResultPage />} />
          </Routes>
         </>
        }
    </PrimeReactProvider>

  );
}

export default App;
