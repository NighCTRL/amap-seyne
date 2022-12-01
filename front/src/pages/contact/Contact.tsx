import './contact.scss'

const Contact = () => {
  return (
    <div className='contact'>
      <div className='informations'>
        <h1>AMAP La Seyne sur Mer</h1>
        <p>Pour en savoir plus sur notre AMAP vous pouvez</p>
        <ul>
          <li>
            <h3> - Venir nous rencontrer</h3>
            <br />
            <p>chaque vendredi de 17h30 a 18h30 sur notre lieu de distribution</p>
            <p className='renseignement'>
              Espace Municipal Jean-Baptiste Coste, Chemin Aimé-Genoud, 83500 La Seyne sur Mer
            </p>
          </li>
          <li>
            <h3> - Nous écrire</h3>
            <br />
            <p>
              Même si rien ne remplace un contact direct pour découvrir nos paniers et qui nous
              sommes, vous pouvez nous demander des informations par mail :
            </p>
            <p className='renseignement'>amaplaseynesurmer@hotmail.fr</p>
          </li>
        </ul>
        <p>il peut-être possible d&apos;adhérer a notre amap tout au long de l&apos;année</p>
      </div>
    </div>
  )
}

export default Contact
