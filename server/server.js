const express = require('express');
const jwt = require('jsonwebtoken');
const Razorpay = require('razorpay');
const app = express();
const port = 3000;
const cors = require('cors');

const secretkey = "secretkey";
app.use(express.json());


app.use(cors({
  origin: '*' 
}));


app.post("/app-login", (req, res) => {
  const email = req.body.email; 
  //email handle
  if (!email) {
    return res.status(400).json({ message: "User data is required" });
  }
  const user = { email };
 //token assigning syntax
  jwt.sign({ user }, secretkey, { expiresIn: '2d' }, (err, token) => {
    if (err) {
      return res.status(500).json({ message: "Error signing token" });
    }
    res.json({ token });
   
  });
});

// Token verification middleware
function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];

  if (typeof bearerHeader !== 'undefined') {
    const bearerToken = bearerHeader.split(' ')[1];
    jwt.verify(bearerToken, secretkey, (err, authData) => {
      if (err) {
        res.status(403).json({ result: 'Token not valid' });
      } else {
        req.authData = authData;
        next();
      }
    });
  } else {
    res.status(403).json({ result: 'Token not provided' });
  }
}


// Razorpay integration
var instance = new Razorpay({
  key_id: "rzp_test_XXL3pf2W5LsGAT",
  key_secret: "pGQHgSNugcPiEJ5NlWFOECV1"
});

// Razorpay payment route
app.post("/app-cart", (req, res) => {
  // Example Razorpay integration logic here
  const amount = req.body.amount;

  const amountInPaise = amount * 100; 
  res.json({ amountInPaise });
});


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

