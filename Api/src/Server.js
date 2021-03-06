const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', async (req, res) => {
	res.send('API rodando.');
});

app.use('/take', require('./Routes/Take'));

app.listen(process.env.PORT || 3000, () => {
	console.log('API rodando.');
});