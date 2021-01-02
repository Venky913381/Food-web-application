import { useRef, useEffect } from 'react'
import { Overlay, StyledPopup } from './styles'

const PopUp = (props) => {
  const refPopUp = useRef(null)

  useEffect(() => {
    console.log(refPopUp.current)
    if (refPopUp.current) {
      refPopUp.current.addEventListener('click', (e) => {
        if (e.target.classList.contains('overlay')) {
          props.togglePopUp()
        }
      })
    }
  })

  return (
    <>
      {props.open &&
        <Overlay overlay={props.overlay} ref={refPopUp} className='overlay'>
          <StyledPopup {...props}>
            {props.children}
          </StyledPopup>
        </Overlay>}
    </>
  )
}

export default PopUp
