import { Stack, Typography } from "@mui/material";
import { TodoCard } from "./Card";
import { TodoForm } from "./Form";

export const TodoList = () => {
  return (
    <Stack alignItems="center" spacing={2}>
      <Typography fontSize={30} py={2}>
        {" "}
        TODO リスト
      </Typography>
      <TodoForm />
      <Stack spacing={2}>
        <TodoCard />
        <TodoCard />
        <TodoCard />
      </Stack>
    </Stack>
  );
};
