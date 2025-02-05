const sql = require('mssql');
const { poolPromise } = require('../data/db');

const getAllTaverns = async function(req, res) {
    res.setHeader('ContentType', 'application/json');
    let taverns;

    const pool = await poolPromise;

    try {
        taverns = await pool
            .request()
            .query('SELECT tavernName, ID FROM Taverns');
        taverns = taverns.recordset;
    }
    catch (error) {
        returnError(res, error, 500);
    }

    returnSuccessResponse(res, taverns);
};

module.exports.getAllTaverns = getAllTaverns;

const getMyTaverns = async function (req, res) {
    res.setHeader('ContentType', 'application/json');
    let myTaverns;
    console.log(req.user)

    const pool = await poolPromise;

    try {
        myTaverns = await pool
            .request()
            .input('tavernID', sql.VarChar, req.user.TavernID)
            .query('select * from Taverns where ID = @tavernID');
        myTaverns = myTaverns.recordset.shift();
    }
    catch (error) {
        returnError(res, error, 500);
    }

    returnSuccessResponse(res, myTaverns)
}

module.exports.getMyTaverns = getMyTaverns;

const getTavernRooms = async function (req, res) {
    res.setHeader('ContentType', 'application/json');
    let tavernRooms;

    const pool = await poolPromise;

    try {
        tavernRooms = await pool
            .request()
            .input('tavernID', sql.VarChar, req.user.TavernID)
            .query('SELECT * FROM Rooms WHERE TavernID = @tavernID');
        tavernRooms = tavernRooms.recordset;
    }
    catch (error) {
        returnError(res, error, 500);
    }

    returnSuccessResponse(res, tavernRooms);
}
module.exports.getTavernRooms = getTavernRooms;

const getTavernRoom = async function (req, res) {
    res.setHeader('ContentType', 'application/json');
    let tavernRoom;

    console.log(req.body)
    
    const pool = await poolPromise;

    try {
        tavernRoom = await pool
            .request()
            .input('tavernID', sql.VarChar, req.user.TavernID)
            .input('roomID', sql.Int, req.body.id)
            .query('SELECT * FROM Rooms WHERE TavernID = @tavernID');
        tavernRoom = tavernRoom.recordset;
    }
    catch (error) {
        returnError(res, error, 500);
    }

    returnSuccessResponse(res, tavernRoom);
}
module.exports.getTavernRoom = getTavernRoom;

const getTavernGuests = async function (req, res) {
    res.setHeader('ContentType', 'application/json')
    let tavernGuests;

    const pool = await poolPromise;

    try {
        tavernGuests = await pool
            .request()
            .query('SELECT ID, GuestName FROM Guests');
        tavernGuests = tavernGuests.recordset;
    }
    catch (error) {
        returnError(res, error, 500);
    }

    returnSuccessResponse(res, tavernGuests);
}
module.exports.getTavernGuests = getTavernGuests;