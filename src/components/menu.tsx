import React, { ReactElement, useState, useCallback } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

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
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={'menu'}>
        <React.Fragment>
          <Button onClick={(): void => handleOpenMenu()}>{'MENU'}</Button>
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
