

const handler = async (m, { conn }) => {
            
   const cardImageUrl = 'https://instagram.fcgk30-1.fna.fbcdn.net/v/t51.2885-15/353623111_626071232786437_5541812924201012154_n.webp?stp=dst-jpg_e35&_nc_ht=instagram.fcgk30-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=8qfJcsp1rhcAX9QLFR3&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzEyNDc5MjQ1ODc3NjMzMjY3OQ%3D%3D.2-ccb7-5&oh=00_AfAXUbOpKjFbQuXk_4sZtoSq5et52w0at9tkoivntOc-bQ&oe=648FBEBB&_nc_sid=640168';
   const caption = `DS Tournament with Clover
Battle of Waifu
Duel Link

Hallo Duelist!

Tournament DS kembali hadir. Kali ini kami ditemani oleh salah satu Guild baru asal Indonesia yaitu Guild Clover

1st 300k
2nd 150k

Start Senin 

Format 
Clan Wars
3on3
Random Team

So tunggu apalagi langsung saja join General DS untuk registnya

Link: https://chat.whatsapp.com/F4b37sylfaT2wry6STXDzx

Duel Standby
United&Strong`;


    await conn.sendFile(m.chat, cardImageUrl, 'card_image.png', caption, m);
  
};

handler.tags = ['tools'];
handler.command = /^(ds)$/i;

export default handler;
