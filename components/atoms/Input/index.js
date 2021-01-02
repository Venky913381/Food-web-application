import { ContainerInput, StyledInput } from './styles'

const Input = (props) => {
  return (
    <ContainerInput>
      {props.iconRight && <props.iconRight className='iconRight' />}
      <StyledInput
        placeholder={props.ph}
        type={props.type}
        {...props}
      />
      {props.iconLeft && <props.iconLeft className='iconLeft' />}
    </ContainerInput>
  )
}

Input.defaultProps = {
  ph: 'Placeholder',
  type: 'text'
}

export default Input
