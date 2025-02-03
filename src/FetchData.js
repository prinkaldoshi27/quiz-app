
const FetchData = (setQues, setLoading, setCorrectMarks, setNegMarks, setTopic, setDuration, setQuestionCount, setTitle, setTotalMarks) => {
    const PROXY_URL = "https://thingproxy.freeboard.io/fetch/";
    const API_URL = "https://api.jsonserve.com/Uw5CrX/";
    fetch(PROXY_URL + API_URL)
        .then(response => response.json())
        .then(data => {
            setQues(data.questions);
            setCorrectMarks(parseInt(data.correct_answer_marks, 10));
            setNegMarks(Math.abs(parseInt(data.negative_marks, 10)));
            setLoading(false);
            setTopic(data.topic);
            setTitle(data.title);
            setQuestionCount(data.questions_count);
            setDuration(data.duration / data.questions_count);
            setTotalMarks(data.questions_count * data.correct_answer_marks);
        })
        .catch(error => console.error("Error fetching data:", error));
}
export default FetchData