import express from 'express';
const cors = require('cors');
const cookieParser = require('cookie-parser');
import { authUtils } from './utils/authUtils';
import { signUpUser, signInUser, signOutUser } from './controllers/AuthController';
import { fetchScore, getAllUserDetails, updateScore } from './controllers/GameController';


const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
const PORT = process.env.PORT || 3001;



//Request to get details of all users
app.get('/api/users', authUtils, getAllUserDetails)
//Request to get details about a specific user;
app.post('api/user/:id', authUtils)

//Request to update score of user
app.post('/api/update_score/:id', authUtils, updateScore);
app.get('/api/fetch_score/:id', authUtils, fetchScore);


//Request to SignIn user
app.post('/api/signin', signInUser);

//Request to Sign up user
app.post('/api/signup', signUpUser);

//Request to Sign Out user
app.post('/api/signout', signOutUser);

app.listen(PORT, () => {
    console.log(`Server is ready at ${PORT}`)
})