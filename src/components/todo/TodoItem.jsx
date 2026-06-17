import { Trash2 } from 'lucide-react';
import { Pencil } from 'lucide-react';
import { Link } from 'react-router';

export default function TodoItem({ status, title, dueDate, id }) {
  return (
    <li
      className={`flex items-center justify-between rounded-lg border bg-white px-4 py-3 shadow-sm`}
    >
      <label className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={status}
          className="h-4 w-4 accent-teal-500"
        />
        <span
          className={status ? 'text-red-500 line-through' : 'text-gray-800'}
        >
          {title}
        </span>
      </label>

      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-500">{dueDate}</span>
        <Link
          to={`/todo/${id}/edit`}
          className="text-yellow-500 hover:text-yellow-600"
        >
          <Pencil size={18} />
        </Link>
        <button type="button" className="text-red-500 hover:text-red-600">
          <Trash2 size={18} />
        </button>
      </div>
    </li>
  );
}
