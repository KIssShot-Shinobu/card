const fs = require('fs-extra');

/**
 * Add a tournament participant to the database.
 * @param {string} userId
 * @param {string} name
 * @param {string} ign
 * @param {object} _dir
 */
const addTournamentParticipant = (userId, name, ign, _dir) => {
    const obj = { id: userId, name: name, ign: ign };
    _dir.push(obj);
    fs.writeFileSync('./db/dl.json', JSON.stringify(_dir));
};

/**
 * Check if a user is registered as a tournament participant.
 * @param {string} userId
 * @param {object} _dir
 * @returns {boolean}
 */
const checkParticipantRegistered = (userId, _dir) => {
    let status = false;
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            status = true;
        }
    });
    return status;
};

/**
 * Check if there is a tournament participant with a specific IGN.
 * @param {string} ign
 * @param {object} _dir
 * @returns {boolean}
 */
const checkParticipantFromIGN = (ign, _dir) => {
    let status = false;
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].ign === ign) {
            status = true;
        }
    });
    return status;
};

/**
 * Get the tournament participant's ID.
 * @param {string} userId
 * @param {object} _dir
 * @returns {string}
 */
const getParticipantId = (userId, _dir) => {
    let position = null;
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i;
        }
    });
    if (position !== null) {
        return _dir[position].id;
    }
}

/**
 * Get the participant's name from IGN.
 * @param {string} ign
 * @param {object} _dir
 * @returns {string}
 */
const getNameFromIGN = (ign, _dir) => {
    let position = null;
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].ign === ign) {
            position = i;
        }
    });
    if (position !== null) {
        return _dir[position].name;
    }
};

/**
 * Get the WhatsApp number of the tournament participant from IGN.
 * @param {string} ign
 * @param {object} _dir
 * @returns {string}
 */
const getWhatsAppFromIGN = (ign, _dir) => {
    let position = null;
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].ign === ign) {
            position = i;
        }
    });
    if (position !== null) {
        return _dir[position].whatsapp;
    }
};

/**
 * Get the ID of the tournament participant from IGN.
 * @param {string} ign
 * @param {object} _dir
 * @returns {string}
 */
const getIdFromIGN = (ign, _dir) => {
    let position = null;
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].ign === ign) {
            position = i;
        }
    });
    if (position !== null) {
        return _dir[position].id;
    }
};

/**
 * Get a random user ID from the tournament participant data.
 * @param {object} _dir
 * @returns {string}
 */
const getRandomId = (_dir) => {
    return _dir[Math.floor(Math.random() * _dir.length)].id;
};

/**
 * Get the position of the tournament participant based on the user ID.
 * @param {string} userId
 * @param {object} _dir
 * @returns {number}
 */
const getParticipantPosition = (userId, _dir) => {
    let position = null;
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i;
        }
    });
    return position;
};

module.exports = {
    addTournamentParticipant,
    checkParticipantRegistered,
    checkParticipantFromIGN,
    getNameFromIGN,
    getWhatsAppFromIGN,
    getIdFromIGN,
    getRandomId,
    getParticipantId,
    getParticipantPosition,
};
