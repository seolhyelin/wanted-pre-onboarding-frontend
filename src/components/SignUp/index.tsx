import axios from 'axios';
import { ChangeEvent, useEffect, useState } from 'react';
import styled from 'styled-components';

const SignUp = () => {
  const [emailValidation, setEmailValidation] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState<number | string>();

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

  const handleSignUp = () => {
    const resonse = axios
      .post('/auth/signup', {
        method: 'post',
        headers: { 'Content-type': 'application/json' },
        body: {
          email: email,
          password: password,
        },
      })
      .then(res => console.log('res', res.data))
      .catch(err => console.log('err', err));

    return resonse;
  };

  const test = async () => {
    const data = await handleSignUp();
    return data;
  };

  return (
    <SignUpContainer>
      <ImailContainer>
        <p>이메일</p>
        <input onChange={checkEmail} data-testid="email-input" />
      </ImailContainer>
      <PasswordContainer>
        <p>패스워드</p>
        <input onChange={checkPassword} data-testid="password-input" />
      </PasswordContainer>
      {emailValidation && passwordValidation ? (
        <button data-testid="signup-button">회원가입</button>
      ) : (
        <button disabled data-testid="signup-button" onClick={test}>
          회원가입
        </button>
      )}
    </SignUpContainer>
  );
};

const SignUpContainer = styled.div`
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
