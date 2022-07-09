const express = require('express');

const app = express();
const loginRoutes = require('./login/login');
app.use(express.json());
app.use('/login', loginRoutes);



const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})


