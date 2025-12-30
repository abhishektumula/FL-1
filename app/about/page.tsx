import { Container } from "./components/container";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="[--pattern-col:var(--color-neutral-900)] bg-[radial-gradeint(var(--))]"></div>
      <Container />
    </div>
  );
}
