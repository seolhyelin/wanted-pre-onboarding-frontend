import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ChangeEvent, useEffect, useState } from 'react';
import styled from 'styled-components';

const SignUp = () => {
  const navigate = useNavigate();
  const [emailValidation, setEmailValidation] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState<string>('');

  const disabledButton = !emailValidation || !passwordValidation;

  const checkEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    if (value.includes('@')) setEmailValidation(true);
    setEmail(value);
  };

  const checkPassword = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    if (value.length >= 8) setPasswordValidation(true);
    setPassword(value);
  };

  const handleSignUp = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const resonse = axios({
      method: 'post',
      baseURL: 'https://pre-onboarding-selection-task.shop/auth/signup',
      headers: { 'Content-Type': 'application/json' },
      data: {
        email,
        password,
      },
    }).then(res => navigate('/signin'));
    return resonse;
  };

  useEffect(() => {
    if (localStorage.getItem('access_token')) navigate('/todo');
  });

  return (
    <SignUpContainer onSubmit={handleSignUp}>
      <ImailContainer>
        <p>이메일</p>
        <input onChange={checkEmail} data-testid="email-input" />
      </ImailContainer>
      <PasswordContainer>
        <p>패스워드</p>
        <input onChange={checkPassword} data-testid="password-input" />
      </PasswordContainer>
      <button
        data-testid="signup-button"
        type="submit"
        disabled={disabledButton}
      >
        회원가입
      </button>
    </SignUpContainer>
  );
};

const SignUpContainer = styled.form`
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

const ImailContainer = styled.div``;
const PasswordContainer = styled.div``;

export default SignUp;
