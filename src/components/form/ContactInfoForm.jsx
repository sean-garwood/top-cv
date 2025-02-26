import { useState } from "react";
import Address from "./contact-info-form/AddressForm";
import Email from "./contact-info-form/EmailForm";
import Phone from "./contact-info-form/PhoneForm";

export default function ContactInfoForm({ contactInfo }) {
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
      <Address address={address} onAddressChange={onAddressChange} />
      <Email email={email} onEmailChange={onEmailChange} />
      <Phone phone={phone} onPhoneChange={onPhoneChange} />
    </section>
  );
}
