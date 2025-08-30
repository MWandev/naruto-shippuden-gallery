import express from 'express';
import cors from 'cors';
import db from './db/characters.ts';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());


app.get('/search', async (req, res) => {
  const { search, filter } = req.query;
  const params = [`%${search}%`, filter, 0, 21];
  let charactersFiltered;

  if (filter === 'todos' && search !== '') {
    charactersFiltered = await db.all(
      `SELECT * FROM characters WHERE name LIKE ?`, `%${search}%`
    );
  } else if (filter === 'Vivo' || filter === 'Muerto') {
    charactersFiltered = await db.all(
      `SELECT * FROM characters WHERE name LIKE ? AND estado = ? LIMIT ?, ?`, params
    );
  } else if (filter === 'Masculino' || filter === 'Femenino') {
    charactersFiltered = await db.all(
      `SELECT * FROM characters WHERE name LIKE ? AND (sexo = ? OR sexo = 'Desconocido') ORDER BY sexo DESC LIMIT ?, ?`, params
    );
  }

  res.json(charactersFiltered);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});