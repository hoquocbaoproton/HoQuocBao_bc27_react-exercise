import React, { useCallback, useEffect, useState } from 'react';

// UI
import { Container, Grid } from '@mantine/core';
import Header from '../Components/Header/Header';
import Form from '../Components/Form/Form';
import UsersTable from '../Components/UserList/UserTable';

// api
import { getApiUser } from '../services/getApiUser';
import { URL } from '../store/URL';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState();

  const fetchUserHandler = useCallback(async (id) => {
    try {
      const user = await getApiUser(`${URL}/${id}`);
      setSelectedUser(user);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const fetchData = useCallback(async () => {
    try {
      const data = await getApiUser();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Container size={1440}>
      <Header />
      <Grid grow gutter='xl'>
        <Grid.Col span={3}>
          <Form onSuccess={fetchData} onSelectUser={selectedUser} />
        </Grid.Col>
        <Grid.Col span={9}>
          <UsersTable
            users={users}
            onSuccess={fetchData}
            onFetchUser={fetchUserHandler}
          />
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default UserManagement;
