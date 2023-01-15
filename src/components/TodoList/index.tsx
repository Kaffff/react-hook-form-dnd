import { Stack, Typography } from "@mui/material";
import { useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  OnDragEndResponder,
} from "react-beautiful-dnd";
import { Todo } from "../../types/TodoList";
import { TodoCard } from "./Card";
import { TodoForm } from "./Form";

export const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const onDragEnd: OnDragEndResponder = (result) => {
    if (!result.destination) {
      return;
    }
  };
  return (
    <Stack alignItems="center" spacing={2}>
      <Typography fontSize={30} py={2}>
        {" "}
        TODO リスト
      </Typography>
      <TodoForm setTodos={setTodos} />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="list">
          {(provided, snapshot) => (
            <Stack
              ref={provided.innerRef}
              spacing={2}
              {...provided.droppableProps}
            >
              {todos.map((todo, index) => (
                <Draggable
                  key={todo.id}
                  draggableId={`d-${todo.id}`}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <TodoCard
                      id={todo.id}
                      name={todo.name}
                      created_at={todo.created_at}
                      setTodos={setTodos}
                      provided={provided}
                    />
                  )}
                </Draggable>
              ))}
            </Stack>
          )}
        </Droppable>
      </DragDropContext>
    </Stack>
  );
};
