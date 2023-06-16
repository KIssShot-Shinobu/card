import axios from 'axios';

let handler = async (m, { conn, text }) => {
  let query = text ? text : m.quoted?.text ? m.quoted.text : '';

  try {
    const endpoint = `https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${encodeURIComponent(
      query
    )}`;
    const response = await axios.get(endpoint);
    const data = response.data;

    if (data?.data?.length > 0) {
      const cardNames = data.data.map((card) => card.name);
      const formattedCardList = cardNames.join('\n');

      console.log('format: ' + formattedCardList);

      await conn.sendMessage(
        m.chat,
        {
          text: `Berikut adalah beberapa kartu dengan nama serupa:\n\n${formattedCardList}`,
        },
        { quoted: m }
      );
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
      { text: 'Pastikan nama kartu yang anda cari benar' },
      { quoted: m }
    );
  }
};

handler.tags = ['tools'];
handler.command = /^(c)$/i;

export default handler;
