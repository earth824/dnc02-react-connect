import { Plus } from 'lucide-react';
import { Link } from 'react-router';

export default function TodoHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">My Todos</h1>
      </div>
      <Link
        to="/todo/create"
        className="flex items-center gap-1 rounded-lg bg-teal-500 px-4 py-2 font-medium text-white hover:bg-teal-600"
      >
        <Plus size={18} />
        New task
      </Link>
    </div>
  );
}
