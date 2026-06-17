import FormField from '../common/FormField';

export default function TodoForm({ heading, submitLabel, showCompleted }) {
  return (
    <div className="mx-auto max-w-lg rounded-xl border bg-white p-6 shadow-sm">
      <h1 className="mb-6 text-2xl font-bold text-gray-800">{heading}</h1>
      <form className="space-y-4">
        <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          Error
        </div>

        <FormField label="Title" placeholder="e.g. Buy groceries" />
        <FormField label="Due date (optional)" type="date" />
        {showCompleted && (
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <input type="checkbox" className="h-4 w-4 accent-teal-500" />
            Completed
          </label>
        )}
        <div className="flex gap-2">
          <button
            type="button"
            className="flex-1 rounded-lg border px-4 py-2 font-medium text-gray-600 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button className="flex-1 rounded-lg bg-teal-500 px-4 py-2 font-medium text-white hover:bg-teal-600 disabled:opacity-50">
            {submitLabel}
          </button>
        </div>
      </form>
    </div>
  );
}
