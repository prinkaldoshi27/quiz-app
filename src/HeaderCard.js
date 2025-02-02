import Buttons from "./Buttons"
import Container from "./Container";

const HeaderCard = ({ question, stepperRef, index }) => {
  return (
    <>
      <div className="flex flex-column h-12rem">
        <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
          <Container question={question} stepperRef={stepperRef} />
        </div></div>
      <Buttons stepperRef={stepperRef} index={index} />
    </>
  )
}
export default HeaderCard