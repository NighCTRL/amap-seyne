import { useEffect, useState } from 'react'
import { Producteur } from '../../components'
import ProducteurData from '../../types/types'
import './producteurs.scss'

const Producteurs: React.FC = () => {
  const [loading, setLoading] = useState(true)

  const [producteurs, setProducteurs] = useState<Array<ProducteurData>>([])

  const getProducteurs = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_NODE_URL}/producteurs`)
      // same as line 8 we are defining the type of answer we are waiting for
      const data = (await res.json()) as Array<ProducteurData>
      setProducteurs(data)
      setLoading(false)
    } catch (error) {
      console.log('there was an error')
      console.log(error)
    }
  }

  useEffect(() => {
    getProducteurs()
  }, [])

  return (
    <div className='producteurs'>
      <div className='producteurs__header'>
        <h1>Nos Paysans Bio</h1>
        <p>l&apos;amour de la terre</p>
      </div>
      {loading === true && <p>loading...</p>}
      {loading === false && (
        <div className='producteurs__presentation'>
          {producteurs.map((data: ProducteurData) => (
            <Producteur
              key={data.prod_id}
              prod_id={data.prod_id}
              prod_name={data.prod_name}
              prod_type={data.prod_type}
              prod_loca={data.prod_type}
              prod_pres={data.prod_pres}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Producteurs
