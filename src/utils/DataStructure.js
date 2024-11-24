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
      startYear: "2020",
      endYear: "2022",
      location: "Citytown, ST",
    },
    {
      id: 2,
      school: "Townville Community College",
      degree: "Associates",
      fieldOfStudy: "Smart Things",
      startYear: "2018",
      endYear: "2020",
      location: "Townville, ST",
    }
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
    {
      id: 2,
      company: "Citytown Pizza",
      position: "Pizza Maker",
      startDate: "2018",
      endDate: "2022",
      responsibilities: [
        {
          id: 1,
          text: "Made pizza",
        },
        {
          id: 2,
          text: "Delivered pizza",
        },
        {
          id: 3,
          text: "",
        },
      ],
      location: "Citytown, ST",
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
