const handler = async (m, { conn }) => {
            
   //const cardImageUrl = 'https://i.postimg.cc/TYzzD97s/Screenshot-9.png';
   const caption = `Group 2
Rounde 5
#5-1
[DS] Tahumil vs [DS] KissShot

#5-2
[DS]Darkly44 vs [DS]Roronoa

#5-3
[DS]Y∅uth vs [DS]Alroy

#5-4
Xanxus[DS] vs Reinryusan

#5-5
[DS]Shthana vs [DS] W I L S

#5-6
[DS]Scaletta vs Ki[DS]

#5-7
Tear vs [DS]Rexia
`;

     await m.reply(caption)
    //await conn.sendFile(m.chat, cardImageUrl, 'card_image.png', caption, m);
  
};

handler.tags = ['tools'];
handler.command = /^(duelg2)$/i;

export default handler;
