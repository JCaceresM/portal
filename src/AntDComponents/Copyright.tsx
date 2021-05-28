import React from 'react'
import { SecondaryParagraph } from '.'

const Copyright: React.FunctionComponent = () => {
  return (
    <SecondaryParagraph>{`Copyright © ${new Date().getFullYear()}  Jonas.`}</SecondaryParagraph>
  )
}

export default Copyright
