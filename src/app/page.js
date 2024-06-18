import InteractiveList from "@/components/InteractiveList";
import { TodoProvider } from "@/context/TodoContext";
import Link from "next/link";
import './styles.css';

export default function Home() {
  return (
    <>
      <Link className="" href="/among-dagway">click ni para makita atong mga nawng</Link>
      <TodoProvider>
        <InteractiveList />
      </TodoProvider>
    </>
  );
}
