export default function WorkExperience({ history }) {
  // return array of cards with info for each job
  return (
    <div>
      <h3>Work Experience</h3>
      {history.map((job) => (
        <div key={job.id} className="card">
          <h4>{job.companyName}</h4>
          <p>{job.title}</p>
          <p>{job.description}</p>
          <p>
            {job.dateRange.start} - {job.dateRange.end}
          </p>
        </div>
      ))}
    </div>
  );
}
