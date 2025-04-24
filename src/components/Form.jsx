import ContactInfoForm from "./form/ContactInfoForm.jsx";
import ExperienceForm from "./form/ExperienceForm.jsx";

export default function Form({
  onSubmit,
  contactInfo,
  addOrChangeContactInfo,
  schoolHistory,
  workHistory,
  handleSchoolHistoryChange,
  handleWorkHistoryChange,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const cv = {
      contactInfo,
      experience: {
        schoolHistory,
        workHistory,
      },
    };
    onSubmit(cv);
  };

  return (
    <div className="cv-form">
      <button className="submit-cv-button" onClick={handleSubmit}>
        Submit CV
      </button>
      <ContactInfoForm
        contactInfo={contactInfo}
        onSubmit={addOrChangeContactInfo}
      />
      <ExperienceForm
        schoolHistory={schoolHistory}
        workHistory={workHistory}
        onSchoolHistoryChange={handleSchoolHistoryChange}
        onWorkHistoryChange={handleWorkHistoryChange}
      />
    </div>
  );
}
