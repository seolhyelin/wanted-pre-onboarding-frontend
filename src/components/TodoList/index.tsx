import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Todo = () => {
  const navigate = useNavigate();
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem('access_token')) navigate('/signin');
  });

  return (
    <TodoContainer>
      <InputContainer>
        <input data-testid="new-todo-input" />
        <button data-testid="new-todo-add-button">추가</button>
      </InputContainer>
      <li>
        <label>
          <input type="checkbox" />
          <span>TODO 1</span>
        </label>
        <button data-testid="modify-button">수정</button>
        <button data-testid="delete-button">삭제</button>
      </li>
    </TodoContainer>
  );
};

const TodoContainer = styled.div``;
const InputContainer = styled.div``;
export default Todo;
