const AppError = require("../utils/AppError");
const sqliteConnection = require("../database/sqlite");

class RegisterController {
  async create(request, response) {
    const { document, name, email, apartmentBlock, phone, register } =
      request.body;

    const database = await sqliteConnection();
    const checkUserExists = await database.get(
      "SELECT * FROM users WHERE document = ?",
      [document]
    );

    if (checkUserExists) {
      throw new AppError("Este documento já está em uso");
    }

    await database.run(
      "INSERT INTO users (document, name, email, apartmentBlock, phone, register) VALUES (?, ?, ?, ?, ?, ?)",
      [document, name, email, apartmentBlock, phone, register]
    );

    return response.status(201).json();
  }

  async update(request, response) {
    const { document, name, email, apartmentBlock, phone, register } =
      request.body;

    const database = await sqliteConnection();
    const userDocument = await database.get(
      "SELECT * FROM users WHERE document = ?",
      [document]
    );

    if (!userDocument) {
      throw new AppError("Usuário não encontrado");
    }

    const userWithUpdatedEmail = await database.get(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    if (userWithUpdatedEmail && userWithUpdatedEmail.id !== userDocument.id) {
      throw new AppError("Este e-mail já está em uso");
    }

    userDocument.name = name ?? user.name;
    userDocument.email = email ?? user.email;
    userDocument.apartmentBlock = apartmentBlock ?? user.apartmentBlock;
    userDocument.phone = phone ?? user.phone;
    userDocument.register = register ?? user.register;

    await database.run(
      `
      UPDATE users SET
      name = ?,
      email = ?,
      apartmentBlock = ?,
      phone = ?,
      register = ?,
      updated_at = DATETIME('now')
      WHERE document = ?`,
      [
        userDocument.name,
        userDocument.email,
        userDocument.apartmentBlock,
        userDocument.phone,
        userDocument.register,
        userDocument.document,
      ]
    );

    return response.status(200).json();
  }

  async show(request, response) {
    const { document } = request.params;

    const database = await sqliteConnection();
    const showUser = await database.get(
      "SELECT * FROM users WHERE document = ?",
      [document]
    );

    if (!showUser) {
      throw new AppError("Não existe esse documento cadastrado");
    }

    return response.status(200).json(showUser);
  }

  async delete(request, response) {
    const { document } = request.params;

    const database = await sqliteConnection();
    const deleteUser = await database.get(
      "SELECT * FROM users WHERE document = ?",
      [document]
    );

    if (!deleteUser) {
      throw new AppError("Não existe esse documento cadastrado");
    }

    await database.run("DELETE FROM users WHERE document = ?", [document]);

    return response.json();
  }
}

module.exports = RegisterController;
