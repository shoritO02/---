'use client';

import TaskCard from '../TaskCard/TaskCard';

type Todo = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

type Props = {
  todos: Todo[];
};

export default function TaskList({ todos }: Props) {
  return (
    <div>
      {todos.map((todo) => (
        <TaskCard
          key={todo.id}
          id={todo.id}
          userId={todo.userId}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}