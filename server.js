const express = require('express');
const cron = require('node-cron');

const app = express();

// create cron job
cron.schedule("*/2 * * * * * ", ()=> {
    console.log("this runs every 2 seconds");
})


const PORT = 4000;
app.listen(PORT, ()=>console.log(`Server running at port: ${PORT}`));