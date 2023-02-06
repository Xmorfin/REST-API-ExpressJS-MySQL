const dbPool = require("../config/database");

// MYSQL READ
const getAllUsers = () => {
  const SQLQuery = "SELECT * FROM users";

  return dbPool.execute(SQLQuery);
};

// MYSQL CREATE
const createNewUser = (body) => {
  const SQLQuery = `INSERT INTO users (name, email, address) 
                    VALUE ('${body.name}', '${body.email}', '${body.address}' )`;
  return dbPool.execute(SQLQuery);
};

// MYSQL UPDATE
const updateUser = (body, idUser) => {
  const SQLQuery = `UPDATE users 
                    SET name='${body.name}', email='${body.email}', address='${body.address}' 
                    WHERE id=${idUser}`;
  return dbPool.execute(SQLQuery);
};

// MYSQL DELETE
const deleteUser = (idUser) => {
  const SQLQuery = `DELETE FROM users WHERE id=${idUser}`;

  return dbPool.execute(SQLQuery);
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
