import React from "react";

import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="leftSide">
      <p><span>Numar de telefon</span>:0770110315</p>
        <p><span>Adresa e-mail</span>:darius_m91@yahoo.com</p>
        <p><span>Adresa</span>:Bulevardul Republicii 27-28,Timisoara</p>
      <div className="leftMap" ><iframe width="100%" height="auto" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Bulevardul%20Republicii%2027,%20Timi%C8%99oara%20300158+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps devices</a></iframe></div>
      </div>
      <div className="rightSide">
        <h1> Trimite un mesaj</h1>
        <p>
          Dacă aveți întrebări sau nelămuriri în legătură cu comenzile dvs, nu
          ezitați și scrieți-ne completând următorul formular.
        </p>
        

        <form id="contact-form" method="POST">
          <label htmlFor="name">Nume şi prenume</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Adresa e-mail</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
