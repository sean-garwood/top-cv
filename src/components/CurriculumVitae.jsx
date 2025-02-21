import { SOME_CV } from "../constants/data.js";
import ContactInfo from "./ContactInfo.jsx";
import Experience from "./Experience.jsx";
// import { useState } from "react";

export default function CurriculumVitae({ cirriculumVitae = SOME_CV }) {
  // const [cirriculumVitae, setCirriculmVitae] = useState(cirriculumVitae);
  const workHistory = cirriculumVitae.experience.workHistory;
  const schoolHistory = cirriculumVitae.experience.schoolHistory;
  return (
    <div>
      <h1>CV</h1>
      <p id="instructions">
        <i>
          Enter your information to the form below. Submit it to get a nice HTML
          resume!
        </i>
      </p>
      <ContactInfo contactInfo={cirriculumVitae.contactInfo} />
      <Experience workHistory={workHistory} schoolHistory={schoolHistory} />
    </div>
  );
}
