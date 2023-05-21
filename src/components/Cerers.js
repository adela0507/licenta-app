import React from 'react';
import { useAppContext } from '../context/appContext';
import { Link } from 'react-router-dom';
import MailtoButton from './MailtoButton';
import PDFButton from './PDFButton';
const Cerers = ({ name, lastName, email, grade, address, tel, _id, studyYear, situation, date, sign }) => {
  const { deleteCerers } = useAppContext();

  const handleDelete = () => {
    deleteCerers(_id);
  };

  return (
    <div>
      <table border='1' width='800' height='200'>
        <tbody>
          <tr>
            <th>Nume</th>
            <th>Prenume</th>
            <th>Email</th>
            <th>Adresa</th>
            <th>Telefon</th>
            <th>An de studiu</th>
            <th>Situatie</th>
            <th>Data</th>
            <th>Sign</th>
            <th>Nota</th>
          </tr>
          <tr>
            <td>{name}</td>
            <td>{lastName}</td>
            <td>{email}</td>
            <td>{address}</td>
            <td>{tel}</td>
            <td>{studyYear}</td>
            <td>{situation}</td>
            <td>{date}</td>
            <td>{sign}</td>
            <td>{grade}</td>
          </tr>
        </tbody>
      </table>
      <br />
      <button type='button' className='btn' onClick={handleDelete}>
        Sterge
      </button>
      <br />
      <br />
      <MailtoButton email={email}>Email</MailtoButton>
      <br />
      <br />
      <PDFButton
        name={name}
        lastName={lastName}
        email={email}
        grade={grade}
        address={address}
        tel={tel}
        _id={_id}
        studyYear={studyYear}
        situation={situation}
        date={date}
        sign={sign}
      />
      <br />
      <br />
    </div>
  );
};

export default Cerers;
