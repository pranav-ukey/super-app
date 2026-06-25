import { useStore } from "../store/useStore";

const NotesWidget = () => {
  const notes = useStore((state) => state.notes);
  const setNotes = useStore((state) => state.setNotes);

  return (
    <div className="bg-[#F1C75B] rounded-[20px] p-6 h-full flex flex-col">
      <h2 className="text-3xl font-bold mb-5">
        All notes
      </h2>

      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Write your notes..."
        className="
          flex-1
          w-full
          bg-transparent
          resize-none
          outline-none
          text-black
          leading-7
          overflow-y-auto
          pr-2
        "
      />
    </div>
  );
};

export default NotesWidget;