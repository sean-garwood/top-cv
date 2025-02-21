import "./App.css";
import ContactInfo from "./components/ContactInfo";

export default function App() {
  return (
    <>
      <h1>CV</h1>
      <p id="instructions">
        <i>
          Enter your information to the form below. Submit it to get a nice HTML
          resume!
        </i>
      </p>
      <ContactInfo />
    </>
  );
}
