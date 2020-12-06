import React, { ReactElement } from "react"

import Header from "./header"

type Props = {
  children: ReactElement
}

const Layout = ({ children }: Props): ReactElement => {
  return (
      <div className={`layout`}>
        {/* <Header /> */}
        <main>{children}</main>
      </div>
  )
}

export default Layout
