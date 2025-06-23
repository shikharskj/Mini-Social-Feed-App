import type { Feed } from "../../types";
import FeedCard from "./components/FeedCard";
import PostFeedInputBox from "./components/PostFeedInputBox";

type FeedListProps = {
  feeds: Feed[];
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
};
const FeedList = ({ feeds, onClick }: FeedListProps) => {
  return (
    <div className="flex flex-col justify-center items-center mt-20 sm:mt-30 gap-6" onClick={onClick}>
      <div>
        <PostFeedInputBox />
      </div>
      <div>
        {feeds.map((feed) => (
          <FeedCard key={feed.id} feed={feed} />
        ))}
      </div>
    </div>
  );
};

export default FeedList;
