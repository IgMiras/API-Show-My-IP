const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json({ extended: false }));
app.use(cors());
app.get('/', (req, res) => {
	const clientIP = req.headers['x-forwarded-for'] || req.ip;
	console.log('Client IP:', clientIP);
	res.json({ ip: clientIP });
});

app.listen(PORT, () => {
	console.log('Servidor está rodando na porta 3001');
});
