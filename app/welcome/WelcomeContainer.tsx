import { useNavigate } from "react-router";
import { Button } from "~/components/ui/button";
import { H1 } from "~/components/ui/typography";

export function WelcomeContainer() {
  const navigate = useNavigate();

  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <H1>Learning Platform!</H1>
        </header>
        <div className="max-w-[300px] w-full space-y-6 px-4">
          <Button
            type="button"
            className="w-full"
            onClick={() => {
              navigate("/login");
            }}
          >
            Sign In
          </Button>
        </div>
      </div>
    </main>
  );
}
