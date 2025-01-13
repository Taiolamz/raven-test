interface HamburgerMenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const HamburgerMenu = ({ open, setOpen }: HamburgerMenuProps) => {
  return (
    <div className=" flex flex-col justify-center">
      <div className="relative py-3 sm:max-w-xl mx-auto">
        <nav>
          <button
            className="text-[#8D98AF]"
            onClick={() => setOpen(!open)}
          >
            {/* <span className="sr-only">Open main menu</span> */}
            <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                  open ? "rotate-45" : "-translate-y-1.5"
                }`}
              ></span>
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-3 bg-current transform transition duration-500 ease-in-out ${
                  open ? "opacity-0" : ""
                }`}
              ></span>
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                  open ? "-rotate-45" : "translate-y-1.5"
                }`}
              ></span>
            </div>
          </button>
        </nav>
      </div>
    </div>
  );
};

