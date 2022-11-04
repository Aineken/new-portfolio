import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();

  const VAR1 = process.env.VAR1;
  const VAR2 = process.env.VAR2;
  const VAR3 = process.env.VAR3;
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(VAR1, VAR2, form.current, VAR3).then(
      (result) => {
        console.log(result.text);
        console.log("Your email has been sent successfully");
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}
