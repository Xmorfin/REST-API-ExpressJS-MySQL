const UsersModel = require("../models/users");

//FUNCTION READ
const getAllUsers = async (req, res) => {
  try {
    const [data] = await UsersModel.getAllUsers();
    res.json({
      message: "GET all users success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server ERROR",
      serverMessage: error,
    });
  }
};

//FUNCTION CREATE
const createNewUser = async (req, res) => {
  const { body } = req;

  //Validation
  if (!body.name || !body.email || !body.address) {
    return res.status(400).json({
      message: "Anda memasukkan data yang salah",
      data: null,
    });
  }

  try {
    await UsersModel.createNewUser(body);
    res.status(201).json({
      message: "CREATE new user success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Failed",
      serverMassage: error,
    });
  }
};

//FUNCTION UPDATE
const updateUser = async (req, res) => {
  const { idUser } = req.params;
  const { body } = req;

  try {
    await UsersModel.updateUser(body, idUser);
    res.json({
      message: "UPDATE user success",
      data: {
        id: idUser,
        ...body,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Failed",
      serverMassage: error,
    });
  }
};

//FUNCTION DELETE
const deleteUser = async (req, res) => {
  const { idUser } = req.params;

  try {
    await UsersModel.deleteUser(idUser);
    res.json({
      message: "DELETE user success",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Failed",
      serverMassage: error,
    });
  }
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
