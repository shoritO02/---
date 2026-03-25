import TaskList from '@/components/TaskList/TaskList';

type Todo = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

export default async function TasksPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
  const todos: Todo[] = await res.json();

  return (
    <main style={{ maxWidth: '700px', margin: '40px auto', padding: '0 16px' }}>
      <h1 style={{ fontWeight: 'bold', fontSize: '24px', marginBottom: '24px' }}>Task List</h1>
      <TaskList todos={todos} />
    </main>
  );
}