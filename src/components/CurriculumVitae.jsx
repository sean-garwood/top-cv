import { useState } from "react";
import { SOME_CV } from "../constants/data.js";
import ContactInfo from "./ContactInfo.jsx";
import Experience from "./Experience.jsx";
import Form from "./Form.jsx";

export default function CurriculumVitae({ initialCV = SOME_CV }) {
  const [cv, setCV] = useState(initialCV);

  const handleFormSubmit = (newCV) => {
    setCV(newCV);
  };

  return (
    <div>
      <h1>CV</h1>
      <p id="instructions">
        <i>
          Enter your information to the form below. Submit it to get a nice HTML
          resume!
        </i>
      </p>
      <Form onSubmit={handleFormSubmit} />
      <ContactInfo contactInfo={cv.contactInfo} />
      <Experience
        workHistory={cv.experience.workHistory}
        schoolHistory={cv.experience.schoolHistory}
      />
    </div>
  );
}
