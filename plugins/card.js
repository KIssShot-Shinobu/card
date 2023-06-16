import axios from 'axios';

const handler = async (m, { conn, text }) => {
  const query = text || m.quoted?.text || '';

  try {
    if (query === undefined || query === '') {
      await conn.sendMessage(
        m.chat,
        { text: 'Gunakan perintah dengan benar\n.card [nama kartu]' },
        { quoted: m }
      );
    } else {
      const endpoint = `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${encodeURIComponent(
        query
      )}`;
      const response = await axios.get(endpoint);
      const data = response.data;

      if (data?.data?.length > 0) {
        const cardInfo = data.data[0];

        if (cardInfo.card_images?.length > 0) {
          const randomIndex = Math.floor(
            Math.random() * cardInfo.card_images.length
          );
          const cardImageUrl = cardInfo.card_images[randomIndex].image_url;

          await conn.sendFile(m.chat, cardImageUrl, 'card_image.png', '', m);
        } else {
          await conn.sendMessage(
            m.chat,
            { text: 'Kartu tidak memiliki gambar.' },
            { quoted: m }
          );
        }
      } else {
        await conn.sendMessage(
          m.chat,
          { text: 'Kartu tidak ditemukan.' },
          { quoted: m }
        );
      }
    }
  } catch (error) {
    try {
      const endpoint = `https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${encodeURIComponent(
        query
      )}`;
      const response = await axios.get(endpoint);
      const data = response.data;

      if (data?.data?.length > 0) {
        if (data.data.length === 1) {
          const cardInfo = data.data[0];

          if (cardInfo.card_images?.length > 0) {
            const randomIndex = Math.floor(
              Math.random() * cardInfo.card_images.length
            );
            const cardImageUrl = cardInfo.card_images[randomIndex].image_url;

            await conn.sendFile(m.chat, cardImageUrl, 'card_image.png', '', m);
          } else {
            await conn.sendMessage(
              m.chat,
              { text: 'Kartu tidak memiliki gambar.' },
              { quoted: m }
            );
          }
        } else {
          const cardNames = data.data.map((card) => card.name);
          const formattedCardList = cardNames.join('\n');

          await conn.sendMessage(
            m.chat,
            {
              text: `Berikut adalah beberapa kartu dengan nama serupa:\n\n${formattedCardList}`,
            },
            { quoted: m }
          );
        }
      } else {
        await conn.sendMessage(
          m.chat,
          { text: 'Kartu tidak ditemukan.' },
          { quoted: m }
        );
      }
    } catch (error) {
      console.log(error);
      await conn.sendMessage(
        m.chat,
        { text: 'Namar kartu yang anda masukan salah.' },
        { quoted: m }
      );
    }
  }
};

handler.tags = ['tools'];
handler.command = /^(card)$/i;

export default handler;
