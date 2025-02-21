// just a buncha junk
const SOME_CV = {
  contactInfo: {
    name: "foo bar",
    address: {
      street: "123 baz lane",
      city: "bat",
      state: "RB",
    },
    email: "foo@bar.com",
    phone: "1234567890",
  },
  experience: {
    schoolHistory: [
      {
        id: 0,
        name: "university of seless",
        areasOfStudy: [
          { id: 0, area: "philosophy" }, // LOL. Thanks, Copi!
          { id: 1, area: "theater" },
        ],
        diploma: "Bachelors",
        dateRange: { start: "1/1/2000", end: "1/1/2004" },
      },
      {
        id: 1,
        name: "college of the unimportant",
        areasOfStudy: [
          { id: 0, area: "underwater basket weaving" },
          { id: 1, area: "advanced knitting" },
        ],
        diploma: "Masters",
        dateRange: { start: "1/1/2005", end: "1/1/2007" },
      },
      {
        id: 2,
        name: "school of the irrelevant",
        areasOfStudy: [
          { id: 0, area: "underwater basket weaving" },
          { id: 1, area: "advanced knitting" },
        ],
        diploma: "Doctorate",
        dateRange: { start: "1/1/2008", end: "1/1/2010" },
      },
    ],
    workHistory: [
      {
        id: 0,
        companyName: "the circus",
        title: "janitor",
        description: "cleaned up messes",
        dateRange: {
          start: "1/1/2011",
          end: "1/1/2012",
        },
      },
      {
        id: 1,
        companyName: "the circus",
        title: "clown",
        description: "made people laugh",
        dateRange: {
          start: "1/1/2013",
          end: "1/1/2014",
        },
      },
      {
        id: 2,
        companyName: "the circus",
        title: "ringmaster",
        description: "whipped 'em into shape",
        dateRange: {
          start: "1/1/2015",
          end: "1/1/2016",
        },
      },
    ], // love it
  },
};

export { SOME_CV };
