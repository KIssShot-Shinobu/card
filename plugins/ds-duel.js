const handler = async (m, { conn }) => {
  //const cardImageUrl = 'https://i.postimg.cc/TYzzD97s/Screenshot-9.png';
  const caption = `Jadwal Battle Of Waifu
Day 1

Grup A
1.Ghost Belle vs Ash Blossom
2.Ghost Ogre vs Ghost Reaper

Group B
1.Daki vs Ghost Sister
2.Yuki Ona vs Ghost Mourner

Group C
1.Kagari vs Underwrold Goddes
2.Rulkalos vs Lovely Labrynt

Group D
1.Dark Magician Girl vs Masquerena
2.Appolousa vs Selene

Group E
1.Every vs Verre
2.Puddingcess vs Luna

Group F
1.Springgas Kitt vs Iris Swordsoul
2.Ecclesia vs Laundry Dragonmaid

Group G
1.Blazing Cartesia vs Marincess
2.Rikka Queen vs Silent Magician

Group H
1.Spiritual Beast Tamer Winda vs Darklord ixchel
2.Winda Gusto vs Winter Painter
`;

  await m.reply(caption);
  //await conn.sendFile(m.chat, cardImageUrl, 'card_image.png', caption, m);
};

handler.tags = ['tools'];
handler.command = /^(duel)$/i;

export default handler;
