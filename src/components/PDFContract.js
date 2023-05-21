import React from 'react';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const generatePDF = (emailContract, nameContract, telContract, _id, dadName, momName, studyYearContract, addressContract,
  ci, numberCI, ciAddress, dateContract, cnpContract, taxe, signContract, caminNumber, caminAddress, student) => {
  const docDefinition = {
    content: [
      { text: 'Contract de închiriere a unui loc în cămin', bold: true, alignment: 'center', style: 'header' },
      { text: 'Nume:', bold: true },
      nameContract,
      { text: 'Email:', bold: true },
      emailContract,
      { text: 'Telefon:', bold: true },
      telContract,
      { text: 'Numele Tatălui:', bold: true },
      dadName,
      { text: 'Numele Mamei:', bold: true },
      momName,
      { text: 'An de studiu:', bold: true },
      studyYearContract,
      { text: 'Adresa Studentului:', bold: true },
      addressContract,
      { text: 'CI:', bold: true },
      ci,
      { text: 'Număr CI:', bold: true },
      numberCI,
      { text: 'Adresa CI:', bold: true },
      ciAddress,
      { text: 'CNP:', bold: true },
      cnpContract,
      { text: 'Taxa:', bold: true },
      taxe,
      { text: 'Numărul căminului:', bold: true },
      caminNumber,
      { text: 'Adresa căminului:', bold: true },
      caminAddress,
      { text: 'Student:', bold: true },
      student,
      { text: 'Data:', bold: true },
      dateContract,
      { text: 'Semnătură:', bold: true },
      signContract,
    ],
  };

  pdfMake.createPdf(docDefinition).download('Contract.pdf');
};

const PDFButtonContract = ({ emailContract, nameContract, telContract, _id, dadName, momName, studyYearContract, addressContract,
  ci, numberCI, ciAddress, dateContract, cnpContract, taxe, signContract, caminNumber, caminAddress, student }) => {
  const handleClick = () => {
    generatePDF(emailContract, nameContract, telContract, _id, dadName, momName, studyYearContract, addressContract,
      ci, numberCI, ciAddress, dateContract, cnpContract, taxe, signContract, caminNumber, caminAddress, student);
  };

  return (
    <button type="button" onClick={handleClick}>
      Generare PDF
    </button>
  );
};

export default PDFButtonContract;
