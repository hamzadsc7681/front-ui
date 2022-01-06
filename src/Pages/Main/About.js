import React from "react";
import './styles.css'

function About() {
  return (
    <>
      <div className="container-fluid pt-5 pb-5 text-center">
          <div className="container">
        <h3 className="pt-5 pb-3 about_heading">About Us</h3>
        <p className="pb-5 about_para">
          We will help you access the treatment you need when and where it is
          convenient for you. Private prescriptions can be written online by our
          doctors without the need to see them in person. We ship your medicines
          in plain packaging to your chosen address in the UK <br />
          <br /> In addition to respecting your privacy and understanding the
          importance of your health, you can count us for a safe, reliable and
          confidential service at all times. The trust of our patients is a
          source of pride for us. As a health care providers, we are always
          happy to hear from our patients. Get in touch with us via phone,
          email, or social media to share your feedback or if you need any
          assistance.
        </p>
      </div>
      </div>
    </>
  );
}

export default About;
