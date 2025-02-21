import { useState } from "react";
import Address from "./ContactInfo/Address";
import Email from "./ContactInfo/Email";
import Phone from "./ContactInfo/Phone";

export default function ContactInfo() {
  const [address, setAddress] = useState({
    street: "",
    city: "",
    zipCode: "",
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
        onSubmit={(e) => e.preventDefault()} // TODO: implement handler to output the form data in HTML
      >
        Submit
      </button>
    </section>
  );
}
