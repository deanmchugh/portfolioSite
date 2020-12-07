import React, { ReactElement } from "react"

import Menu from "./menu"

type Props = {
  children: ReactElement
}

const Layout = ({ children }: Props): ReactElement => {
  return (
      <div className={`layout`}>
        <div className={'header'}>
          <Menu />
        </div>
        <main>{children}</main>
      </div>
  )
}

export default Layout
