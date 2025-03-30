const FetchData = (setQues, setLoading, setCorrectMarks, setNegMarks, setTopic, setDuration, setQuestionCount, setTitle, setTotalMarks) => {
    const QUIZ_DETAILS_URL = "https://quiz-app-hi1n.onrender.com/quizDetails";
    const QUESTIONS_URL = "https://quiz-app-hi1n.onrender.com/questions";

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
