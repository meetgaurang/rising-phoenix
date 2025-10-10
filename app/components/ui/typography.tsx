export function H1(props: { children: React.ReactNode }) {
  return (
    <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
      {props.children}
    </h1>
  );
}

export function TextMuted(props: { children: React.ReactNode }) {
  return <p className="text-muted-foreground text-sm">{props.children}</p>;
}
