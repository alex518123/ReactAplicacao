import React from 'react';
import './styles.css'; 

const ContactForm = () => (
    <form className="form-contact">
      <label htmlFor="name">Nome:</label>
      <input type="text" id="name" name="name" />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" />

      <label htmlFor="message">Mensagem:</label>
      <textarea id="message" name="message"></textarea>
      
      <input type="submit" value="Enviar" />
    </form>
  );
  
  export default ContactForm;