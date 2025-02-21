function Street({ value, onChange }) {
  return (
    <div>
      <label>Street:</label>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
}

function City({ value, onChange }) {
  return (
    <div>
      <label>City:</label>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
}

function ZipCode({ value, onChange }) {
  return (
    <div>
      <label>Zip Code:</label>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
}

export default function Address({ address, onAddressChange }) {
  return (
    <div>
      <label>Address</label>
      <Street
        value={address.street}
        onChange={(e) => onAddressChange(e, "street")}
      />
      <City value={address.city} onChange={(e) => onAddressChange(e, "city")} />
      <ZipCode
        value={address.zipCode}
        onChange={(e) => onAddressChange(e, "zipCode")}
      />
    </div>
  );
}
