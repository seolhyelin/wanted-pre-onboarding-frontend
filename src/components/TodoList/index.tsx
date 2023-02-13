import { MouseEvent, ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Todo = () => {
  const navigate = useNavigate();
  const [todo, setTodo] = useState([{ text: '산책하기', checked: false }]);

  useEffect(() => {
    if (!localStorage.getItem('access_token')) navigate('/signin');
  });

  const inputTodoList = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo([{ text: e.currentTarget.value, checked: false }]);
  };

  const addTodoList = (e: MouseEvent<HTMLButtonElement>) => {};

  return (
    <TodoContainer>
      <InputContainer>
        <input onChange={inputTodoList} data-testid="new-todo-input" />
        <button type="submit" data-testid="new-todo-add-button">
          추가
        </button>
      </InputContainer>
      <ListContainer>
        {todo.map(todo => {
          return (
            <li key={todo.text}>
              <label>
                <input type="checkbox" />
                <span>{todo.text}</span>
              </label>
              <button data-testid="modify-button">수정</button>
              <button data-testid="delete-button">삭제</button>
            </li>
          );
        })}
      </ListContainer>
    </TodoContainer>
  );
};

const TodoContainer = styled.div``;
const InputContainer = styled.form``;
const ListContainer = styled.div``;
export default Todo;
