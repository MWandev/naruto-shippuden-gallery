import { open } from "sqlite";
import sqlite3 from "sqlite3";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const db = await open({
  filename: join(__dirname, 'characters.db'),
  driver: sqlite3.Database
});

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