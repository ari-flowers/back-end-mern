const express = require('express')
const app = express()
const PORT = process.env.PORT || 9000
require('./db/db')
const cors = require("cors");
//cors
const whitelist = ["http://localhost:3000"];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
};


// ======================================================
//       MIDDLEWARE
// ======================================================

app.use(cors(corsOptions));
const plantsController = require('./controllers/plants.js')

app.use(express.json())
app.use('/plants', plantsController)


//=======================================================
//        LISTENERS
//=======================================================

app.listen(PORT, () => {
  console.log('👁 👄👁  🪴', `We are alive and growing on ${PORT}`);
})
