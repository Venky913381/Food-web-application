import Input from '@atoms/input'
import Search from '@icons/Search'

const Index = () => {
  return (
    <Input
      type='email'
      ph='Find your taste'
      iconRight={Search}
    />
  )
}

export default Index
