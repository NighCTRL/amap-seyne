import './mentions.scss'

const Mentions = () => {
  return (
    <div className='mentions'>
      <div className='informations'>
        <h1>Mention légales</h1>
        <div className='section'>
          <h2>Utilisations des cookies</h2>
          <p>
            Aucun cookies n&apos;est utilisé sur le site pour les utilisateurs normaux. Seuls les
            administrateurs qui se sont connecté utilisent des cookies a travers les différentes
            pages du site. Ce sont des cookies nécessaires pour identifier leur session.
          </p>
        </div>
        <div className='section'>
          <h2>Code source </h2>
          <p>
            Ce site est fièrement libre et open-source. Le code est hebergé sur{' '}
            <a href='https://git.sr.ht/~nigh/amap-seyne'>sourcehut</a> sous la licence GPL V3.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Mentions
