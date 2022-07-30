import React, { useEffect, useCallback, useState } from 'react';

import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Badge,
  Table,
  Group,
  Text,
  ActionIcon,
  Anchor,
  ScrollArea,
  useMantineTheme,
  Center,
  Transition,
} from '@mantine/core';
import { delApiUser } from '../../services/delApiUser';

import './UserTable.css';

const roleColor = (role) => {
  switch (role) {
    case 'customer':
      return 'cyan';
    case 'administrator':
      return 'pink';
    default:
      break;
  }
};

const UsersTable = ({ users, onSuccess, onFetchUser }) => {
  const [exit, setExit] = useState(false);
  const theme = useMantineTheme();

  const selectUserHandler = useCallback(
    (event) => {
      if (!event.currentTarget) return;
      const id = event.currentTarget.id;
      onFetchUser(id);
    },
    [onFetchUser]
  );

  const deleteUserHandler = useCallback(
    async (event) => {
      try {
        if (!event.currentTarget) return;
        const id = event.currentTarget.id;

        await delApiUser(id).then(() => {
          onSuccess();
          setExit(true);
        });
      } catch (error) {
        console.log(error);
      }
    },
    [onSuccess]
  );

  const rows = users?.map((user) => {
    return (
      <tr key={user.id} className={`${exit ? 'hide' : 'show'}`}>
        <td>
          <Group spacing='sm'>
            <Text size='sm' weight={500}>
              {user.name}
            </Text>
          </Group>
        </td>

        <td>
          <Badge
            color={roleColor(user.role)}
            variant={theme.colorScheme === 'dark' ? 'light' : 'outline'}
          >
            {user.role}
          </Badge>
        </td>
        <td>
          <Anchor
            size='sm'
            href='#'
            onClick={(event) => event.preventDefault()}
          >
            {user.email}
          </Anchor>
        </td>
        <td>
          <Text size='sm' color='dimmed'>
            {user.account}
          </Text>
        </td>
        <td>
          <Text size='sm' color='dimmed'>
            {user.password}
          </Text>
        </td>
        <td>
          <Text size='sm' color='dimmed'>
            {user.phone}
          </Text>
        </td>
        <td>
          <Center>
            <Group spacing={0}>
              <ActionIcon onClick={selectUserHandler} id={user.id}>
                <FontAwesomeIcon icon={faPen} />
              </ActionIcon>
              <ActionIcon color='red' onClick={deleteUserHandler} id={user.id}>
                <FontAwesomeIcon icon={faTrashCan} />
              </ActionIcon>
            </Group>
          </Center>
        </td>
      </tr>
    );
  });

  return (
    <section>
      <h2>Table of Users</h2>
      <ScrollArea style={{ height: 480 }}>
        <Table sx={{ minWidth: 800 }} verticalSpacing='sm'>
          <thead
            style={{
              position: 'sticky',
              top: 0,
              backgroundColor: '#1d1e30',
              zIndex: 100,
            }}
          >
            <tr>
              <th>User</th>
              <th>Role</th>
              <th>Email</th>
              <th>Account</th>
              <th>Password</th>
              <th>Phone</th>
              <th />
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </ScrollArea>
    </section>
  );
};

export default UsersTable;
