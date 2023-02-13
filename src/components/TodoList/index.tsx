import { MouseEvent, ChangeEvent, useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface TodoInfo {
  text: string;
  checked: boolean;
}

const Todo = () => {
  const navigate = useNavigate();
  // 제어 컴포넌트와 비제어 컴포넌트(useRef vs useState)
  const input = useRef<HTMLInputElement | null>(null);
  const [todo, setTodo] = useState<TodoInfo[]>([]);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (input.current) {
      input.current.value = e.currentTarget.value;
    }
  };

  const onSubmitTodo = (e: ChangeEvent<HTMLFormElement>) => {
    if (input.current) {
      e.preventDefault();
      // 리액트 불변성
      // setTodo([{ text: e.currentTarget.value, checked: false }])
      const newTodo = todo.concat({
        text: input.current.value,
        checked: false,
      });
      input.current.value = '';
      setTodo(newTodo);
    }
  };

  const onDeleteTodo = (e: MouseEvent<HTMLButtonElement>) => {
    // todo.filter();
  };

  const onEditTodo = (e: MouseEvent<HTMLButtonElement>) => {
    //todo.find()
  };

  useEffect(() => {
    if (!localStorage.getItem('access_token')) navigate('/signin');
  });

  return (
    <TodoContainer>
      <InputContainer onSubmit={onSubmitTodo}>
        <input
          ref={input}
          onChange={onChangeInput}
          data-testid="new-todo-input"
        />
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
