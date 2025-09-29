export function ScreenCenter(props: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      {props.children}
    </div>
  );
}
