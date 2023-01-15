import { Button, CardHeader } from "@mui/material";
import Card from "@mui/material/Card";
import { Dispatch, SetStateAction, useCallback } from "react";
import { DraggableProvided } from "react-beautiful-dnd";
import { Todo } from "../../types/TodoList";

type Props = Todo & {
  setTodos: Dispatch<SetStateAction<Todo[]>>;
  provided: DraggableProvided;
};

export const TodoCard = ({
  id,
  name,
  created_at,
  setTodos,
  provided,
}: Props) => {
  const handleDelete = useCallback(() => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }, []);

  return (
    <Card
      ref={provided.innerRef}
      sx={{ minWidth: 500 }}
      {...provided.dragHandleProps}
      {...provided.draggableProps}
    >
      <CardHeader
        title={name}
        subheader={`${created_at} 作成`}
        action={
          <>
            <Button color="error" onClick={handleDelete}>
              削除
            </Button>
            <Button>編集</Button>
          </>
        }
      />
    </Card>
  );
};
