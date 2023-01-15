import { Stack, Typography } from "@mui/material";
import { useState } from "react";
import { Todo } from "../../types/TodoList";
import { TodoCard } from "./Card";
import { TodoForm } from "./Form";

export const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  return (
    <Stack alignItems="center" spacing={2}>
      <Typography fontSize={30} py={2}>
        {" "}
        TODO リスト
      </Typography>
      <TodoForm setTodos={setTodos} />
      <Stack spacing={2}>
        {todos.map((todo) => (
          <TodoCard
            key={todo.id}
            id={todo.id}
            name={todo.name}
            created_at={todo.created_at}
            setTodos={setTodos}
          />
        ))}
      </Stack>
    </Stack>
  );
};
