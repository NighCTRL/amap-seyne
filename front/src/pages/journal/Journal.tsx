import './journal.scss'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
const N1 = `${process.env.REACT_APP_URL}/N1-avril-2021.pdf`
const N2 = `${process.env.REACT_APP_URL}/N2-mai-2021.pdf`
const N3 = `${process.env.REACT_APP_URL}/N3-automne-2021.pdf`
const N4 = `${process.env.REACT_APP_URL}/N4-printemps-2022.pdf`

const Journal = () => {
  return (
    <div className='journal'>
      <h1>Savez vous planter les choux, le journal de l&apos;amap</h1>
      <div className='section'>
        <h2>Printemps 2022</h2>
        <button><a href={N4} >Télécharger le pdf</a></button>
        <Document file={N4} onLoadError={console.error}>
          <Page pageNumber={1} />
        </Document>
      </div>
      <div className='section'>
        <h2>Automne 2021</h2>
        <button><a href={N4} >Télécharger le pdf</a></button>
        <Document file={N3} onLoadError={console.error}>
          <Page pageNumber={1} />
        </Document>
      </div>
      <div className='section'>
        <h2>mai 2021</h2>
        <button><a href={N4} >Télécharger le pdf</a></button>
        <Document file={N2} onLoadError={console.error}>
          <Page pageNumber={1} />
        </Document>
      </div>
      <div className='section'>
        <h2>avril 2021</h2>
        <button><a href={N4} >Télécharger le pdf</a></button>
        <Document className='pdf' file={N1} onLoadError={console.error}>
          <Page pageNumber={1} />
        </Document>
      </div>
    </div>
  )
}

export default Journal
