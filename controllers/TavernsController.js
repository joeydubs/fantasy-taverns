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
