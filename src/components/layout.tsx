import React, { ReactElement } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

type Props = {
  children: ReactElement
}

const Layout = ({ children }: Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
      <div className={`layout`}>
        {/* <Header /> */}
        <main>{children}</main>
      </div>
  )
}

export default Layout
