const express=require('express');
const app=express();

require('dotenv').config();

app.use(express.json());

const blogRoutes=require('./routes/blogs');
app.use('/api/v1', blogRoutes);

const port=process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`App is started at Port no. ${port}`);
})

const dBConnect=require('./config/database');
dBConnect();

//default page
app.get('/', (req, res) => {
    res.send("This is Home Page");
})