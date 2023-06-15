

const handler = async (m, { conn }) => {
            
   const cardImageUrl = 'https://iili.io/H44A0wN.png';
   const caption = `DS Tournament\n\nSpecial Structure Deck\n\nSelamat Siang Duelist. DS Tournamennt kembali hadir dengan format berbeda. Kali ini format yang digunakan adalah Structure Deck. Player hanya boleh menggunakan Card yang berada di Structure Deck!\n\nStart Minggu - Selesai\n\n1st 100k\n2nd 50k\n\nFormat Permainan\nSwiss Round 5\nPlay off (TOP 4)\nBest of 3\nCoin Default\n\nWaktu Permainan\nDefault 20:00 Nego\n1 Round / Day\n\nRegister\nMengisi List Partisipan\nKomitmen\nhttps://chat.whatsapp.com/F4b37sylfaT2wry6STXDzx\n\nDuel Standby\nUnited&Strong`;


    await conn.sendFile(m.chat, cardImageUrl, 'card_image.png', caption, m);
  
};

handler.tags = ['tools'];
handler.command = /^(ds)$/i;

export default handler;
