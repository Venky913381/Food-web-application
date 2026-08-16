import Logo from '@atoms/Logo'
import Link from 'next/link'

const About = () => {
  return (
    <>
      <Logo />
      <Link href='/'>
        <a>
          Inicio
        </a>
      </Link>
      <div>
        <h1>About</h1>
      </div>
    </>
  )
}

export default About
