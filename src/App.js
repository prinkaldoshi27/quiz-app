import { PrimeReactProvider } from 'primereact/api';
import Home from "./Home";
import Trial from "./Trial";
import { useEffect, useState } from 'react';
import { Card } from 'primereact/card';
import Loading from './Loading';

function App() {
  const [ques, setQues] = useState([]);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    const PROXY_URL = "https://thingproxy.freeboard.io/fetch/";
    const API_URL = "https://api.jsonserve.com/Uw5CrX/";

    const fetchData = () => {
      fetch(PROXY_URL + API_URL)
        .then(response => response.json())
        .then(data => {
          setQues(data.questions);
          setLoading(false);
        })
        .catch(error => console.error("Error fetching data:", error));
      }
      setTimeout(() => {
        fetchData();
      }, 0);
  }, []);

  return (
    <PrimeReactProvider>
        {loading ? <Loading/> : 
          <>  <Home questions={ques} /> </>
        }
    </PrimeReactProvider>
    
  );
}

export default App;
