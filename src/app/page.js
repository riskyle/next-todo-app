import InteractiveList from "@/components/InteractiveList";
import { TodoProvider } from "@/context/TodoContext";

export default function Home() {
  return (
    <>
      <TodoProvider>
        <InteractiveList />
      </TodoProvider>
    </>
  );
}
