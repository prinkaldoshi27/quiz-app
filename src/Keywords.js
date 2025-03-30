import { Tag } from 'primereact/tag';

const Keywords = ({ question }) => {
  if (!question?.keywords || question.keywords.length === 0) {
    return <div>No Keywords Available</div>;
  }

  return (
    <div>
      Keywords:{" "}
      {question.keywords.map((keyword, index) => (
        <Tag key={index} value={keyword} className="mr-2" style={{ margin: "0.25rem" }} />
      ))}
    </div>
  );
};

export default Keywords;
