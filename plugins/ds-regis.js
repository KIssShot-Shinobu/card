const fs = require('fs-extra');

const dbFilePath = './db/dl.json';

const addTournamentParticipant = (userId, inGameName, realName, _dir) => {
  const obj = { userId, inGameName, realName };
  _dir.push(obj);
  fs.writeFileSync(dbFilePath, JSON.stringify(_dir));
};

const handler = async (m, { conn, text }) => {
  if (!text.includes('|')) {
    conn.sendMessage(m.chat, 'Invalid format! Please use the format: .regis [In-Game Name] | [Real Name]', m);
    return;
  }

  const [inGameName, realName] = text.split('|').map((item) => item.trim());

  const jsonData = fs.existsSync(dbFilePath) ? fs.readFileSync(dbFilePath) : '[]';
  const participants = JSON.parse(jsonData);

  const isParticipantRegistered = participants.some((participant) => participant.userId === m.sender);
  if (isParticipantRegistered) {
    conn.sendMessage(m.chat, 'You are already registered for the tournament!', m);
    return;
  }

  addTournamentParticipant(m.sender, inGameName, realName, participants);

  conn.sendMessage(m.chat, 'You have been successfully registered for the tournament!', m);
};

handler.tags = ['tools'];
handler.command = /^(regis)$/i;


export default handler;
