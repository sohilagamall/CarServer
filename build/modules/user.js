"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddnewUser = AddnewUser;
exports.GetUser = GetUser;
exports.removeUser = removeUser;
let users = [];
let interests = [];
let userindx = 1;
function AddnewUser(req, res) {
    const name = req.body.name;
    const age = req.body.age;
    if (name !== undefined && age !== undefined) {
        const newuser = {
            name: name,
            age: age,
            id: userindx++
        };
        users.push(newuser);
        res.status(200).json("added successfully");
    }
    else
        res.status(404).json({ message: "name and age are Required!" });
}
function GetUser(req, res) {
    const id = parseInt(req.params.id);
    const getuser = users.find((b) => b.id === id);
    if (getuser)
        res.status(200).json(getuser);
    else
        res.status(404).json({ message: "user not found" });
}
function removeUser(req, res) {
    const id = parseInt(req.params.id);
    const Uidx = users.findIndex((b) => b.id === id);
    if (Uidx !== -1) {
        const deleteduser = users.splice(Uidx, 1)[0];
        // removing the users' interests
        interests = interests.filter(interest => interest.userID !== id);
        res.status(200).json({ message: "user deleted successfully", user: deleteduser });
    }
    else
        res.status(404).json({ message: "User not found!" });
}
