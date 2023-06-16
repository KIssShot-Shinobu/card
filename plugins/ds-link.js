import axios from 'axios';

const handler = async (m, { conn }) => {
  try {
    const endpoint = 'https://db.ygoprodeck.com/api/v7/randomcard.php';
    const response = await axios.get(endpoint);
    const cardData = response.data;

    if (cardData) {
      const cardImage = cardData.card_images[0].image_url;

      const generalDS = 'https://chat.whatsapp.com/F4b37sylfaT2wry6STXDzx';
      const discordDS = 'https://discord.gg/FEZNRQUv9H';
      const youtubeDS = 'https://www.youtube.com/@duellinksC';
      const instagram = 'https://www.instagram.com/duelstandbyofficial/';

      const messages = `⇲⇱⇲⇱ Duel Standby Link ⇲⇱⇲⇱
      
Kindly consider following our social media platforms.
▭▭▭▭▭▭▭▭▭▭▭▭▭▭
🃏 WhatsApp General DS: ${generalDS}
🎮 Discord: ${discordDS}
🎞 YouTube: ${youtubeDS}
🖼 Instagram: ${instagram}
▭▭▭▭▭▭▭▭▭▭▭▭▭▭

Duel Standby 
United & Strong`;

      await conn.sendFile(m.chat, cardImage, 'card_image.png', messages, m);
    } else {
      await conn.sendMessage(
        m.chat,
        { text: 'Failed to fetch a random card.' },
        { quoted: m }
      );
    }
  } catch (error) {
    console.log(error);
    await conn.sendMessage(
      m.chat,
      { text: 'An error occurred while fetching the random card.' },
      { quoted: m }
    );
  }
};

handler.tags = ['tools'];
handler.command = /^(dslink|dsl)$/i;

export default handler;
