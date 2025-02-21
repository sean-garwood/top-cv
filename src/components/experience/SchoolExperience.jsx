export default function SchoolExperience({ history }) {
  return (
    <div>
      <h3>School Experience</h3>
      {/* set up cards that hold info for everything in history array */}
      {history.map((school) => (
        <div key={school.id} className="card">
          <h4>{school.name}</h4>
          <p>
            {school.areasOfStudy.map((area) => (
              <span key={area.id}>{area.area}</span>
            ))}
          </p>
          <p>{school.diploma}</p>
          <p>
            {school.dateRange.start} - {school.dateRange.end}
          </p>
        </div>
      ))}
    </div>
  );
}
