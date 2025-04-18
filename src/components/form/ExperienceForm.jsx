import { useState } from "react";

export default function ExperienceForm({
  schoolHistory,
  workHistory,
  onSchoolHistoryChange,
  onWorkHistoryChange,
}) {
  const [newSchool, setNewSchool] = useState({
    name: "",
    diploma: "",
    dateRange: { start: "", end: "" },
    areasOfStudy: [], // Initialize as array instead of string
  });

  const [newWork, setNewWork] = useState({
    companyName: "",
    title: "",
    description: "",
    dateRange: { start: "", end: "" },
  });

  const handleNewSchoolChange = (event) => {
    const { name, value } = event.target;
    if (name === "areasOfStudy") {
      // Convert comma-separated string to array of objects
      const areas = value.split(",").map((area) => ({ area: area.trim() }));
      setNewSchool({ ...newSchool, areasOfStudy: areas });
    } else {
      setNewSchool({ ...newSchool, [name]: value });
    }
  };

  const handleNewWorkChange = (event) => {
    const { name, value } = event.target;
    setNewWork({ ...newWork, [name]: value });
  };

  const addSchool = () => {
    // Ensure areasOfStudy is an array of objects
    const schoolToAdd = {
      ...newSchool,
      areasOfStudy: Array.isArray(newSchool.areasOfStudy)
        ? newSchool.areasOfStudy
        : newSchool.areasOfStudy
            .split(",")
            .map((area) => ({ area: area.trim() })),
    };

    onSchoolHistoryChange([...schoolHistory, schoolToAdd]);
    setNewSchool({
      name: "",
      diploma: "",
      dateRange: { start: "", end: "" },
      areasOfStudy: [], // Reset as array
    });
  };

  const addWork = () => {
    onWorkHistoryChange([...workHistory, newWork]);
    setNewWork({
      companyName: "",
      title: "",
      description: "",
      dateRange: { start: "", end: "" },
    });
  };

  return (
    <fieldset>
      <legend>Experience</legend>
      <div>
        <h3>School History</h3>
        {schoolHistory.map((school, index) => (
          <div key={index}>
            <p>{school.name}</p>
            <p>{school.diploma}</p>
            <p>
              {school.dateRange.start} - {school.dateRange.end}
            </p>
            <p>
              {Array.isArray(school.areasOfStudy)
                ? school.areasOfStudy.map((area) => area.area).join(", ")
                : school.areasOfStudy}
            </p>
          </div>
        ))}
        <input
          type="text"
          name="name"
          value={newSchool.name}
          onChange={handleNewSchoolChange}
          placeholder="School Name"
        />
        <input
          type="text"
          name="diploma"
          value={newSchool.diploma}
          onChange={handleNewSchoolChange}
          placeholder="Diploma"
        />
        <input
          type="date"
          name="start"
          value={newSchool.dateRange.start}
          onChange={(e) =>
            setNewSchool({
              ...newSchool,
              dateRange: { ...newSchool.dateRange, start: e.target.value },
            })
          }
        />
        <input
          type="date"
          name="end"
          value={newSchool.dateRange.end}
          onChange={(e) =>
            setNewSchool({
              ...newSchool,
              dateRange: { ...newSchool.dateRange, end: e.target.value },
            })
          }
        />
        <input
          type="text"
          name="areasOfStudy"
          value={
            Array.isArray(newSchool.areasOfStudy)
              ? newSchool.areasOfStudy.map((area) => area.area).join(", ")
              : newSchool.areasOfStudy
          }
          onChange={handleNewSchoolChange}
          placeholder="Areas of Study (comma separated)"
        />
        <button type="button" onClick={addSchool}>
          Add School
        </button>
      </div>
      <div>
        <h3>Work History</h3>
        {workHistory.map((work, index) => (
          <div key={index}>
            <p>{work.companyName}</p>
            <p>{work.title}</p>
            <p>
              {work.dateRange.start} - {work.dateRange.end}
            </p>
            <p>{work.description}</p>
          </div>
        ))}
        <input
          type="text"
          name="companyName"
          value={newWork.companyName}
          onChange={handleNewWorkChange}
          placeholder="Company Name"
        />
        <input
          type="text"
          name="title"
          value={newWork.title}
          onChange={handleNewWorkChange}
          placeholder="Title"
        />
        <input
          type="date"
          name="start"
          value={newWork.dateRange.start}
          onChange={(e) =>
            setNewWork({
              ...newWork,
              dateRange: { ...newWork.dateRange, start: e.target.value },
            })
          }
        />
        <input
          type="date"
          name="end"
          value={newWork.dateRange.end}
          onChange={(e) =>
            setNewWork({
              ...newWork,
              dateRange: { ...newWork.dateRange, end: e.target.value },
            })
          }
        />
        <input
          type="text"
          name="description"
          value={newWork.description}
          onChange={handleNewWorkChange}
          placeholder="Description"
        />
        <button type="button" onClick={addWork}>
          Add Work
        </button>
      </div>
    </fieldset>
  );
}
