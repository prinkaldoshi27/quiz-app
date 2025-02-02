import { Tag } from 'primereact/tag';
const Keywords = ({ question }) => {
  return (
   <div>
    Keywords: {question.reading_material.practice_material.keywords.map((keyword, index) => (
                   <Tag key={index} value={keyword} className="mr-2" style={{ margin: "0.25rem" }} />
               ))}
      </div>
  )
}
export default Keywords