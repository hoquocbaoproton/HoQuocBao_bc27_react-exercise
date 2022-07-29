import React, { useEffect, useRef, useState, useCallback } from 'react';

import {
  ChevronIcon,
  PasswordInput,
  Input,
  SimpleGrid,
  Space,
  Group,
  Button,
} from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAt,
  faIdCard,
  faKey,
  faPhone,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { resetForm } from '../../services/resetForm';
import { postApiUser } from '../../services/postApiUser';
import { putApiUser } from '../../services/putApiUser';

const Form = ({ onSuccess, onSelectUser }) => {
  const [submitType, setSubmitType] = useState('add');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const accountRef = useRef();
  const nameRef = useRef();
  const passwordRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const roleRef = useRef();

  const newUser = () => {
    return {
      account: accountRef.current.value,
      name: nameRef.current.value,
      password: passwordRef.current.value,
      phone: phoneRef.current.value,
      email: emailRef.current.value,
      role: roleRef.current.value,
    };
  };

  const submitUserHandler = async (event) => {
    try {
      event.preventDefault();
      const user = newUser();

      if (submitType === 'add') {
        await postApiUser(user)
          .then(() => {
            setIsLoading(false);
            resetForm(
              accountRef,
              nameRef,
              passwordRef,
              phoneRef,
              emailRef,
              roleRef
            );
          })
          .then(() => {
            onSuccess();
          });
      }

      if (submitType === 'update') {
        await putApiUser(user, onSelectUser.id)
          .then(() => {
            resetForm(
              accountRef,
              nameRef,
              passwordRef,
              phoneRef,
              emailRef,
              roleRef
            );
          })
          .then(() => {
            onSuccess();
            setSubmitType('add');
          });
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const fillFormHandler = useCallback(() => {
    const defaultFormObject = {
      account: '',
      name: '',
      password: '',
      phone: '',
      email: '',
      role: '',
    };
    const { account, name, password, phone, email, role } =
      onSelectUser || defaultFormObject;

    accountRef.current.value = account;
    nameRef.current.value = name;
    passwordRef.current.value = password;
    phoneRef.current.value = phone;
    emailRef.current.value = email;
    roleRef.current.value = role;
  }, [onSelectUser]);

  useEffect(() => {
    fillFormHandler();
    setSubmitType('update');
  }, [fillFormHandler]);

  return (
    <section>
      <h2>Register User Form</h2>
      <form onSubmit={submitUserHandler}>
        <Input
          ref={accountRef}
          icon={<FontAwesomeIcon icon={faUser} />}
          placeholder='Account'
          radius='md'
        />
        <Space h='xl' />
        <Input
          ref={nameRef}
          icon={<FontAwesomeIcon icon={faIdCard} />}
          placeholder='Full Name'
          radius='md'
        />
        <Space h='xl' />
        <SimpleGrid cols={2}>
          <PasswordInput
            icon={<FontAwesomeIcon icon={faKey} />}
            placeholder='Password'
            component='password'
            radius='md'
            ref={passwordRef}
          />
          <Input
            ref={phoneRef}
            icon={<FontAwesomeIcon icon={faPhone} />}
            placeholder='Phone Number'
            radius='md'
          />
        </SimpleGrid>
        <Space h='xl' />
        <Input
          ref={emailRef}
          icon={<FontAwesomeIcon icon={faAt} />}
          placeholder='Email'
          radius='md'
        />
        <Space h='xl' />
        <Input
          ref={roleRef}
          icon={<FontAwesomeIcon icon={faUser} />}
          placeholder='Role'
          component='select'
          rightSection={<ChevronIcon />}
          radius='md'
        >
          <option value=''>Choose your role</option>
          <option value='customer'>Customer</option>
          <option value='administrator'>Administrator</option>
        </Input>
        <Space h='xl' />
        <Group position='right'>
          <Button radius='md' size='md' uppercase type='submit'>
            {submitType}
          </Button>
        </Group>
      </form>
    </section>
  );
};

export default Form;
