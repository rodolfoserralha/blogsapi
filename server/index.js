require('dotenv').config();
const express = require('express');
const router = require('./routers');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/user', router.userRouter);
app.use('/login', router.loginRouter);
app.use('/categories', router.categoriesRouter);
app.use('/post', router.postRouter);

app.listen(3001, () => console.log('ouvindo porta 3001!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
