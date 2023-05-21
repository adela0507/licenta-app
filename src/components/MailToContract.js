import React from 'react'

const MailToContract = ({email,subject,body}) => {
    const handleClick = () => {
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <button className='btn' onClick={handleClick}>Trimite email</button>
  );
};

MailToContract.defaultProps = {
  subject: 'Modificare cerere',
  body: 'Bună ziua, am verificat contractul dumneavoastră şi am observat că      nu este completată corect. Inlocuiţi aceasta informaţie cu        . Vă rog să completaţi din nou cererea cu datele corespunzătoare! O zi frumoasă!',
};

export default MailToContract
