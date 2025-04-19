import React from "react";

interface AddEventButtonProps {
  onClick: () => void;
}

export const AddEventButton: React.FC<AddEventButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="rounded bg-[#6B047C] gap-2.5 text-sm text-white font-medium tracking-[-0.28px] leading-[1.3] px-2.5 py-2 hover:bg-[#5A0369] transition-colors"
    >
      Add new event
    </button>
  );
};
