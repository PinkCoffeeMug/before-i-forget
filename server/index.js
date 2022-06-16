import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

//import routes
import postRoutes from './routes/posts.js';

const app = express();

//set routes
app.use('/posts', postRoutes);

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

// https://www.mongodb.com/cloud/atlas

//url
const CONNECTION_URL = 'mongodb+srv://procrasprincess:procrasprincess123@cluster0.pmpvpfu.mongodb.net/?retryWrites=true&w=majority';

//port
const PORT = process.env.PORT || 5000;

//connect mongo db and make sure console runs smoothly
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

//mongoose.set('useFindAndModify', false);