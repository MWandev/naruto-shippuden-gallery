import { open } from "sqlite";
import sqlite3 from "sqlite3";

const db = await open({
  filename: "./src/db/characters.db",
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