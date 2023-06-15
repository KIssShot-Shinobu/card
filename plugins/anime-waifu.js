import axios from 'axios';

const handler = async (m, { conn }) => {
  try {
    const response = await axios.get('https://kyoko.rei.my.id/api/sfw.php');
    const imageUrl = response.data.apiResult.url[0];

    await conn.sendFile(m.chat, imageUrl, 'sfw_image.png', '', m);
  } catch (error) {
    console.log(error);
    await conn.sendMessage(m.chat, 'Terjadi kesalahan dalam mendapatkan gambar SFW.', { quoted: m });
  }
};

handler.tags = ['tools'];
handler.command = /^(waifu|w)$/i;

export default handler;
