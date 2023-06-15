const handler = async (m, { conn }) => {
            
   //const cardImageUrl = 'https://i.postimg.cc/TYzzD97s/Screenshot-9.png';
   const caption = `Group 1
Rounde 5

#5-1
[DS] Arcy vs {(Hilman)}

#5-2
Reizee vs Alyzter

#5-3
[DS] Misplay vs [DS]LAZYLYNX 

#5-4
[DS] Ayzeo vs [DS]ZarC 

#5-5
[DS] Sybe vs Ikan 

#5-6
[DS]Z3R0 vs [DS]Antun

#5-7
Nirmana vs [DS] Uru
`;

     await m.reply(caption)
    //await conn.sendFile(m.chat, cardImageUrl, 'card_image.png', caption, m);
  
};

handler.tags = ['tools'];
handler.command = /^(duelg1)$/i;

export default handler;
