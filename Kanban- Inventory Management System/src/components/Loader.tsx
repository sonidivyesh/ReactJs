import { useLoadingSequence } from "@/components/Hooks/useLoadingSequence";
import kanbanMiniLogo from "../assets/kanbanMiniLogo.png";

export default function Loader() {
  const { isInitialLoading } = useLoadingSequence();

  if (!isInitialLoading) return null;

  return (
    <div className="h-screen grid place-content-center">
      <img src={kanbanMiniLogo} alt="Loading..." />
    </div>
  );
}
