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

function State({ value, onChange }) {
  return (
    <div>
      <label>State:</label>
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
      <h3>Address</h3>
      <Street
        value={address.street}
        onChange={(e) => onAddressChange(e, "street")}
      />
      <City value={address.city} onChange={(e) => onAddressChange(e, "city")} />
      <State
        value={address.state}
        onChange={(e) => onAddressChange(e, "state")}
      />
      <ZipCode
        value={address.zipCode}
        onChange={(e) => onAddressChange(e, "zipCode")}
      />
    </div>
  );
}
