import { useState } from "react";
import ContactInfo from "./form/ContactInfoForm.jsx";
import ExperienceForm from "./form/ExperienceForm.jsx";

export default function Form({ onSubmit }) {
  const [contactInfo, setContactInfoForm] = useState({
    name: "",
    address: {
      street: "",
      city: "",
      state: "",
    },
    email: "",
    phone: "",
  });

  const [schoolHistory, setSchoolHistory] = useState([]);
  const [workHistory, setWorkHistory] = useState([]);

  const handleContactInfoFormhange = (newContactInfo) => {
    setContactInfoForm(...contactInfo, newContactInfo);
  };
  const handleSchoolHistoryChange = (newSchoolHistory) => {
    setSchoolHistory(...schoolHistory, newSchoolHistory);
  };

  const handleWorkHistoryChange = (newWorkHistory) => {
    setWorkHistory(...workHistory, newWorkHistory);
  };

  return (
    <form onSubmit={onSubmit}>
      <ContactInfo
        contactInfo={contactInfo}
        onChange={handleContactInfoFormhange}
      />
      <ExperienceForm
        schoolHistory={schoolHistory}
        workHistory={workHistory}
        onSchoolHistoryChange={handleSchoolHistoryChange}
        onWorkHistoryChange={handleWorkHistoryChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
