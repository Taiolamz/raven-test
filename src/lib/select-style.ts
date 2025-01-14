export const customSelectStyles = {
    control: (provided: any)  => ({
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
    dropdownIndicator: (provided: any) => ({
      ...provided,
      color:"white",
    }),
  
    singleValue: (provided: any)  => ({
      ...provided,
      color:"white",
      fontWeight:500,
    }),
    option: (base: any)  => ({
      ...base,
      color:"white",
      cursor: "pointer",
      backgroundColor: "#353945"
    }),
  };