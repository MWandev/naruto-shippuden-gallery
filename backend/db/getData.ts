import sqlite3 from 'sqlite3';
import { open } from 'sqlite';


const db = await open({
  filename: './characters.db',
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
    familia TEXTique_traits TEXT
    )
`);

const getData = async(pageID: number) => {
    const response = await fetch(`https://dattebayo-api.onrender.com/characters?page=${pageID}`);
    const data = await response.json();
    return data.characters;
}
 
const totalPage = 72;

// Función para insertar datos en la base de datos
const insertCharacter = async ({id, name, image, sex, ageFormatter, occupation, clan, debut, state, natureType, classification, family}: any) => {
	try {
        const insertPrepare = await db.prepare(`
            INSERT INTO characters (id, name, imagen, sexo, edad, ocupacion, clan, debut, estado, naturalezaTipo, clasificacion, familia)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `);
        
        await insertPrepare.run(
            id,
            name,
            image,
            sex,
            ageFormatter,
            occupation,
            clan,
            debut,
            state,
            natureType, 
            classification,
            family
        );
    } catch (error) {
        console.error('Error al insertar personaje:', error);
    }
}

let id = 0;

// Obtener y guardar los datos
for (let i = 1; i <= totalPage; i++) {
    console.log(`Obteniendo datos de la página ${i}...`);
    const characters = await getData(i);
    
    if (characters && Array.isArray(characters)) {
        for (const character of characters) {
          const name = character.name;
          const image = character.images?.[1] || character.images?.[0];
          let sex = character.personal?.sex || null;
					if (sex === 'Male') {
						sex = 'Masculino';
					} else if (sex === 'Female')
						sex = 'Femenino';
          const age = character.personal?.age?.['Part II'] || character.personal?.age?.['Part I'] || null;
					let ageFormatter = age;
					if (isNaN(age)) {
						ageFormatter =  age.split('–')[1];
					}
          let occupation = character.personal?.occupation|| null;
          const clan = character.personal?.clan || null;
          const debut = character.debut?.anime || null;
          const state = character.personal.status === 'Deceased' ? 'Muerto' : 'Vivo';
          const natureType = JSON.stringify(character.natureType) || null;
          let classification = character?.personal?.classification;

					if (classification instanceof Array) {
						classification = classification[0];
					}
					if (occupation instanceof Array) {
						occupation = occupation[0];
					}

          const family = JSON.stringify(character?.family) || null;

          insertCharacter({
            id,
            name,
            image,
            sex,
            ageFormatter,
            occupation,
            clan,
            debut,
            state,
            natureType,
            classification,
            family,
          });
         
          id++
        }
    }
    
    console.log(`Página ${i} completada`);
}

console.log('Base de datos creada y poblada exitosamente');
