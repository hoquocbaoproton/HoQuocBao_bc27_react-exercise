import { Center } from '@mantine/core';
import React from 'react';

import classes from './Header.module.css';

const Header = () => {
  return (
    <Center>
      <header className={classes.header}>
        <h1>User Management</h1>
      </header>
    </Center>
  );
};

export default Header;
