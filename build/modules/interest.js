"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUserInterest = addUserInterest;
exports.GetAllInterests = GetAllInterests;
let interests = [];
let users = [];
function addUserInterest(req, res) {
    const userID = parseInt(req.body.userID);
    const carID = parseInt(req.body.carID);
    const user = users.find((b) => b.id === userID);
    if (user) {
        const newinterest = {
            userID: userID,
            carID: carID
        };
        interests.push(newinterest);
        res.status(200).json({ message: "Interest added" });
    }
    else
        res.status(404).json({ message: "Invalid ID" });
}
function GetAllInterests(req, res) {
    const userid = parseInt(req.params.id);
    if (userid === undefined)
        res.status(400).json({ message: "invalide ID format" });
    const UserInterest = interests.filter((b) => b.userID === userid);
    res.status(200).json(UserInterest);
}
