import axios from 'axios';

const handler = async (m, { conn, text }) => {
  const query = text || m.quoted?.text || '';

  try {
    if (query === undefined || query === '') {
      await conn.sendMessage(m.chat, { text: 'Gunakan perintah dengan benar\n.card [ID kartu]' }, { quoted: m });
    } else {
      const endpoint = `https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${encodeURIComponent(query)}`;
      const response = await axios.get(endpoint);
      const data = response.data;

      if (data?.data?.length > 0) {
        const cardInfo = data.data[0];

        if (cardInfo.card_images?.length > 0) {
          const randomIndex = Math.floor(Math.random() * cardInfo.card_images.length);
          const cardImageUrl = cardInfo.card_images[randomIndex].image_url;

          await conn.sendFile(m.chat, cardImageUrl, 'card_image.png', '', m);
        } else {
          await conn.sendMessage(m.chat, { text: 'Kartu tidak memiliki gambar.' }, { quoted: m });
        }
      } else {
        await conn.sendMessage(m.chat, { text: 'Kartu tidak ditemukan.' }, { quoted: m });
      }
    }
  } catch (error) {
    console.log(error);
    const pesan = `Kartu dengan ID ${query} tidak ditemukan. Silahkan coba mencari dengan nama kartu.\n.card [nama kartu]`;
    await conn.sendMessage(m.chat, { text: pesan}, { quoted: m });
  }
};

handler.tags = ['tools'];
handler.command = /^(id?)$/i;

export default handler;
