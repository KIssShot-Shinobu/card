import axios from 'axios';

const handler = async (m, { conn }) => {
  try {
    const endpoint = 'https://db.ygoprodeck.com/api/v7/randomcard.php';
    const response = await axios.get(endpoint);
    const cardData = response.data;

    if (cardData) {
      const cardName = cardData.name;
      const cardType = cardData.type;
      const cardEffect = cardData.desc;
      const cardRace = cardData.race;
      const cardImage = cardData.card_images[0].image_url;

//       const message = `Card Name: ${cardName}
// Card Type: ${cardType}
// Card Race: ${cardRace}
// Card Effect: ${cardEffect}
// `;

      await conn.sendFile(m.chat, cardImage, 'card_image.png', '', m);
    } else {
      await conn.sendMessage(m.chat, { text: 'Failed to fetch a random card.' }, { quoted: m });
    }
  } catch (error) {
    console.log(error);
    await conn.sendMessage(m.chat, { text: 'An error occurred while fetching the random card.' }, { quoted: m });
  }
};

handler.tags = ['tools'];
handler.command = /^(.cardrandom|cardr)$/i;

export default handler;
