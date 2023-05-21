import React from 'react';

const MailtoButton = ({ email, subject, body }) => {
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

MailtoButton.defaultProps = {
  subject: 'Modificare cerere',
  body: 'Bună ziua, am verificat cererea dumneavoastră şi am observat că      nu este completată corect. Inlocuiţi aceasta cu        . Vă rog să completaţi din nou cererea cu datele corespunzătoare! O zi frumoasă!',
};

export default MailtoButton;