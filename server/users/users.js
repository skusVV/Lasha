const { readFileSync, writeFile } = require("fs");

const readUsers = () => {
  const data = readFileSync("./users/users.json");

  return JSON.parse(data);
};

const writeUser = (user) => {
  const users = readUsers();
  const newUsers = [...users, user];
  writeFile("./users.json", JSON.stringify(newUsers), (err) => {
    if (err) {
      console.log("[USERS] Failed to write updated data to file");
      return;
    }
    console.log("[USERS] Updated file successfully");
  });
};

const usersRouter = (app) => {
  app.get("/api/users", (req, res) => {
    const users = readUsers();

    return res.send(users);
  });

  app.post("/api/users", (req, res) => {
    const { body } = req;
    const users = readUsers();

    const alreadyExist = users.find(
      (item) => item.personGmail === body.personGmail
    );

    if (alreadyExist) {
      return res.status(404).end();
    }
    // It should also have a validation.
    const user = {
      id: users.length + 1,
      personName: body.personName,
      personSurname: body.personSurname,
      personPhone: body.personPhone,
      personGmail: body.personGmail,
      personPassword: body.personPassword,
      role: body.role, //TODO It is not ok to save ppassword un-encrypted
    };
    // WE should check if there is such user or not.
    writeUser(user);

    return res.send(user);
  });

  app.post("/api/login", (req, res) => {
    const { body } = req;
    const users = readUsers();
    const user = users.find((item) => item.personGmail === body.email);

    if (user.personPassword !== body.password) {
      return res.send({ isLogged: false });
    }

    return res.send({
      isLogged: true,
      name: user.personName,
      lastName: user.personSurname,
      phone: user.personPhone,
      email: user.personGmail,
      id: user.id,
      role: user.role,
    });
  });

  app.get("/api/adminPanel", (req, res) => {
    const { role } = req.query;
    if (!role || role !== "Admin") {
      return res.status(403).send("Unauthorized");
    }
    console.log("Hello Admin");
    res.send("Admin panel accessed successfully");
  });
};

module.exports = { usersRouter, readUsers };
