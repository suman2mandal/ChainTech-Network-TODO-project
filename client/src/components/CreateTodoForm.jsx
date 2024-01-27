import React, { useContext, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import createTodoRequest from '../api/createTodoRequest';
import { TokenContext } from '../App';

export const CreateTodoForm = () => {
  const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
  const [token] = useContext(TokenContext);

  const queryClient = useQueryClient();

  const { mutate: createTodo } = useMutation(
    (newTodo) => createTodoRequest(newTodo, token),
    {
      onSettled: () => {
        queryClient.invalidateQueries('todos');
      },
    }
  );

  return (
      <form
          onSubmit={(e) => {
              e.preventDefault();
              if (!title) return;
              createTodo({
                  title: title,
                  description: description,
                    date: date,
              });
              setTitle('');
              setDescription('');
                setDate('');
          }}
      >
          <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type="text"
              style={{
                  padding: '8px',
                  marginRight: '6px',
              }}
          />
          <input
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              type="text"
              style={{
                  padding: '8px',
                  marginRight: '6px',
                  width: '700px',
              }}
          />
            <input
                onChange={(e) => setDate(e.target.value)}
                value={date}
                type="Date"
                style={{
                    padding: '8px',
                    marginRight: '6px',
                }}
            />
          <button
              type="submit"
              style={{
                  padding: '5px',
                  height: '35px',
                  outline: 'none',
                  border: 'none',
                  color: 'white',
                  backgroundColor: '#00c348',
              }}
          >
              Create
          </button>
      </form>
  );
};
