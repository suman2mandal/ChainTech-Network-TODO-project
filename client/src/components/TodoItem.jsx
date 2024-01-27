import React, {
  useCallback,
  useState,
  useEffect,
  useContext,
} from 'react';
import {
  useQueryClient,
  useMutation,
  QueryClient,
} from 'react-query';
import deleteTodoRequest from '../api/deleteTodoRequest';
import updateTodoRequest from '../api/updateTodoRequest';
import { debounce } from 'lodash';
import { TokenContext } from '../App';

export const TodoItem = ({ todo }) => {
    const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const [date, setDate] = useState(todo.date);
  const [token] = useContext(TokenContext);

  const queryClient = useQueryClient();

  const { mutate: updateTodo } = useMutation(
    (updatedTodo) => updateTodoRequest(updatedTodo, token),
    {
      onSettled: () => {
        queryClient.invalidateQueries('todos');
      },
    }
  );

  const { mutate: deleteTodo } = useMutation(
    (updatedTodo) => deleteTodoRequest(updatedTodo, token),
    {
      onSettled: () => {
        queryClient.invalidateQueries('todos');
      },
    }
  );

    const debouncedUpdateTodo = useCallback(
        debounce((updatedTodo) => updateTodoRequest(updatedTodo, token), 600),
        [token]
    );

    useEffect(() => {
        if (title !== todo.title || description !== todo.description || date !== todo.date) {
            debouncedUpdateTodo({
                ...todo,
                title,
                description,
                date,
            });
        }
    }, [title, description, date]);

  return (
      <div
          style={{
              marginBottom: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
          }}
      >
          <input
              checked={todo.completed}
              type="checkbox"
              style={{
                  marginRight: '5px',
                  height: '34px',
                  width: '34px',
              }}
              onChange={() =>
                  updateTodo({
                      ...todo,
                      completed: !todo.completed,
                  })
              }
          />

          <input
              style={{
                  padding: '8px',
                  marginRight: '6px',
              }}
              type="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
          />
          <input
              style={{
                  padding: '8px',
                  marginRight: '6px',
                  width: '700px',
              }}
              type="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
          />
          <input
              style={{
                  padding: '8px',
                  marginRight: '6px',
              }}
              type="Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
          />

          <button
              style={{
                  padding: '5px',
                  height: '35px',
                  outline: 'none',
                  border: 'none',
                  color: 'white',
                  backgroundColor: '#cc5a5a',
              }}
              onClick={() => deleteTodo(todo)}
          >
              delete
          </button>
      </div>
  );
};
