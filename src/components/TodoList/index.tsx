import { MouseEvent, ChangeEvent, useEffect, useState, createRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface TodoInfo {
  id: number;
  text: string;
  checked: boolean;
}

const Todo = () => {
  const navigate = useNavigate();
  const input = createRef<HTMLInputElement>();
  const [todo, setTodo] = useState<TodoInfo[]>([]);
  const [edited, setEdited] = useState(false);
  const [editedText, setEditedText] = useState<TodoInfo[]>([]);
  console.log(editedText);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (input.current) {
      input.current.value = e.currentTarget.value;
    }
  };

  const onSubmitTodo = (e: ChangeEvent<HTMLFormElement>) => {
    if (input.current) {
      e.preventDefault();
      const newTodo = todo.concat({
        id: todo.length,
        text: input.current.value,
        checked: false,
      });
      input.current.value = '';
      setTodo(newTodo);
    }
  };

  const onDeleteTodo = (list: any) => {
    const deleteList = todo.filter(todo => todo.id !== list.id);
    setTodo(deleteList);
  };

  const handleEditButton = () => {
    setEdited(true);
  };

  const onEditTodo = (e: MouseEvent<HTMLButtonElement>) => {
    //todo.find()
    if (input.current) {
      e.preventDefault();
      const newTodo = todo.concat({
        id: todo.length,
        text: input.current.value,
        checked: false,
      });
      setEditedText(newTodo);
    }

    setEdited(false);
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
              <input type="checkbox" />
              {edited ? (
                <EditedContainer>
                  <input
                    ref={input}
                    onChange={onChangeInput}
                    data-testid="modify-input"
                  />
                  <button onClick={onEditTodo} data-testid="submit-button">
                    제출
                  </button>
                  <button data-testid="cancel-button">취소</button>
                </EditedContainer>
              ) : (
                <>
                  <span>{todo.text}</span>
                  <button
                    onClick={handleEditButton}
                    data-testid="modify-button"
                  >
                    수정
                  </button>
                  <button
                    onClick={() => onDeleteTodo(todo)}
                    data-testid="delete-button"
                  >
                    삭제
                  </button>
                </>
              )}
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
const EditedContainer = styled.div``;
export default Todo;
