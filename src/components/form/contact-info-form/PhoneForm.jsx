export default function Phone({ phone, onPhoneChange }) {
  return (
    <div>
      <label>Phone:</label>
      <input type="tel" value={phone} onChange={onPhoneChange} />
    </div>
  );
}
