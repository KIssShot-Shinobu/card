const handler = async (m, { conn }) => {
            
   //const cardImageUrl = 'https://i.postimg.cc/TYzzD97s/Screenshot-9.png';
   const caption = `Link Bracket
DS Tournament

Special Structure Deck
Group 1 : https://tonamel.com/competition/oCQNN
Group 2 : https://tonamel.com/competition/bCt38
   `;

    await m.reply(caption)
    //await conn.sendFile(m.chat, cardImageUrl, 'card_image.png', caption, m);
  
};

handler.tags = ['tools'];
handler.command = /^(bracket)$/i;

export default handler;
