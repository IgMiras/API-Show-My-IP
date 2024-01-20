const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json({ extended: false }));
app.use(cors());
app.get('/', (req, res) => {
	const clientIP = req.headers['x-forwarded-for'] || req.ip;
	const ipsArray = clientIP.split(', ');
	console.log('Client IP:', ipsArray[0]);
	res.json({ ip: ipsArray[0] });
});

app.listen(PORT, () => {
	console.log('Servidor está rodando na porta 3001');
});
