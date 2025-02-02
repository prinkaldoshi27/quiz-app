
const FetchData = (setQues, setLoading) => {
    const PROXY_URL = "https://thingproxy.freeboard.io/fetch/";
    const API_URL = "https://api.jsonserve.com/Uw5CrX/";
    fetch(PROXY_URL + API_URL)
        .then(response => response.json())
        .then(data => {
            setQues(data.questions);
            setLoading(false);
        })
        .catch(error => console.error("Error fetching data:", error));
}
export default FetchData