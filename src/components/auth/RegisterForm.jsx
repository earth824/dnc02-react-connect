import { Link, useNavigate } from 'react-router';
import FormField from '../common/FormField.jsx';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '../../schemas/auth.js';
import { useRegister } from '../../hooks/useAuth.js';

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      password: '',
      confirm: ''
    }
  });

  const navigate = useNavigate();
  const registerUser = useRegister();

  const onSubmit = async (data) => {
    registerUser.mutate(data, { onSuccess: () => navigate('/login') });
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      {registerUser.error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          {registerUser.error.response.data.message}
        </div>
      )}

      <FormField
        label="Email"
        type="email"
        placeholder="you@example.com"
        {...register('email')}
        error={errors.email?.message}
        // name="email"
        // onBlur={fn}
        // onChange={fn}
        // ref={from useRef}
      />

      <FormField
        label="Password"
        type="text"
        placeholder="••••••••"
        {...register('password')}
        error={errors.password?.message}
      />

      <FormField
        label="Confirm Password"
        type="text"
        placeholder="••••••••"
        {...register('confirm')}
        error={errors.confirm?.message}
      />

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
