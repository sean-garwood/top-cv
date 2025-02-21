import SchoolExperience from "./Experience/SchoolExperience.jsx";
import WorkExperience from "./Experience/WorkExperience.jsx";

export default function Experience({ schoolHistory, workHistory }) {
  return (
    <div>
      <h2>Experience</h2>
      <SchoolExperience history={schoolHistory} />
      <WorkExperience history={workHistory} />
    </div>
  );
}
