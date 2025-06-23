import LikeIcon from "../../../../assets/heart.svg";
import CommentIcon from "../../../../assets/comment-text.svg";
import ShareIcon from "../../../../assets/send-2.svg";
import { alertNotImplemented } from "../../../../shared/utils/Alert";
import { getTimeAgo } from "../../../../shared/utils/dateTime";
import type { Action, Feed } from "../../../../types";

const actions: Action[] = [
  { icon: LikeIcon, label: "like" },
  { icon: CommentIcon, label: "comment" },
  { icon: ShareIcon, label: "share" },
];

const FeedCard = ({ feed }: { feed: Feed }) => {
  const { user, emoji, message = "" } = feed || {};

  return (
    <div className="pb-2 mb-10 pt-0.5 bg-[#00000008] rounded-3xl">
      <div className="flex flex-col gap-2 p-2 m-2 bg-white max-w-[554px] rounded-2xl shadow-md">
        <div className="flex items-center gap-3">
          <div>
            <img
              src={user?.profilePic}
              className="h-9 w-9 rounded-[7px]"
              alt="pro-pic"
            />
          </div>
          <div className="flex flex-col items-start">
            <div className="font-bold">{user?.name}</div>
            <div className="text-slate-500 text-[12px]">{getTimeAgo(user?.timeAgo)}</div>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <div className="flex w-10 h-full items-start relative">
            <button
              onClick={alertNotImplemented}
              className="p-1 m-1 bg-gray-200 rounded-full cursor-pointer"
            >
              {emoji}
            </button>
          </div>
          {/* Because we have html in message */}
          <div
            className="text-sm leading-relaxed"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        </div>
      </div>
      <div className="flex px-7 gap-4">
        {actions?.map((action) => (
          <button
            onClick={alertNotImplemented}
            key={action.label}
            className="hover:bg-gray-300 p-2 rounded-full hover:shadow-sm"
          >
            <img
              src={action.icon}
              className="h-5 w-5"
              alt={`${action.label}-icon`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default FeedCard;
