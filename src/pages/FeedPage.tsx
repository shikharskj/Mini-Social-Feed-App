import { useCallback, useState } from "react";
import FeedList from "../components/FeedList";
import UserAuthModal from "../shared/components/UserAuthModal";
import type { Feed } from "../types";

const FeedPage = ({ feeds }: { feeds: Feed[] }) => {
  const [isAuthModalOpen, setAuthModalOpen] = useState(false);

  const handleCloseAuthModal = useCallback(() => {
    setAuthModalOpen(false);
  }, []);

  const isAuthenticated = () =>
    JSON.parse(localStorage.getItem("IS_AUTHENTICATED") || "false");

  const handleFeedInteraction = () => {
    if (!isAuthenticated()) {
      setAuthModalOpen(true);
    }
  };

  return (
    <>
      <UserAuthModal isOpen={isAuthModalOpen} onClose={handleCloseAuthModal} />
      <FeedList feeds={feeds} onClick={handleFeedInteraction} />
    </>
  );
};

export default FeedPage;
