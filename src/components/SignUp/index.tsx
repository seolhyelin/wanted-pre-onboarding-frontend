import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

const SignUp = () => {
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);

  const checkEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    if (value.includes('@')) setEmail(true);
  };

  const checkPassword = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    if (value.length >= 8) setPassword(true);
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
      <button data-testid="signup-button">회원가입</button>
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
