const FetchData = (setQues, setLoading, setCorrectMarks, setNegMarks, setTopic, setDuration, setQuestionCount, setTitle, setTotalMarks) => {
    const QUIZ_DETAILS_URL = "http://localhost:3500/quizDetails";
    const QUESTIONS_URL = "http://localhost:3500/questions";

    fetch(QUIZ_DETAILS_URL)
        .then(response => response.json())
        .then(data => {
            setTitle(data.title);
            setTopic(data.topic);
            setQuestionCount(data.questionCount);
            setDuration(data.duration / data.questionCount);
            setCorrectMarks(parseInt(data.correctMarks, 10));
            setNegMarks(Math.abs(parseFloat(data.negMarks)));
            setTotalMarks(data.questionCount * data.correctMarks);
        })
        .catch(error => console.error("Error fetching quiz details:", error));

    fetch(QUESTIONS_URL)
        .then(response => response.json())
        .then(data => {
            setQues(data);
            setLoading(false);
        })
        .catch(error => console.error("Error fetching questions:", error));
}

export default FetchData;
