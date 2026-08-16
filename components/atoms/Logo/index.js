import Anchor from '@atoms/Anchor'
import LogoIcon from '@icons/Logo'

const Logo = (props) => {
  return (
    <Anchor href='/' {...props}>
      <LogoIcon {...props} />
    </Anchor>
  )
}

export default Logo
