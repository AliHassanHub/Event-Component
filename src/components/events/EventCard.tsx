import React from "react";

interface EventCardProps {
  image: string;
  status: string;
  title: string;
  date: string;
  time: string;
  onPreview: () => void;
  onRegister: () => void;
}

export const EventCard: React.FC<EventCardProps> = ({
  image,
  status,
  title,
  date,
  time,
  onPreview,
  onRegister,
}) => {
  return (
    <article className="bg-white self-stretch min-w-60 grow shrink w-[342px] my-auto pt-4 pb-6 px-4 rounded-lg max-md:max-w-full">
      <div className="rounded w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="aspect-[2.17] object-contain w-full"
        />
      </div>
      <div className="w-full font-medium mt-2">
        <div className="w-full">
          <div className="w-full">
            <div className="text-[#808080] text-[10px] leading-[1.3] tracking-[-0.2px]">
              {status}
            </div>
            <h3 className="text-[#1A011E] text-base tracking-[-0.32px] mt-1">
              {title}
            </h3>
          </div>
          <div className="flex w-full items-center gap-[40px_100px] leading-[1.3] justify-between mt-2">
            <div className="self-stretch w-[111px] my-auto">
              <div className="text-[#808080] text-xs tracking-[-0.24px]">
                Date
              </div>
              <div className="text-[#1A011E] text-sm tracking-[-0.28px]">
                {date}
              </div>
            </div>
            <div className="self-stretch flex flex-col items-stretch whitespace-nowrap text-right justify-center my-auto">
              <div className="text-[#808080] text-xs tracking-[-0.24px]">
                Time
              </div>
              <div className="text-[#1A011E] text-sm tracking-[-0.28px]">
                {time}
              </div>
            </div>
          </div>
        </div>
        <div className="flex min-h-[34px] w-full items-center gap-4 text-sm whitespace-nowrap tracking-[-0.28px] leading-[1.3] mt-6">
          <button
            onClick={onPreview}
            className="self-stretch rounded bg-white border border-[#6B047C] gap-2.5 text-[#6B047C] flex-1 shrink basis-[0%] my-auto px-2.5 py-2 hover:bg-[#6B047C] hover:text-white transition-colors"
          >
            Preview
          </button>
          <button
            onClick={onRegister}
            className="self-stretch rounded bg-[#6B047C] gap-2.5 text-white flex-1 shrink basis-[0%] my-auto px-2.5 py-2 hover:bg-[#5A0369] transition-colors"
          >
            Register
          </button>
        </div>
      </div>
    </article>
  );
};
