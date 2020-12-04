import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { ReactElement } from "react"

import LinkButton from './linkButton'

const Header = (): ReactElement => {
  return (
    <header>
      <LinkButton label={'Contact me'} link={'/contact'} />
    </header>
  )
}

export default Header
