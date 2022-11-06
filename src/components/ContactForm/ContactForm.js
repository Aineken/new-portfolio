import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useSpring, animated } from "react-spring";
import {
  Background,
  ModalWrapper,
  ModalImg,
  ModalContent,
  CloseModalButton,
} from "./ContactFormStyled";

function ContactForm({ showModal, setShowModal }) {
  const form = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (form.current === e.target) {
      setShowModal(false);
    }
  };

  const VAR1 = "service_jj3zv1p";
  const VAR2 = "template_7dfkr36";
  const VAR3 = "m3FaR6dW3c60Jtd-S";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(VAR1, VAR2, form.current, VAR3).then(
      (result) => {
        console.log(result.text);
        console.log("Your email has been sent successfully");
      },
      (error) => {
        console.log(error.text);
        console.log("Your email has not been send");
      }
    );
  };

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={form}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalImg src={require("./modal.jpg")} alt="camera" />
              <ModalContent>
                <form ref={form} onSubmit={sendEmail}>
                  <label>Name</label>
                  <input type="text" name="user_name" />
                  <label>Email</label>
                  <input type="email" name="user_email" />
                  <label>Message</label>
                  <textarea name="message" />
                  <input type="submit" value="Send" />
                </form>
              </ModalContent>
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
}

export default ContactForm;
