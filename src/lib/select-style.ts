export const customSelectStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      outline: "none",
      boxShadow: "none",
      padding: ".5rem",
      height: ".1rem",
      paddingTop: "unset",
      borderRadius: ".7rem",
      backgroundColor:"#353945",
      color:"white",
      cursor: "pointer",
      borderColor:"",
      placeholder: (provided: any) => ({
        ...provided,
        color: "white",
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
      color:"",
    }),
  
    singleValue: (provided: any, state: any) => ({
      ...provided,
      color:"#353945",
      fontWeight:500,
    }),
    option: (base: any, state: any) => ({
      ...base,
      color:"white",
      cursor: "pointer",
      backgroundColor: "#353945"
    }),
  };