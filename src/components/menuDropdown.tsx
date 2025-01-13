import { useNavigate } from "react-router";
import { cn } from "../lib/utils";

interface MenuItem {
  path: string;
  label: string;
}

interface MenuDropdownProps {
  open: boolean;
  content: MenuItem[];
}

export const MenuDropdown: React.FC<MenuDropdownProps> = ({ content, open }) => {
  const navigate = useNavigate();
  
  return (
    <section
      className={cn(
        "right-3 top-16 z-[999] bg-[#1C2127] transition-all duration-300 ease-in-out shadow-lg absolute w-[214px] rounded-[12px] p-[8px] border border-[#373B3F]",
        {
          "h-[248px] opacity-100": open,
          "h-0 opacity-0": !open
        }
      )}
    >
      <div className="flex flex-col gap-8 px-2 py-3 text-base">
        {content.map((chi: MenuItem, idx: number) => (
          <p key={idx} onClick={() => navigate(chi.path)} className="text-white font-sans ">
            {chi.label}
          </p>
        ))}
      </div>
    </section>
  );
};
