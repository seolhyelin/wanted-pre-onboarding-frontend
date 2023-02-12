import { ChangeEvent, useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState<string>('');

  const checkEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setEmail(value);
  };

  const checkPassword = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setPassword(value);
  };

  const handleLogin = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = axios({
      method: 'post',
      baseURL: 'https://pre-onboarding-selection-task.shop/auth/signin',
      headers: { 'Content-Type': 'application/json' },
      data: {
        email,
        password,
      },
    }).then(res => {
      localStorage.setItem('access_token', res.data.access_token);
      navigate('/todo');
    });
    return response;
  };

  useEffect(() => {
    if (localStorage.getItem('access_token')) navigate('/todo');
  });

  return (
    <SignInContainer onSubmit={handleLogin}>
      <EmailContainer>
        <p>이메일</p>
        <input onChange={checkEmail} data-testid="email-input" />
      </EmailContainer>
      <PasswordContainer>
        <p>패스워드</p>
        <input onChange={checkPassword} data-testid="password-input" />
      </PasswordContainer>
      <button type="submit" data-testid="signin-button">
        로그인
      </button>
    </SignInContainer>
  );
};
const SignInContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;

  input {
    width: 200px;
    padding: 8px 5px;
  }

  button {
    width: 100px;
    padding: 8px 5px;
    margin-top: 20px;
    background-color: orange;
  }
`;

const EmailContainer = styled.div``;
const PasswordContainer = styled.div``;
export default SignIn;
