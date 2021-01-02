import * as React from 'react'
import { StyledSvg } from '../StyledSvg'

const Search = (props) => {
  return (
    <StyledSvg
      width={17}
      height={17}
      viewBox='0 0 17 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M7.667 14.333A6.667 6.667 0 107.667 1a6.667 6.667 0 000 13.333zM16 16l-3.625-3.625'
        stroke='#838383'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </StyledSvg>
  )
}

export default Search
