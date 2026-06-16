export default function AuthCard({ title, children }) {
  return (
    <div className="flex items-center justify-center px-4 min-h-screen">
      <div className="w-full max-w-lg rounded-xl border bg-white p-6 shadow-sm">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
        </div>
        {children}
      </div>
    </div>
  );
}
