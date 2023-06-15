import axios from 'axios';

const handler = async (m, { conn }) => {
  try {
    const response = await axios.get('https://kyoko.rei.my.id/api/blush.php');
    const gifUrl = response.data.apiResult.url[0];

    await conn.sendFile(m.chat, gifUrl, 'blush_gif.gif', '', m);
  } catch (error) {
    console.log(error);
    await conn.sendMessage(m.chat, 'Terjadi kesalahan dalam mendapatkan gambar Blush.', { quoted: m });
  }
};

handler.tags = ['tools'];
handler.command = /^(blush)$/i;

export default handler;
