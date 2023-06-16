const handler = async (m, { conn }) => {
  const cardImageUrl = 'https://i.postimg.cc/TYzzD97s/Screenshot-9.png';
  const caption = `DS Tournament
Special Structure Deck

kamis, 15-06-2023
Rounde 5
Room : *19178*
`;

  await conn.sendFile(m.chat, cardImageUrl, 'card_image.png', caption, m);
};

handler.tags = ['tools'];
handler.command = /^(room)$/i;

export default handler;
