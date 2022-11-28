const express = require('express')
const router = require('express').Router()
const pool = require('../database')
const verifyToken = require('../middlewares/verifyToken')

router.use(express.json())

router.get("/edit/producteurs/:id", async (req, res) => {
  const { id } = req.params;

  try{
		const producteur = await pool.query("select * from producteurs where prod_id = $1",[id])
		res.json(producteur.rows[0])	
  } catch(err) {
		console.log(err.message)
  }

})

router.post("/edit/producteurs/:id", verifyToken, async (req, res)=>{
  const { id } = req.params
  
  const { name, type, loca, pres } = req.body


  const update = await pool.query(
		"update producteurs set prod_name = $1, prod_type = $2, prod_loca = $3, prod_pres = $4 where prod_id = $5",
		[name, type, loca, pres, id])
  
  res.status(200).json({"success":"producteur mis a jour"})
})


// delete a producteur
router.delete('/producteurs/:id', async (req,res)=>{
        try{
	    const {id} = req.params
	    const deleteProducteur = await pool.query('delete from producteurs where prod_id = $1',[id])
	    res.json('le producteur a été supprimé')
	} catch(err){
	    console.log(err.message)
	}
})

module.exports = router

