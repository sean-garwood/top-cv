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
    // Compose the CV object from the current state
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
    <form onSubmit={handleSubmit}>
      <h2>CV Form</h2>
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
      <button type="submit">Submit</button>
    </form>
  );
}
