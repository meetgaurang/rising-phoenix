import { zodResolver } from '@hookform/resolvers/zod';
import { AlertCircleIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Alert, AlertTitle } from '~/components/ui/alert';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { GoogleSVGIcon } from '~/components/ui/GoogleSVGIcon';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { type LoginFormValues, loginFormSchema } from './loginFormSchema';

export type LoginFormProps = {
  onEmailLogin: (data: LoginFormValues) => Promise<void>;
  onGoogleLogin: () => void;
  loading: boolean;
  error?: string;
};

export function LoginForm({
  onGoogleLogin,
  loading,
  error,
  onEmailLogin,
}: LoginFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
  });

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-6">
            {error && (
              <Alert variant="destructive">
                <AlertCircleIcon />
                <AlertTitle>{error}</AlertTitle>
              </Alert>
            )}
            <form onSubmit={handleSubmit(onEmailLogin)}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="Email address"
                    {...register('email')}
                    className={errors.email ? 'input-error' : ''}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <div className="grid gap-3">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <a
                      // biome-ignore lint/a11y/useValidAnchor: TODO: add proper link
                      href="#"
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Password"
                    {...register('password')}
                    className={errors.password ? 'input-error' : ''}
                  />
                  {errors.password && (
                    <span className="text-red-500 text-sm">
                      {errors.password.message}
                    </span>
                  )}
                </div>
                <Button type="submit" className="w-full">
                  {loading ? 'Logging in...' : 'Login'}
                </Button>
              </div>
            </form>
          </div>

          <div className="mt-4 flex flex-col gap-3">
            <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
              <span className="bg-background text-muted-foreground relative z-10 px-2">
                OR
              </span>
            </div>

            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={onGoogleLogin}
            >
              <GoogleSVGIcon />
              Continue with Google
            </Button>
          </div>

          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{' '}
            <a href="/signup" className="underline underline-offset-4">
              Sign up
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
