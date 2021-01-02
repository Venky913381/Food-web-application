import { useState } from 'react'
import Text from '@atoms/Text'
import PopUp from '@atoms/PopUp'
import Button from '@atoms/Button'

const Index = () => {
  const [open, setOpen] = useState(false)

  const togglePopUp = () => {
    setOpen(!open)
  }

  return (
    <>
      <PopUp
        overlay
        open={open}
        togglePopUp={togglePopUp}
      >
        <Text align='center'>Button</Text>
      </PopUp>
      <Button onClick={togglePopUp}>
        Abrir PopUp
      </Button>
    </>
  )
}

export default Index
