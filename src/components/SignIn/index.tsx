import styled from 'styled-components';

const SignIn = () => {
  return (
    <SignInContainer>
      <ImailContainer>
        <p>이메일</p>
        <input data-testid="email-input" />
      </ImailContainer>
      <PasswordContainer>
        <p>패스워드</p>
        <input data-testid="password-input" />
      </PasswordContainer>
      <button data-testid="signin-button">로그인</button>
    </SignInContainer>
  );
};
const SignInContainer = styled.div`
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
export default SignIn;
