import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const generatePDF = (name, lastName, email, grade, address, tel, _id,studyYear,situation,date,sign) => {
  const docDefinition = {
    content: [
            { text: 'Cerere pentru acordarea unui loc în cămin', bold: true, alignment: 'center', style: 'header' },
      { text: 'Nume:', bold: true },
      name,
      { text: 'Prenume:', bold: true },
      lastName,
      { text: 'Email:', bold: true },
      email,
      { text: 'Adresa:', bold: true },
      address,
      { text: 'Număr de telefon:', bold: true },
      tel,
      { text: 'Nota:', bold: true },
      grade,
      { text: 'Anul de studiu:', bold: true },
      studyYear,
      { text: 'Situaţia:', bold: true },
      situation,
      { text: 'Data completării:', bold: true },
      date,
      { text: 'Semnătură:', bold: true },
      sign,
    ],
  };

  pdfMake.createPdf(docDefinition).download('Cerere.pdf');
};

const PDFButton = ({ name, lastName, email, grade, address, tel, _id,studyYear,situation,date,sign }) => {
  return (
    <button type="button" onClick={() => generatePDF(name, lastName, email, grade, address, tel, _id,studyYear,situation,date,sign)}>
      Generare cerere în format PDF
    </button>
  );
};

export default PDFButton;