import React, { useEffect, useState } from 'react';
import * as l from './LoginFormElements';
import TextInput from '../shared/TextInput';
import PasswordInput from '../shared/PasswordInput';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login, user, loading, isAuthenticated } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated && user && !loading) {
      switch (user?.role) {
        case 'admin':
          navigate('/admin/home');
          break;
        case 'user':
          navigate('/user/home');
          break;

        default:
          navigate('/');
      }
    }
  }, [isAuthenticated, user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    toast.promise(
      login({ email, password }),
      {
        loading: 'Signing In ...',
        success: (data) => `Signed in successfully `,
        error: (err) => {
          if (!err.response.data.message) {
            return 'Something went wrong. Please Try again.';
          }
          return `${err?.response?.data?.message?.toString()}`;
        },
      },
      {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          fontSize: '1.5rem',
        },
      }
    );
  };

  return (
    <l.Container>
      <l.FormContainer>
        <l.FormTop>
          <l.FormHeader>Sign in</l.FormHeader>
          <l.FormSubHeader>Welcome to the ARCH-HRM</l.FormSubHeader>
        </l.FormTop>
        <l.FormBody onSubmit={handleSubmit}>
          <l.InputContainer>
            <TextInput
              placeholder={'Email'}
              value={email}
              setValue={setEmail}
              required={true}
            />
          </l.InputContainer>
          <l.InputContainer>
            <PasswordInput
              placeholder={'Password'}
              value={password}
              setValue={setPassword}
              required={true}
            />
          </l.InputContainer>
          <l.InputContainer>
            <l.LoginBtn>sign in</l.LoginBtn>
          </l.InputContainer>
          <l.FormFooterText>
            Don't have an account?&nbsp; <l.Span to="/signup">Sign Up</l.Span>{' '}
          </l.FormFooterText>
        </l.FormBody>
      </l.FormContainer>
    </l.Container>
  );
};

export default LoginForm;
