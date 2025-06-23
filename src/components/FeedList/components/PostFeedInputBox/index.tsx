import { useRef, useState } from "react";
import { Editor } from "@tiptap/react";
import AddIcon from "../../../../assets/plus.svg";
import MicIcon from "../../../../assets/mic 2.svg";
import VideoIcon from "../../../../assets/video-camera.svg";
import PublishIcon from "../../../../assets/send.svg";
import TextEditor from "../../../../shared/components/TextEditor";
import { alertNotImplemented } from "../../../../shared/utils/Alert";
import { fetchRandomProfilePic } from "../../../../services/api";
import { getRandomEmoji } from "../../../../shared/utils/random";
import type { Action } from "../../../../types";

const actions: Action[] = [
  { icon: AddIcon, label: "add" },
  { icon: MicIcon, label: "mic" },
  { icon: VideoIcon, label: "video" },
];

const PostFeedInputBox = () => {
  const [postMessage, setPostMessage] = useState<string>("");
  const [isPublishing, setIsPublishing] = useState<boolean>(false);
  const editorRef = useRef<Editor | null>(null); // To clear editor when submit

  const publishFeed = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (postMessage?.trim().length) {
      e.preventDefault();
      if (!postMessage.trim()) return;

      setIsPublishing(true);
      try {
        const existingFeeds = JSON.parse(localStorage.getItem("FEEDS") || "[]");
        const randomImage = await fetchRandomProfilePic();
        const newFeed = {
          id: Date.now(),
          user: {
            name: "Me",
            profilePic: randomImage,
            timeAgo: Date.now(),
          },
          emoji: getRandomEmoji(),
          message: postMessage,
        };

        localStorage.setItem(
          "FEEDS",
          JSON.stringify([newFeed, ...existingFeeds])
        );
        setPostMessage("");

        // dispatch event saying feed is updated
        window.dispatchEvent(new Event("feeds-updated"));
        editorRef.current?.commands.clearContent();
      } catch (err) {
        console.error("Failed to publish post: ", err);
      } finally {
        setIsPublishing(false);
      }
    }
  };

  const handleEditorChange = (content: string) => {
    console.log("text = ", content);
    setPostMessage(content);
  };

  const handleEditorReady = (editor: Editor) => {
    editorRef.current = editor;
  };

  return (
    <div className="p-1 bg-[#00000008] rounded-3xl">
      <div className="p-2 m-1 w-[412px] sm:w-[554px] bg-white max-w-[554px]  rounded-2xl shadow-md">
        <TextEditor
          content={postMessage}
          onChange={handleEditorChange}
          onEditorReady={handleEditorReady}
        />
        <div className="flex justify-between">
          <div className="flex gap-4">
            {actions?.map((action) => (
              <button
                key={action.label}
                className="hover:bg-gray-300 p-2 rounded-full hover:shadow-sm"
                onClick={alertNotImplemented}
              >
                <img
                  src={action.icon}
                  className="h-5 w-5"
                  alt={`${action.label}-icon`}
                />
              </button>
            ))}
          </div>
          <div>
            <button
              onClick={publishFeed}
              disabled={isPublishing}
              className="cursor-pointer hover:bg-gray-300 p-2 rounded-full hover:shadow-sm"
            >
              <img src={PublishIcon} className="h-5 w-5" alt="publish-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostFeedInputBox;
