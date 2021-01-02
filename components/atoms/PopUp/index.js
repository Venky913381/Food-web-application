import { StyledPopup } from "./styles"

const PopUp = (props) => {
  return (
    <>
      <StyledPopup {...props}>{props.children}</StyledPopup>
    </>
  )
}

export default PopUp
