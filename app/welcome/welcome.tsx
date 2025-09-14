export function Welcome() {
  return (
    <div className="flex items-center justify-center pt-16 pb-4">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl">Welcome to the learning platform!</h1>
        <a href="/login" className="btn btn-primary">
          Sign in
        </a>
      </div>
    </div>
  );
}
