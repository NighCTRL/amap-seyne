import './amap.scss'
import vegetables from '../../images/vegetables.jpg'

const Amap = () => {
  const state = [
    '20 ans AMAP.jpeg',
    'apero serre.jpeg',
    'apero.jpeg',
    'basilic.jpeg',
    'champ de courge.jpeg',
    'champs.jpeg',
    'courge.jpeg',
    'distribution septembre.jpeg',
    'fromage chevre.jpeg',
    'pois gourmand.jpeg',
    'poivrons.jpeg',
    'recolte pdt.jpeg',
    'serre avec chien.jpeg',
    'serre tomates.jpeg',
    'tableau permanence.jpeg',
    'tournesol abeille.jpeg',
    'tri PDT.jpeg',
    '20 ans AMAP.jpeg',
  ]
  return (
    <div className='amap'>
      <div className='amap__header'>
        <h1 className='amap__header-uppercase'>Une amap</h1>
        <h2 className='amap__header-uppercase'>Un reseau</h2>
        <h3>du local au national</h3>
      </div>
      <div className='amap__presentation'>
        <h1>AMAP La Seyne Sur Mer</h1>
        <p>
          L’AMAP la Seyne sur Mer nait en 2008 du souhait de quelques amapiens issus du premier
          groupe d’Aubagne de fonder une AMAP centrée sur la production biologique et locale
          (statuts, sous le régime d’une association 1901, déposés en Préfecture du Var JO du
          24/01/2009 N° 1903). Le Var et les bouches du Rhône sont les figures de proue d’un
          mouvement qui depuis 20 ans se répand en France.
        </p>
        <p>
          L’AMAP a pour objet de maintenir et promouvoir une agriculture durable, de proximité,
          socialement équitable et écologiquement saine. L&apos;association fait partie du Réseau
          des AMAP DE PROVENCE (cf l’amap tout un réseau). L’association, ses membres, ses
          producteurs adhèrent aux principes portés par la charte des Amap (lien vers charte des
          amap).
        </p>
        <p>
          Organisée autour d&apos;un projet de soutien à l&apos;agriculture biologique, l&apos;AMAP
          LA SEYNE SUR MER est liée depuis plusieurs années avec les mêmes producteurs : Thierry, le
          maraîcher cultive ses terres à la Cadière d&apos;Azur, Les autres producteurs sont
          installés dans le Var hormis les producteurs de pommes, poires, noix et châtaignes qui se
          trouvent dans les départements limitrophes.
        </p>
        <p>
          L&apos;association bénéficie d&apos;une convention municipale pour l&apos;occupation du
          préau de l’ancienne école Jean-Baptiste Coste afin de pouvoir effectuer les distributions.
        </p>
      </div>
      <div className='amap__showcase'>
        {state.map((image, index) => {
          const img = require(`../../images/vie-amap/${image}`)
          return (
            <div className='item' key={index}>
              <img src={img} key={index} />
            </div>
          )
        })}
      </div>
      <div className='amap__explication'>
        <h1>Qu&apos;est ce qu&apos;une AMAP ?</h1>
        <p>
          Une AMAP est une Association pour le Maintien d’une Agriculture Paysanne. Elle a pour
          objectif de préserver l’existence et la continuité des fermes de proximité dans une
          logique d’agriculture durable et biologique.
        </p>
        <p>
          Le fermier s’engage à cultiver sain, dans le respect de la nature et de l’environnement.
          Conformément à la Charte des AMAP, iI n’utilise ni engrais chimique de synthèse, ni
          pesticide, ni OGM.
        </p>
        <p>
          L’AMAP est composée de personnes qui deviennent partenaires d’une ferme. Un engagement
          contractuel permet au paysan d’assurer à l’avance la commercialisation de ses denrées et à
          l&apos;adhérent d’obtenir un panier des légumes, fruits, fromages, viandes, poissons… de
          la ferme.
        </p>
        <p>Les &quot;Amapiens&quot; et le paysan s’engagent dans une démarche éthique.</p>
        <p>
          Chaque membre de l’A.M.A.P. achète en début de saison une part de la récolte de la ferme.
          La recette ainsi obtenue par avance par le paysan constitue un fonds qui couvre les coûts
          de production pour la saison et assure la juste rémunération du travail du paysan (et des
          ouvriers).
        </p>
        <p>
          En contrepartie, l’approvisionnement de l&apos;Amapien en aliments de qualité est assuré
          durant toute la saison de culture, d&apos;élevage ou de pêche.
        </p>
        <p>
          Au travers des échanges avec le producteur, des visites de la ferme et des fêtes les
          membres apprennent à connaître les producteurs et leurs lieux de productions.
        </p>
        <p>
          Dans ce système hors économie de marché, l’agriculteur livre l’intégralité de sa
          production, évite la surproduction et toute mévente due à la forte concurrence
          internationale. N’ayant plus le souci de vendre, il peut se consacrer à la valorisation de
          son savoir-faire et à la qualité de sa pratique agricole.
        </p>
      </div>
      <div className='amap__transition'>
        <img src={vegetables} alt='transition' />
      </div>
      <div className='amap__reseau'>
        <h1>Le réseau des AMAP</h1>
        <h2>Ensemble plus solidaires</h2>
        <p>
          Plusieurs expériences, et diverses influences ont créée en France le terreau fertile
          propice à la naissance de ce qui deviendra le mouvement des AMAP :
        </p>
        <p>
          - DES EXPERIENCES ETRANGERES : avec principalement les Teikei au Japon (ce mot signifie «
          engagement de collaboration ») dans les années 70, et les CSA (Communauty Support
          Agriculture) aux Etats-Unis et au Canada dans les années 80. Le fonctionnement est simple
          : en échange de l’achat par souscription de la récolte du paysan, ce dernier s’engage à
          fournir des aliments cultivés sans produits chimiques.
        </p>
        <p>
          - DES EXPERIENCES FRANÇAISES : les jardins de Cocagne (depuis 1991) sont axés sur
          l’insertion par l’activité économique et fournissent des paniers de légumes biologiques à
          des groupes de consommateurs ; de nombreuses initiatives de vente directe se développent
          depuis près de 20 ans.
        </p>
        <p>
          -DES DEMARCHES PORTEES PAR DES ORGANISATIONS AGRICOLES FRANÇAISES : la charte de
          l’agriculture paysanne créée en 1990 (Fadear et Confédération Paysanne), l’agriculture
          biologique (Nature et progrès, FNAB. etc,) les associations de développement rural faisant
          la promotion de l’agriculture de proximité (CIVAM etc)
        </p>
        <p>
          - Des mouvements d’éducation populaire (ATTAC), des mouvements de consommateurs qui se
          mobilisent contre la malbouffe, l’insécurité alimentaire et la grande distribution.
        </p>
        <p>
          Avril 2001 : naissance de la première AMAP de France à Aubagne par un couple de
          producteurs (qui avait eu connaissance de ce mouvement naissant aux états unis) et un
          groupe de consomm’acteurs.
        </p>
        <p>
          Mai 2001 : Création de l’association Alliance Paysans Ecologistes Consommateurs, réseau
          des AMAP. Elle contribue à essaimer et à promouvoir les AMAP en région PACA. L’association
          réunie dès le début, des organisations agricoles partenaires (Confédération Paysanne, Bio
          de Provence, etc.), des organisations de consommateurs (Slow Food) et des consommateurs
          engagés.
        </p>
        <p>
          En 2003, Alliance Provence élabore et adopte la charte des AMAP. Cette charte, ainsi que
          le terme A.M.A.P., sont déposés en Mai 2003 à l’INPI.
        </p>
        <p>
          uis 2001, les AMAP ont fleuries dans toute la France et de nombreux réseaux régionaux se
          sont constitués progressivement : Alliance Midi-Pyrénées, Alliance PEC Rhône Alpes, AMAP
          Ile de France.
        </p>
        <p>
          2009 a eu lieu la première rencontre nationale des AMAP qui a donné naissance au MIRAMAP
          (Mouvement Inter-Régional des AMAP).
        </p>
        <p>
          AMAP La Seyne sur Mer s’inscrit dans une dynamique régionale et nationale de sauvegarde de
          l’agriculture locale, biologique.
        </p>
      </div>
    </div>
  )
}

export default Amap
