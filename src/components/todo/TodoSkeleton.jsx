export default function TodoSkeleton({ rows = 3 }) {
  return (
    <ul className="space-y-2">
      {Array.from({ length: rows }).map((_, index) => (
        <li
          key={index}
          className="flex items-center gap-3 rounded-lg border bg-white px-4 py-3 shadow-sm"
        >
          <div className="h-4 w-4 rounded bg-gray-200" />
          <div className="h-4 flex-1 animate-pulse rounded bg-gray-200" />
          <div className="h-4 w-16 animate-pulse rounded bg-gray-200" />
        </li>
      ))}
    </ul>
  );
}
