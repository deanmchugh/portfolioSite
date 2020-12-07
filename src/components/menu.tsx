import React, { ReactElement, useState, useCallback } from "react"
import { Button } from '@material-ui/core'

import LinkButton from './linkButton'
import './styles.css'

const Menu = (): ReactElement => {
  const [visible, setVisible] = useState<string>('none')

  const handleShowMenu = useCallback(() => {
    visible === 'none' ? setVisible('inline') : setVisible('none')
  }, [visible, setVisible])

  return (
    <div>
      <div
        className={'menu'}
        style={{display: visible}}
      >
        <LinkButton label={'home'} link={'/'} />
        <LinkButton label={'experience'} link={'/experience'} />
        <LinkButton label={'projects'} link={'/projests'} />
        <LinkButton label={'contact me'} link={'/contact'} />
      </div>
      <Button
        onClick={() => handleShowMenu()}
      >Menu</Button>
    </div>
  )
}

export default Menu