import { useLoadingSequence } from "@/components/Hooks/useLoadingSequence";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function SidebarSkeleton() {
  const { isContentLoading } = useLoadingSequence();

  if (!isContentLoading) return null;

  return (
    <>
      <div className="sidebar-section">
        {/* Header - Kanban Logo */}
        <div className="sidebar-header">
          <Skeleton width={150} height={40} />
          <div className="sidebar-close-btn">
            <span role="button">
              <Skeleton width={20} />
            </span>
          </div>
        </div>

        {/* Menu */}
        <div className="sidebar-menu">
          <ul>
            {[...Array(6)].map((_, i) => (
              <li key={i}>
                <div className="nav-menu">
                  <Skeleton circle={true} height={30} width={30} />
                  <Skeleton width={100} style={{ marginLeft: "10px" }} />
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className="sidebar-footer">
          <ul>
            {[...Array(2)].map((_, i) => (
              <li key={i}>
                <div className="nav-menu">
                  <Skeleton circle={true} height={30} width={30} />
                  <Skeleton width={100} style={{ marginLeft: "10px" }} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
