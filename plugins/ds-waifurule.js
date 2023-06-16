const handler = async (m, { conn }) => {
  //const cardImageUrl = 'https://i.postimg.cc/TYzzD97s/Screenshot-9.png';
  const caption = `*Rules Tournament*
*Battle Of Waifu*


*Format Battle Of Waifu*
Group (8 Group)
Play off (16 Team)
Clan Wars (1 Round)
Best of 3

*About Battle of Waifu*
1. TAB di lock sampe TOP 8
2. Deck Bebas (Bisa Ganti Ganti)
3. New Banlist Konami

*About Time*
1. Main tidak perlu bersama
2. Bisa janjian dengan lawan masing-masing
3. Default 20:00 

*About Pinalti*
1. 24 Jam Player tidak ada kabar akan di ganti  dengan Waiting List
2. Lawan tidak ada Respon 20:30 Bisa Take Win
3. Lawan tidak ada kabar 30 menit setelah waktu janji Bisa take win

*Semua keputusan panitia adalah mutlak*

*Duel Standby*
United&Strong
`;

  await m.reply(caption);
  //await conn.sendFile(m.chat, cardImageUrl, 'card_image.png', caption, m);
};

handler.tags = ['tools'];
handler.command = /^(waifurule)$/i;

export default handler;
