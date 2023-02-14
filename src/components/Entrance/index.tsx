import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Entrance = () => {
  const navigate = useNavigate();

  const handleEntrance = () => {
    navigate('/signup');
  };

  return (
    <EntranceContainer>
      <Button onClick={handleEntrance}>입장</Button>
    </EntranceContainer>
  );
};

const EntranceContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
`;
const Button = styled.button`
  padding: 20px 40px;
  border-style: none;
  border-radius: 8px;
  background-color: #fb7a3f;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;
export default Entrance;
