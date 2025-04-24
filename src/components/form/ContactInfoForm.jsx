import { useState, useEffect } from "react";
import Address from "./contact-info-form/AddressForm";
import Email from "./contact-info-form/EmailForm";
import Phone from "./contact-info-form/PhoneForm";

export default function ContactInfoForm({ contactInfo, onSubmit }) {
  const [name, setName] = useState(contactInfo?.name || "");
  const [address, setAddress] = useState({
    street: contactInfo?.address?.street || "",
    city: contactInfo?.address?.city || "",
    state: contactInfo?.address?.state || "",
    zipCode: contactInfo?.address?.zipCode || "",
  });
  const [email, setEmail] = useState(contactInfo?.email || "");
  const [phone, setPhone] = useState(contactInfo?.phone || "");

  useEffect(() => {
    if (contactInfo) {
      setName(contactInfo.name || "");
      setAddress({
        street: contactInfo.address?.street || "",
        city: contactInfo.address?.city || "",
        state: contactInfo.address?.state || "",
        zipCode: contactInfo.address?.zipCode || "",
      });
      setEmail(contactInfo.email || "");
      setPhone(contactInfo.phone || "");
    }
  }, [contactInfo]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const onAddressChange = (event, key) => {
    setAddress({ ...address, [key]: event.target.value });
  };

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      name,
      address,
      email,
      phone,
    });
  };

  return (
    <section className="contact-info-form">
      <h3>Contact Information</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <Email email={email} onEmailChange={onEmailChange} />
        <Phone phone={phone} onPhoneChange={onPhoneChange} />
        <Address address={address} onAddressChange={onAddressChange} />
        <button type="submit">Save Contact Info</button>
      </form>
    </section>
  );
}
