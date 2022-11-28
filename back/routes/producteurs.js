const express = require('express')
const router = require('express').Router()
const pool = require('../database')

// make it possible to parse json payloads
router.use(express.json())

//get all producteurs
router.get('/producteurs', async (req,res)=>{
    try{
	const allProducteurs = await pool.query('select * from producteurs order by prod_id');
	res.json(allProducteurs.rows);
    } catch (err){
	console.log(err.message)
    }
})

//get a producteurs by id
router.get('/producteurs/:id', async (req,res) => {
    const {id} = req.params;
    try{
	const producteur = await pool.query('select * from producteurs where prod_id = $1', [id])
	res.json(producteur.rows[0])
    } catch(err){
	console.log(err.message)
    }
})

// update a producteurs
// TODO be able to modify all the fields at once
router.put('/producteurs/:id', async (req,res)=>{
    try{
	const {id} = req.params
	const {presentation} = req.body
	const updateProducteur = await pool.query("update producteurs set prod_pres = $1 where prod_id = $2",[presentation, id])
	res.json("la page du producteur a été mis a jour")
    } catch(err){
	console.log(err.message)
    }
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
