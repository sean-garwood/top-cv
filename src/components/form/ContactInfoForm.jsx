import { useState } from "react";
import Address from "./contact-info-form/AddressForm";
import Email from "./contact-info-form/EmailForm";
import Phone from "./contact-info-form/PhoneForm";

export default function ContactInfoForm({ contactInfo, onInfoChange }) {
  const [address, setAddress] = useState({
    street: contactInfo.address.street,
    city: contactInfo.address.city,
    state: contactInfo.address.state,
  });
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const onAddressChange = (event, key) => {
    setAddress({ ...address, [key]: event.target.value });
  };

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPhoneChange = (event) => {
    setPhone(event.target.value);
  };

  return (
    <section>
      <form id="contactInfoForm">
        <fieldset>
          <legend>Contact Information</legend>
          <Address address={address} onAddressChange={onAddressChange} />
          <Email email={email} onEmailChange={onEmailChange} />
          <Phone phone={phone} onPhoneChange={onPhoneChange} />
        </fieldset>
      </form>
      <button
        type="submit"
        form="contactInfoForm"
        onSubmit={(e) => {
          e.preventDefault();
          onInfoChange({ address, email, phone });
        }} // TODO: implement handler to output the form data in HTML
      >
        Submit
      </button>
    </section>
  );
}
