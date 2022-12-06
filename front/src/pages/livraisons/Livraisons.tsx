import './livraisons.scss'
import légumes from '../../images/légumes.webp'
import fromages from '../../images/fromages.webp'
import clémentines from '../../images/légumes.webp'
import oeufs from '../../images/oeufs.webp'
import poires from '../../images/poires.webp'

const Livraisons = () => {
  return (
    <div className='livraisons'>
      <div className='livraisons__header'>
        <h1>Un producteur, un contrat</h1>
      </div>
      <div className='livraisons__contrats'>
        <div className='contrat'>
          <div className='contrat__text'>
            <h1>Tout les vendredi</h1>
            <div>
              <p>Panio bio de Thierry</p>
              <p>Pains de Théodore</p>
            </div>
          </div>
          <div className='contrat__image'>
            <img src={légumes} alt='placeholder' />
          </div>
        </div>
        <div className='contrat'>
          <div className='contrat__text'>
            <h1>Le mercredi</h1>
            <div>
              <p>Fromage de chèvre de Mathias</p>
              <p>Fromage de Brebis de Sylvain</p>
            </div>
          </div>
          <div className='contrat__image'>
            <img src={oeufs} alt='placeholder' />
          </div>
        </div>
        <div className='contrat'>
          <div className='contrat__text'>
            <h1>Un vendredi par mois</h1>
            <div>
              <p>Oeufs de Brice</p>
              <p>Les volailles de Yannick ( tous les deux mois)</p>
            </div>
          </div>
          <div className='contrat__image'>
            <img src={fromages} alt='placeholder' />
          </div>
        </div>
        <div className='contrat'>
          <div className='contrat__text'>
            <h1>
              Un vendredi sur deux <br /> (septembre à février)
            </h1>
            <div>
              <p>Les grenades et les agrumes d&apos; Audrey</p>
            </div>
          </div>
          <div className='contrat__image'>
            <img src={clémentines} alt='placeholder' />
          </div>
        </div>
        <div className='contrat'>
          <div className='contrat__text'>
            <h1>Livraisons plus ponctuelles</h1>
            <div>
              <p>les pommes de Grégoire et Maruschka</p>
              <p>Les poires de Philippe</p>
              <p>les miels de Mélanie</p>
              <p>Les noix d&apos;Elisabeth</p>
              <p>Le safran de Cécile</p>
              <p>Les pruneaux de Claire et Patrick</p>
              <p>Le Boeuf et veau de Laurence et Damien</p>
            </div>
          </div>
          <div className='contrat__image'>
            <img src={poires} alt='placeholder' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Livraisons
