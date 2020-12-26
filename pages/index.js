import Link from 'next/link'
import Titulo from '../components/titulo'

const Index = () => {
  return (
    <>
      <Link href='/about'>
        <a>
          About
        </a>
      </Link>
      <Titulo />
    </>
  )
}

export default Index
