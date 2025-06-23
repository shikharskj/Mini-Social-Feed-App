import { Editor } from "@tiptap/react";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Heading1,
  Heading2,
  Heading3,
  Highlighter,
  Italic,
  List,
  ListOrdered,
  Strikethrough,
} from "lucide-react";
import DeleteIcon from "../../../../assets/trash.svg";

const MenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null;
  }

  const Options = [
    {
      icon: <Heading1 className="size-4" />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      preesed: editor.isActive("heading", { level: 1 }),
    },
    {
      icon: <Heading2 className="size-4" />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      preesed: editor.isActive("heading", { level: 2 }),
    },
    {
      icon: <Heading3 className="size-4" />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      preesed: editor.isActive("heading", { level: 3 }),
    },
    {
      icon: <Bold className="size-4" />,
      onClick: () => editor.chain().focus().toggleBold().run(),
      preesed: editor.isActive("bold"),
    },
    {
      icon: <Italic className="size-4" />,
      onClick: () => editor.chain().focus().toggleItalic().run(),
      preesed: editor.isActive("italic"),
    },
    {
      icon: <Strikethrough className="size-4" />,
      onClick: () => editor.chain().focus().toggleStrike().run(),
      preesed: editor.isActive("strike"),
    },
    {
      icon: <AlignLeft className="size-4" />,
      onClick: () => editor.chain().focus().setTextAlign("left").run(),
      preesed: editor.isActive({ textAlign: "left" }),
    },
    {
      icon: <AlignCenter className="size-4" />,
      onClick: () => editor.chain().focus().setTextAlign("center").run(),
      preesed: editor.isActive({ textAlign: "center" }),
    },
    {
      icon: <AlignRight className="size-4" />,
      onClick: () => editor.chain().focus().setTextAlign("right").run(),
      preesed: editor.isActive({ textAlign: "right" }),
    },
    {
      icon: <List className="size-4" />,
      onClick: () => editor.chain().focus().toggleBulletList().run(),
      preesed: editor.isActive("bulletList"),
    },
    {
      icon: <ListOrdered className="size-4" />,
      onClick: () => editor.chain().focus().toggleOrderedList().run(),
      preesed: editor.isActive("orderedList"),
    },
    {
      icon: <Highlighter className="size-4" />,
      onClick: () => editor.chain().focus().toggleHighlight().run(),
      preesed: editor.isActive("highlight"),
    },
  ];

  const clearEditorText = () => {
    editor.commands.clearContent();
  };

  const isClearDisabled = !editor.getText().length;

  return (
    <div className="flex w-full justify-between items-start">
      <div className="hidden sm:flex gap-1 rounded-md p-1 mb-1 space-x-2 z-50">
        {Options.map((option, index) => (
          <div
            key={index}
            onClick={option.onClick}
            className={`rounded-sm p-1 cursor-pointer ${
              option.preesed ? "bg-gray-300" : "bg-slate-50"
            }`}
          >
            <button>{option.icon}</button>
          </div>
        ))}
      </div>
      {/* Mobile view start  */}
      <div className="flex flex-col w-full justify-between items-start">
        <div className="flex sm:hidden gap-1 rounded-md p-1 mb-1 space-x-2 z-50">
          {Options?.slice(0, 6)?.map((option, index) => (
            <div
              key={index}
              onClick={option.onClick}
              className={`rounded-sm py-0.5 px-3 cursor-pointer ${
                option.preesed ? "bg-gray-300" : "bg-slate-50"
              }`}
            >
              <button>{option.icon}</button>
            </div>
          ))}
        </div>
        <div className="flex sm:hidden gap-1 rounded-md p-1 mb-1 space-x-2 z-50">
          {Options?.slice(6, 12)?.map((option, index) => (
            <div
              key={index}
              onClick={option.onClick}
              className={`rounded-sm py-0.5 px-3  cursor-pointer ${
                option.preesed ? "bg-gray-300" : "bg-slate-50"
              }`}
            >
              <button>{option.icon}</button>
            </div>
          ))}
        </div>
      </div>
      {/* Mobile view end  */}
      <div>
        <button
          disabled={isClearDisabled}
          onClick={clearEditorText}
          className={`flex items-center justify-center w-9 h-9 ${
            isClearDisabled
              ? "bg-slate-200 text-neutral-400"
              : "bg-red-200 cursor-pointer"
          } rounded-xl`}
        >
          <img src={DeleteIcon} alt="delete-icon" />
        </button>
      </div>
    </div>
  );
};

export default MenuBar;
