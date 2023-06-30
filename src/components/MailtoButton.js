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
  body: 'Buna ziua, am verificat cererea dumneavoastra si am observat ca (care este problema) nu este completata corect. Inlocuiti aceasta cu (informatii corecte). Va rog sa completati din nou cererea cu datele corespunzatoare! O zi frumoasa!',
};

export default MailtoButton;