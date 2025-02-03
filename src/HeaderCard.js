import Buttons from "./Buttons"
import Container from "./Container";

const HeaderCard = ({ question, stepperRef, index , total, setTotal, correctMarks, negMarks, duration}) => {
  return (
    <>
      <div className="flex flex-column h-12rem">
        <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
          <Container question={question} stepperRef={stepperRef} total={total} setTotal={setTotal} correctMarks={correctMarks} negMarks={negMarks} index={index} duration={duration} />
        </div></div>
      <Buttons stepperRef={stepperRef} index={index} />  
    </>
  )
}
export default HeaderCard