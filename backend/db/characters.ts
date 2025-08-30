import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = await open({
  filename: path.join(__dirname, 'characters.db'),
  driver: sqlite3.Database
});

db.run('UPDATE characters SET clasificacion=null WHERE id = 1035')

db.exec(`
CREATE TABLE IF NOT EXISTS characters (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  imagen TEXT,
  sexo TEXT,
  edad INTEGER,
  ocupacion TEXT,
  clan TEXT,
  debut TEXT,
  estado TEXT,
  naturalezaTipo TEXT,
  clasificacion TEXT,
  familia TEXT
)
`)

export default db;