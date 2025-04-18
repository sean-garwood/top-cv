import { useState } from "react";
import { SOME_CV } from "../constants/data.js";
import ContactInfo from "./ContactInfo.jsx";
import Experience from "./Experience.jsx";
import Form from "./Form.jsx";

export default function CurriculumVitae({ initialCV = SOME_CV }) {
  const [cv, setCV] = useState(initialCV);
  const [editMode, setEditMode] = useState(true); // Start in edit mode

  // Initialize form state from initialCV
  const [contactInfo, setContactInfo] = useState(
    initialCV.contactInfo || {
      name: "",
      address: {
        street: "",
        city: "",
        state: "",
      },
      email: "",
      phone: "",
    }
  );

  const [schoolHistory, setSchoolHistory] = useState(
    initialCV.experience?.schoolHistory || []
  );
  const [workHistory, setWorkHistory] = useState(
    initialCV.experience?.workHistory || []
  );

  const handleFormSubmit = (newCV) => {
    setCV({
      contactInfo,
      experience: {
        schoolHistory,
        workHistory,
      },
    });
    setEditMode(false); // Switch to view mode after submission
  };

  const handleEditClick = () => {
    setEditMode(true);
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
    // Make sure we're getting a proper array or safely handle non-array inputs
    if (Array.isArray(newSchoolHistory)) {
      setSchoolHistory(newSchoolHistory);
    } else if (newSchoolHistory && typeof newSchoolHistory === "object") {
      // If receiving a single school entry, add it to the array
      setSchoolHistory((prev) => [...prev, newSchoolHistory]);
    }
  };

  const handleWorkHistoryChange = (newWorkHistory) => {
    // Make sure we're getting a proper array or safely handle non-array inputs
    if (Array.isArray(newWorkHistory)) {
      setWorkHistory(newWorkHistory);
    } else if (newWorkHistory && typeof newWorkHistory === "object") {
      // If receiving a single work entry, add it to the array
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
              Enter your information to the form below. Submit it to get a nice
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
          </div>
        </>
      )}
    </div>
  );
}
