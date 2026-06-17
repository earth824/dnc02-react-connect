import TodoHeader from '../components/todo/TodoHeader.jsx';
import TodoList from '../components/todo/TodoList.jsx';

export default function TodoPage() {
  return (
    <div className="space-y-6">
      <TodoHeader />
      <TodoList
        todos={[
          { id: 1, title: 'Test1', status: true },
          { id: 2, title: 'Test2', status: false }
        ]}
      />
    </div>
  );
}
