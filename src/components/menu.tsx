import React, { ReactElement, useState, useCallback } from 'react';
import { 
  SwipeableDrawer, Button, List, ListItem, ListItemText, IconButton 
} from '@material-ui/core';
import { Menu as MenuIcon, Close } from '@material-ui/icons'

import './styles.css'

const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

const Menu = (): ReactElement => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpenMenu = useCallback(() => {
    setOpen(!open)
  }, [open, setOpen])

  const list = 
    <div
      className={'menuList'}
      role="presentation"
      onClick={(): void => handleOpenMenu()}
      onKeyDown={(): void => handleOpenMenu()}
    >
      <List
        disablePadding
      >
        <ListItem button className={'menuClose'}>
          <IconButton>
            <Close style={{ fontSize: 90, color: 'white' }} />
          </IconButton>
        </ListItem>
        <ListItem button>
          <Button>button</Button>
        </ListItem>
      </List>
    </div>;

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
            disableBackdropTransition={!iOS}
            disableDiscovery={iOS}
          >
            {list}
          </SwipeableDrawer>
        </React.Fragment>
    </div>
  );
}

export default Menu
