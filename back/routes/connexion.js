const express = require('express')
const router = express.Router()
const pool = require('../database')
const bcrypt = require('bcrypt')
const verifyToken = require('../middlewares/verifyToken')
const jwtSign = require('../middlewares/jwtSign')

router.use(express.json())

router.post('/connexion', async (req,res)=>{
  // recieving the credentials inside the request body
  const {email, password} = req.body;
  // searching the database for a user with the same email
  const user = await pool.query("select * from users where user_email = $1",[email]);
  // checking the result to see if that user exist
  if(user.rows.length === 0) return res.status(400).send({ error: "email n'existe pas"}); // does not exist
  // checking the password. Does it match the hashed password
  const validPassword = await bcrypt.compare(password,user.rows[0].user_password)
  if(!validPassword) return res.status(400).json({error: "incorrect password"}); // password does not match
  // we have verified email and password. We send a secure jwt to the client using jwt middleware
  const userId = user.rows[0].user_id
  const tokens = jwtSign(userId,email)
	//    console.log(tokens)
  //res.cookie('refresh_token',`tokens.refreshToken`,{httpOnly:true})
  res.json(tokens)
})

router.post('/admin', verifyToken, (req,res) =>{
  console.log("token verified")
  res.status(200).json({"success":"successfully verified token"})
})

// TODO refresh the token


//to create an acount
router.post('/creation', async (req, res)=>{
  try{
		const hashedPassword = await bcrypt.hash(req.body.password,10);
		const newUser = await pool.query(
	    'insert into users(user_email,user_password) values ($1,$2) returning *',
	    [req.body.email,hashedPassword]);
		res.status(200).json({"success":"Compte a bien été crée!"})
  } catch (err){
		console.log(err.message)
  }
})

module.exports = router
