import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ProducteurData from '../../types/types'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom'
import './editProducteur.scss'
import axios from 'axios'

const EditProducteur: React.FC = () => {
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  const { id } = useParams()

  const [producteur, setProducteur] = useState<ProducteurData>({
    prod_id: 2,
    prod_loca: '',
    prod_name: '',
    prod_pres: '',
    prod_type: '',
  })

  const getProducteur = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_NODE_URL}/edit/producteurs/${id}`)
      const data = await res.json()
      console.log(data)
      setProducteur(data)
      setLoading(false)
    } catch (error) {
      console.log('there was an error')
      console.log(error)
    }
  }

  useEffect(() => {
    getProducteur()
  }, [])

  if (loading === true) {
    return <div className='editProducteur'>loading</div>
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const url = `${process.env.REACT_APP_NODE_URL}/edit/producteurs/${id}`
    console.log(url)
    await axios
      .post(
        `${process.env.REACT_APP_NODE_URL}/edit/producteurs/${id}`,
        {
          name: producteur.prod_name,
          type: producteur.prod_type,
          loca: producteur.prod_loca,
          pres: producteur.prod_pres,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
        },
      )
      .then(() => {
        toast.success('modifications enregistrées')
        navigate('/producteurs')
      })
      .catch((err) => {
        console.log('erreur')
        console.log(err)
      })
  }

  return (
    <div className='editProducteur'>
      <form className='editProducteur__form' onSubmit={handleSubmit}>
        <input
          className='input'
          value={producteur.prod_name}
          name='prod_name'
          onChange={(e) =>
            setProducteur?.({
              ...producteur,
              prod_name: e.target.value,
            })
          }
        />
        <input
          className='input'
          value={producteur.prod_type}
          name='prod_type'
          onChange={(e) =>
            setProducteur?.({
              ...producteur,
              prod_type: e.target.value,
            })
          }
        />
        <input
          className='input'
          value={producteur.prod_loca}
          onChange={(e) =>
            setProducteur?.({
              ...producteur,
              prod_loca: e.target.value,
            })
          }
        />
        <textarea
          className='input'
          value={producteur.prod_pres}
          cols={50}
          rows={20}
          onChange={(e) =>
            setProducteur?.({
              ...producteur,
              prod_pres: e.target.value,
            })
          }
        />
        <button type='submit'>valider la modification</button>
      </form>
    </div>
  )
}

export default EditProducteur
