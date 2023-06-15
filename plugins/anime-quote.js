import axios from 'axios';
import { MessageType } from '@adiwajshing/baileys';

const handler = async (m, { conn }) => {
  try {
    const response = await axios.get('https://kyoko.rei.my.id/api/quotes.php');
    const { quote, author } = response.data;

    const message = `Quote:\n${quote}\n\nAuthor: ${author}`;

    const buttons = [
      { buttonId: 'next', buttonText: { displayText: 'Next' }, type: 1 },
    ];

    const buttonMessage = {
      contentText: message,
      footerText: 'Next Quote',
      buttons,
      headerType: 1,
    };

    await conn.sendMessage(m.chat, buttonMessage, MessageType.buttons, { quoted: m });

  } catch (error) {
    console.log(error);
    await conn.sendMessage(m.chat, 'Terjadi kesalahan dalam mendapatkan quote.', MessageType.text, { quoted: m });
  }
};

handler.command = /^(quote|q)$/i;

export default handler;
