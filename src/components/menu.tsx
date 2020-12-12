import React, { ReactElement, useState, useCallback } from 'react';
import { 
  SwipeableDrawer, Button, List, ListItem, ListItemText, IconButton 
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons'

import './styles.css'

const Menu = (): ReactElement => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpenMenu = useCallback(() => {
    setOpen(!open)
  }, [open, setOpen])

  const list = (): ReactElement => (
    <div
      className={'menuList'}
      role="presentation"
      onClick={(): void => handleOpenMenu()}
      onKeyDown={(): void => handleOpenMenu()}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={'menu'}>
        <React.Fragment>
          <IconButton 
            onClick={(): void => handleOpenMenu()}
            aria-label={'open menu button'}
          >
            <MenuIcon style={{ fontSize: 100, color: 'white' }} />  
          </IconButton>
          <SwipeableDrawer
            anchor={'left'}
            open={open}
            onClose={(): void => handleOpenMenu()}
            onOpen={(): void => handleOpenMenu()}
          >
            {list()}
          </SwipeableDrawer>
        </React.Fragment>
    </div>
  );
}

export default Menu
