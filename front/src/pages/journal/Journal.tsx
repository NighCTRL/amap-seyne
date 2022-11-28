import './journal.scss';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
//import pdf1 from "../../pdf/N1.pdf";
const N1 = "http://localhost:80/N1-avril-2021.pdf";
const N2 = "http://localhost:80/N2-mai-2021.pdf";
const N3 = "http://localhost:80/N3-automne-2021.pdf";
const N4 = "http://localhost:80/N4-printemps-2022.pdf";

const Journal = () => {
  // TODO integrate the pdf
  return (
    <div className="journal">
      <h1>Savez vous planter les choux, le journal de l&apos;amap</h1>
      <div className="section">
	<h2>Printemps 2022</h2>
	<Document file={N4} onLoadError={console.error} >
	  <Page pageNumber={1} />
	</Document>
      </div>
      <div className="section">
	<h2>Automne 2021</h2>
	<Document file={N3} onLoadError={console.error} >
	  <Page pageNumber={1} />
	</Document>
      </div>
      <div className="section">
	<h2>mai 2021</h2>
	<Document file={N2} onLoadError={console.error} >
	  <Page pageNumber={1} />
	</Document>
      </div>      
      <div className="section">
	<h2>avril 2021</h2>
	<Document className="pdf" file={N1} onLoadError={console.error} >
	  <Page pageNumber={1} />
	</Document>
      </div>
    </div>
  )
}

export default Journal;
