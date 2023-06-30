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
  subject: 'Modificare contract',
  body: 'Buna ziua, am verificat contractul dumneavoastra si am observat ca (informatia) nu este completata corect. Inlocuiti aceasta informatie cu (informtia corecta). Va rog sa completati din nou cererea cu datele corespunzatoare! O zi frumoasa!',
};

export default MailToContract
