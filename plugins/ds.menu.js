const handler = async (m, { conn }) => {
            
   const caption = `Duel Standby Menu
- .card (pencarian kartu)
- .id (pencarian kartu berdasarkan id)
- .c (pencarian nama kartu)
- .art (Art Kartu)
- .ef/effect (pencarian effect kartu)

Silahkan Tag Bot untuk saran dan masukan. 
   
   `;

    await m.reply(caption)
    //await conn.sendFile(m.chat, cardImageUrl, 'card_image.png', caption, m);
  
};

handler.tags = ['tools'];
handler.command = /^(ygom|ygo)$/i;

export default handler;
