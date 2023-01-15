import { Box, Button, OutlinedInput } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { Todo } from "../../types/TodoList";

type Props = {
  setTodos: Dispatch<SetStateAction<Todo[]>>;
};

export const TodoForm = ({ setTodos }: Props) => {
  const { register, handleSubmit } = useForm<Todo>({
    defaultValues: { name: "", created_at: "" },
  });
  const handleCreate = handleSubmit((value) => {
    const { name } = value;
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      name,
      created_at: new Date().toLocaleString(),
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  });
  return (
    <Box display="flex" justifyContent="space-between" sx={{ minWidth: 500 }}>
      <OutlinedInput sx={{ minWidth: 400 }} {...register("name")} />
      <Button variant="contained" sx={{ width: 90 }} onClick={handleCreate}>
        作成
      </Button>
    </Box>
  );
};
