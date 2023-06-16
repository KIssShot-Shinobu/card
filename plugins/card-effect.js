import axios from 'axios';

let handler = async (m, { conn, text }) => {
  let query = text ? text : m.quoted?.text ? m.quoted.text : '';
  console.log(query);
  console.log(!isNaN(query));

  try {
    if (!query) {
      await conn.sendMessage(
        m.chat,
        { text: 'Gunakan perintah dengan benar\n.ef/effect [Nama Kartu]' },
        { quoted: m }
      );
      return;
    }

    let endpoint = '';
    if (!isNaN(query)) {
      endpoint = `https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${encodeURIComponent(
        query
      )}`;
    } else {
      endpoint = `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${encodeURIComponent(
        query
      )}`;
    }

    const response = await axios.get(endpoint);
    const data = response.data;

    if (data?.data?.length > 0) {
      if (data.data.length === 1) {
        const card = data.data[0];
        const cardName = card.name;
        const cardEffect = card.desc;
        const cardRace = card.race;

        await conn.sendMessage(
          m.chat,
          {
            text: `Card Name: ${cardName}\nCard Type: ${cardRace}\n\nCard Effect:\n${cardEffect}`,
          },
          { quoted: m }
        );
      }
    } else {
      await conn.sendMessage(
        m.chat,
        { text: 'Card not found.' },
        { quoted: m }
      );
    }
  } catch (error) {
    console.log('endpoint pertama gagal');
    try {
      const endpoint = `https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${encodeURIComponent(
        query
      )}`;
      const response = await axios.get(endpoint);
      const data = response.data;

      if (data?.data?.length > 0) {
        if (data.data.length === 1) {
          const card = data.data[0];
          const cardName = card.name;
          const cardEffect = card.desc;
          const cardRace = card.race;

          await conn.sendMessage(
            m.chat,
            {
              text: `Card Name: ${cardName}\nCard Type: ${cardRace}\n\nCard Effect:\n${cardEffect}`,
            },
            { quoted: m }
          );
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
        { text: 'Pastikan nama/id kartu yang anda cari benar' },
        { quoted: m }
      );
    }
  }
};

handler.tags = ['tools'];
handler.command = /^(ef|effect)$/i;

export default handler;
