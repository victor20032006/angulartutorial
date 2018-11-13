//define API end-points
const express = require('express');
const router = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const db= "mongodb://admin:admin123@ds251223.mlab.com:51223/eventsdb";

mongoose.connect(db, err => {
	if(err)
	{
		console.error('Error!' + err);
	}else
	{
		console.log('Connected to mongoDB');
	}
});

function verifyToken(req, res, next){
	if(!req.headers.authorization){
		return res.status(401).send('Unauthorized request');
	}
	let token = req.headers.authorization.split(' ')[1];
	if(token === 'null'){
		return res.status(401).send('Unauthorized request');
	}
	let payload = jwt.verify(token, 'secretkey');
	if(!payload){
		return res.status(401).send('Unauthorized request');
	}
	req.userId = payload.subject;
	next();
}

router.get('/', (req, res) => {
	res.send('From API route');
});

router.post('/register', (req, res) => {
	let userDate = req.body;
	let user = new User(userDate);
	user.save((error, registeredUser) => {
		if(error)
		{
			console.error(error);
		}else
		{
			let payload = { subject: registeredUser._id};
			let token = jwt.sign(payload, 'secretkey');
			//res.status(200).send(registeredUser);
			res.status(200).send({token});
		}
	});
});

router.post('/login',(req, res) => {
	let userData = req.body;

	//1. check user exist in DB by email
	//2. verify password
	//3. return user detail
	User.findOne({email: userData.email}, (error, user) => {
		if(error)
		{
			console.log(error);
		}else
		{
			if(!user)
			{
				res.status(401).send('Invalid email');
			}else if(user.password !== userData.password)
			{
				res.status(401).send('Invalid password');
			}else
			{
				let payload = { subject: user._id};
				let token = jwt.sign(payload, 'secretkey');
			//res.status(200).send(registeredUser);
				res.status(200).send({token});
				//res.status(200).send(user);
			}
		}
	});
});

router.get('/events', (req, res) => {
	let events = [
		{
			"_id": "1",
			"name": "Auto Expo",
			"description": "lorem ipsum",
			"date": "2012-04-23T18:25:43.511Z"
		},
		{
			"_id": "2",
			"name": "Auto Expo",
			"description": "lorem ipsum",
			"date": "2012-04-23T18:25:43.511Z"
		},
		{
			"_id": "3",
			"name": "Auto Expo",
			"description": "lorem ipsum",
			"date": "2012-04-23T18:25:43.511Z"
		},
		{
			"_id": "4",
			"name": "Auto Expo",
			"description": "lorem ipsum",
			"date": "2012-04-23T18:25:43.511Z"
		},
		{
			"_id": "5",
			"name": "Auto Expo",
			"description": "lorem ipsum",
			"date": "2012-04-23T18:25:43.511Z"
		},
		{
			"_id": "6",
			"name": "Auto Expo",
			"description": "lorem ipsum",
			"date": "2012-04-23T18:25:43.511Z"
		}
	  ];
	  res.json(events);
});

//on called, first verify the token, then execute the original function
router.get('/special', verifyToken, (req, res) => {
	let specialEvents = [
		{
			"_id": "1",
			"name": "Auto Expo Special",
			"description": "lorem ipsum",
			"date": "2012-04-23T18:25:43.511Z"
		},
		{
			"_id": "2",
			"name": "Auto Expo Special",
			"description": "lorem ipsum",
			"date": "2012-04-23T18:25:43.511Z"
		},
		{
			"_id": "3",
			"name": "Auto Expo Special",
			"description": "lorem ipsum",
			"date": "2012-04-23T18:25:43.511Z"
		},
		{
			"_id": "4",
			"name": "Auto Expo Special",
			"description": "lorem ipsum",
			"date": "2012-04-23T18:25:43.511Z"
		},
		{
			"_id": "5",
			"name": "Auto Expo Special",
			"description": "lorem ipsum",
			"date": "2012-04-23T18:25:43.511Z"
		},
		{
			"_id": "6",
			"name": "Auto Expo Special",
			"description": "lorem ipsum",
			"date": "2012-04-23T18:25:43.511Z"
		}
	];
		res.json(specialEvents);
});

module.exports = router;