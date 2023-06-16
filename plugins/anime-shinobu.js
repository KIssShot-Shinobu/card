import axios from 'axios';

const handler = async (m, { conn }) => {
  try {
    const response = await axios.get('https://waifu.pics/api/sfw/shinobu');
    const imageUrl = response.data.url;

    await conn.sendFile(m.chat, imageUrl, 'sfw_image.png', '', m);
  } catch (error) {
    console.log(error);
    await conn.sendMessage(
      m.chat,
      'An error occurred while fetching the SFW image.',
      { quoted: m }
    );
  }
};

handler.tags = ['tools'];
handler.command = /^(shinobu)$/i;

export default handler;
