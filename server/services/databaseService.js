// backend/services/databaseService.js
const pool = require('../config/database');

class DatabaseService {
  // Récupérer tous les personnages
  async getAllCharacters() {
    try {
      const [rows] = await pool.execute('SELECT * FROM characters');
      return rows;
    } catch (error) {
      throw error;
    }
  }

  // Récupérer un personnage par ID
  async getCharacterById(id) {
    try {
      const [rows] = await pool.execute(
        'SELECT * FROM characters WHERE id = ?', 
        [id]
      );
      return rows[0];
    } catch (error) {
      throw error;
    }
  }

  // Ajouter un nouveau personnage
  async createCharacter(character) {
    try {
      const { name, title, image, description, abilities, role } = character;
      const [result] = await pool.execute(
        `INSERT INTO characters (name, title, image, description, abilities, role) 
         VALUES (?, ?, ?, ?, ?, ?)`,
        [name, title, image, description, JSON.stringify(abilities), role]
      );
      return result.insertId;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new DatabaseService();