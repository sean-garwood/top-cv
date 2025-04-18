export default function SchoolExperience({ history }) {
  if (!Array.isArray(history) || history.length === 0) {
    return <div>No school history provided.</div>;
  }
  return (
    <div>
      {history.map((school) => (
        <div key={school.id || school.name}>
          <h4>{school.name}</h4>
          <p>{school.diploma}</p>
          <p>
            {school.dateRange?.start} - {school.dateRange?.end}
          </p>
          <ul>
            {(Array.isArray(school.areasOfStudy)
              ? school.areasOfStudy
              : []
            ).map((area, idx) => (
              <li key={area.id || idx}>{area.area}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
