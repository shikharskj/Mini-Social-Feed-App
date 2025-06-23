import { useEffect } from "react";
import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import MenuBar from "./components/MenuBar";

type TextEditorProps = {
  content: string;
  onChange: (econtent: string) => void;
  onEditorReady: (editor: Editor) => void;
};

export default function TextEditor({
  content,
  onChange,
  onEditorReady,
}: TextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          HTMLAttributes: {
            class: "list-disc ml-3",
          },
        },
        orderedList: {
          HTMLAttributes: {
            class: "list-decimal ml-3",
          },
        },
      }),
      Placeholder.configure({
        placeholder: "How are you feeling today?",
        emptyEditorClass:
          "text-gray-400 before:content-[attr(data-placeholder)]",
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight,
    ],
    content: content,
    editorProps: {
      attributes: {
        class:
          "min-h-[100px] max-h-[180px] overflow-y-auto  border-0 rounded-md outline-none bg-slate-50 p-2 px-4 text-sm",
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  // Pass the editor instance to parent when ready
  useEffect(() => {
    if (editor && onEditorReady) {
      onEditorReady(editor);
    }
  }, [editor, onEditorReady]);

  if (!editor) return null;

  return (
    <div className="bg-white border-0 p-1">
      <MenuBar editor={editor} />
      {/* Editor */}
      <div className="rounded-md min-h-[100px] p-2">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
