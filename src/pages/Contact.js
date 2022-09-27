import React, { useRef, useState } from 'react';
import '../styles/Contact.css'
import emailjs from '@emailjs/browser';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Result =() =>{
  return(
    <p>Your message has been successfully sent!</p>
  )
}

function Contact() {
  //const form = useRef();
  const [result,showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p1zyw2e', 'template_u6zdn8c', e.target, '2VKS5d7eUbOXDTdyQ')
      .then((result) => {
          console.log(result.text);
          showResult(true);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
      
  };

  return (
    <div >
      <div className='contact'>
        <h1>Contact</h1>
        <ol className='list'>
          <li className='item'>
            <h3>Address: Timișoara, Romania</h3>
          </li>
          <li className='item'>
            <h3>Email: iancuteusebiu@gmail.com</h3>
          </li>
          <li className='item'>
            <h3>Mobil: 0770810139</h3>
          </li>
          <li className='item'>
            <h3>LinkedIn: <a href="https://www.linkedin.com/in/iancut-eusebiu-924a4b231?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BWgiJqyWCQ3KghlldWmj2gQ%3D%3D"><LinkedInIcon/></a></h3>
          </li>
        </ol>
      </div>
   
      <div className="container">
       <div className='form'>
        <form  onSubmit={sendEmail} >
          <h2>Quick Contact</h2>
          <label >First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name.." />

          <label  >Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

          <label  >Email</label>
          <input type="email" id="email" name="email" placeholder="Your email address.." />

          <label  >Subject</label>
          <input type="text" id="sub" name="subject" placeholder="Subject.." />

          <label  >Message</label>
          <textarea id="message" name="message" placeholder="Write message.." ></textarea>

          <input type="submit" value="Submit" />
         {result ? <Result /> : null }
        </form>
        </div>
      </div>

    </div>

  )
}

export default Contact