import { Link } from 'react-router';
import FormField from '../common/FormField.jsx';

export default function RegisterForm() {
  return (
    <form className="space-y-4">
      <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
        Email already exist
      </div>
      <FormField label="Email" type="email" placeholder="you@example.com" />
      <FormField label="Password" type="password" placeholder="••••••••" />
      <button className="w-full rounded-lg bg-teal-500 px-4 py-2 font-medium text-white hover:bg-teal-600 disabled:opacity-50">
        Create account
      </button>
      <p className="text-center text-sm text-gray-500">
        Already have an account?{' '}
        <Link to="/login" className="font-medium text-teal-600 hover:underline">
          Log in
        </Link>
      </p>
    </form>
  );
}
