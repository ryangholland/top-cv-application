const defaultUserData = {
  personalDetails: {
    name: "John Smith",
    email: "jsmith@email.com",
    phone: "(555) 555-5555",
    address: "1234 Street Ln.",
  },

  education: [
    {
      id: 1,
      school: "Citytown University",
      degree: "Bachelors",
      fieldOfStudy: "Nerdy Stuff",
      startYear: "2018",
      endYear: "2022",
      location: "Citytown, ST",
    },
  ],
  workExperience: [
    {
      id: 1,
      company: "ACME Industries",
      position: "Widget Maker",
      startDate: "07/2022",
      endDate: "Present",
      responsibilities: [
        {
          id: 1,
          text: "Made widgets",
        },
        {
          id: 2,
          text: "Performed widget quality control",
        },
        {
          id: 3,
          text: "Lead daily widget meetings",
        },
      ],
      location: "Townville, ST",
    },
  ],
};

const emptyUserData = {
  personalDetails: {
    name: "",
    email: "",
    phone: "",
    address: "",
  },

  education: [],
  workExperience: [],
};

export { defaultUserData, emptyUserData };
