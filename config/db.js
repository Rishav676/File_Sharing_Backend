require('dotenv').config();
const mongoose= require('mongoose');

function connectDB(){
//     mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true,
//    useUnifiedTopology:true});

//    const connection =mongoose.connection;
  
//     connection.then('open',()=>{
//         console.log('Database connected.');
//     }).catch(err => {
//         console.log('Connection Failed.');
//     })
mongoose.connect(process.env.MONGO_CONNECTION_URL,{ useNewUrlParser: true,
     useUnifiedTopology:true })
    
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    });
}
 module.exports=connectDB;