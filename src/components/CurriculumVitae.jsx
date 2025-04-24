import { useState } from "react";
import ContactInfo from "./ContactInfo.jsx";
import Experience from "./Experience.jsx";
import Form from "./Form.jsx";

const blankContactInfo = {
  name: "",
  address: {
    street: "",
    city: "",
    state: "",
    zipCode: "",
  },
  email: "",
  phone: "",
};

export default function CurriculumVitae() {
  const [cv, setCV] = useState();
  const [editMode, setEditMode] = useState(true);

  const [contactInfo, setContactInfo] = useState(blankContactInfo);

  const [schoolHistory, setSchoolHistory] = useState([]);
  const [workHistory, setWorkHistory] = useState([]);

  const handleFormSubmit = (newCV) => {
    setCV(newCV);
    setEditMode(false);
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleDeleteClick = () => {
    setEditMode(true);
    setContactInfo(blankContactInfo);
    setSchoolHistory([]);
    setWorkHistory([]);
  };

  const addOrChangeContactInfo = (newContactInfo) => {
    setContactInfo((prev) => ({
      ...prev,
      ...newContactInfo,
      address: {
        ...prev.address,
        ...(newContactInfo.address || {}),
      },
    }));
  };

  const handleSchoolHistoryChange = (newSchoolHistory) => {
    if (Array.isArray(newSchoolHistory)) {
      setSchoolHistory(newSchoolHistory);
    } else if (newSchoolHistory && typeof newSchoolHistory === "object") {
      setSchoolHistory((prev) => [...prev, newSchoolHistory]);
    }
  };

  const handleWorkHistoryChange = (newWorkHistory) => {
    if (Array.isArray(newWorkHistory)) {
      setWorkHistory(newWorkHistory);
    } else if (newWorkHistory && typeof newWorkHistory === "object") {
      setWorkHistory((prev) => [...prev, newWorkHistory]);
    }
  };

  return (
    <div className="curriculum-vitae">
      <h1>CV Application</h1>

      {editMode ? (
        <>
          <p id="instructions">
            <i>
              Enter your information in the form below. Submit it to get a nice
              HTML resume!
            </i>
          </p>
          <Form
            onSubmit={handleFormSubmit}
            contactInfo={contactInfo}
            addOrChangeContactInfo={addOrChangeContactInfo}
            schoolHistory={schoolHistory}
            workHistory={workHistory}
            handleSchoolHistoryChange={handleSchoolHistoryChange}
            handleWorkHistoryChange={handleWorkHistoryChange}
          />
        </>
      ) : (
        <>
          <div className="cv-preview">
            <h2>CV Preview</h2>
            <ContactInfo contactInfo={contactInfo} />
            <Experience
              workHistory={workHistory}
              schoolHistory={schoolHistory}
            />
            <button className="edit-button" onClick={handleEditClick}>
              Edit CV
            </button>
            <button className="delete-button" onClick={handleDeleteClick}>
              Delete CV
            </button>
          </div>
        </>
      )}
    </div>
  );
}
