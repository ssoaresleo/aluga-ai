import { BedSingle, HandPlatter, Hotel, TreePalm } from "lucide-react";

export const StayFilter = () => {
  return (
    <div className="border-b border-zinc-800 py-4">
      <div className="flex items-center text-zinc-300 gap-2 container mx-auto">
        <div className="flex items-center gap-1 px-3 py-[6px] bg-zinc-800 rounded-full">
          <Hotel className="size-4" />
          <a href="#" className="font-medium text-sm">
            Hoteis
          </a>
        </div>
        <div className="flex items-center gap-1 px-3 py-[6px]">
          <BedSingle className="size-4" />
          <a href="#" className="font-medium text-sm">
            Pousadas
          </a>
        </div>
        <div className="flex items-center gap-1 px-3 py-[6px]">
          <HandPlatter className="size-4" />
          <a href="#" className="font-medium text-sm">
            Chalés
          </a>
        </div>
        <div className="flex items-center gap-1 px-3 py-[6px]">
          <TreePalm className="size-4" />
          <a href="#" className="font-medium text-sm">
            Resorts
          </a>
        </div>
      </div>
    </div>
  );
};
