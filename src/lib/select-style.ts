export const customSelectStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      outline: "none",
      boxShadow: "none",
      padding: ".5rem",
      height: ".1rem",
      paddingTop: "unset",
      borderRadius: ".7rem",
      backgroundColor:"",
      cursor: "pointer",
      borderColor: state.selectProps.value
        ? "var(--blue-color)"
        : (state.selectProps.value && window.location.pathname === "/profile") ||
          window.location.pathname === "/orders" ||
          window.location.pathname === "/promotion"
        ? "var(--blue-color)"
        : provided.borderColor,
      "&:hover": {
        borderColor: state.selectProps.value
          ? "var(--blue-color)"
          : provided.borderColor,
      },
      placeholder: (provided: any) => ({
        ...provided,
        color: "red",
      }),
      "&:focus": {
        border: "transparent",
      },
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    dropdownIndicator: (state: any, provided: any) => ({
      ...provided,
      color:
        // (window.location.pathname === "/profile") ||
        window.location.pathname === "/orders" ||
        window.location.pathname === "/promotion"
          ? "var(--blue-color)"
          : "var(--border-color)",
    }),
  
    singleValue: (provided: any, state: any) => ({
      ...provided,
      color:
        // window.location.pathname === "/profile" ||
        window.location.pathname === "/orders" ||
        window.location.pathname === "/promotion"
          ? "var(--blue-color)"
          : "",
      fontWeight:500;
    }),
    option: (base: any, state: any) => ({
      ...base,
      color: state.isSelected ? "var(--white-color)" : "var(--black-color)",
      cursor: "pointer",
      backgroundColor: state.isSelected ? "var(--blue-color)" : "white",
    }),
  };