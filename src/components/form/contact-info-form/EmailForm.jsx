export default function Email({ email, onEmailChange }) {
  return (
    <div>
      <label>Email:</label>
      <input type="email" value={email} onChange={onEmailChange} />
    </div>
  );
}
