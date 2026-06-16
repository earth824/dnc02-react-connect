export default function FormField({ label, error, ref, ...props }) {
  return (
    <div>
      {label && (
        <label className="mb-1 block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={`w-full rounded-lg border px-3 py-2 focus:outline-none ${
          error
            ? 'border-red-500 focus:border-red-500'
            : 'focus:border-teal-500'
        }`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}
