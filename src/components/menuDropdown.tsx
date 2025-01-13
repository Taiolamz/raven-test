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

  const location = window.location.pathname;

  return (
    <section
      className={cn(
        "right-3 top-16 z-[999] bg-[#1C2127] transition-all duration-300 ease-in-out shadow-lg absolute w-[214px] rounded-[12px] border border-[#373B3F] overflow-hidden",
        {
          "max-h-[248px] opacity-100": open,
          "max-h-0 opacity-0": !open
        }
      )}
    >
      <div className="flex flex-col text-base">
        {content.map((chi: MenuItem, idx: number) => (
          <div key={idx} className={`${location.includes(chi.path) && "bg-[#252A30]"}  px-3 py-4 `}>
            <p
              onClick={() => navigate(chi.path)}
              className="text-white font-sans cursor-pointer hover:text-gray-300"
            >
              {chi.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
