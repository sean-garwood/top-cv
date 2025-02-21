export default function ContactInfo({ contactInfo }) {
  return (
    <section>
      <h2>Contact Information</h2>
      <p>
        <strong>Name:</strong> {contactInfo.name}
      </p>
      <p>
        <strong>Address:</strong> {contactInfo.address.street},{" "}
        {contactInfo.address.city}, {contactInfo.address.state}
      </p>
      <p>
        <strong>Email:</strong> {contactInfo.email}
      </p>
      <p>
        <strong>Phone:</strong> {contactInfo.phone}
      </p>
    </section>
  );
}
