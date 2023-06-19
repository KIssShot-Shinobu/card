import axios from 'axios';
import cheerio from 'cheerio';

const handler = async (m, { conn, text }) => {
  const query = text || (m.quoted && m.quoted.text) || '';

  const cardName = query.trim().split(' ').join('+');
  const url = `https://www.db.yugioh-card.com/yugiohdb/card_search.action?ope=1&sess=1&rp=10&mode=&sort=1&keyword=${cardName}&stype=1&ctype=&othercon=2&starfr=&starto=&pscalefr=&pscaleto=&linkmarkerfr=&linkmarkerto=&link_m=2&atkfr=&atkto=&deffr=&defto=`;

  try {
    const response = await axios.get(url, { maxRedirects: 5 });
    const html = response.data;
    const $ = cheerio.load(html);

    const extractLinks = () => {
      const links = [];
      $('.list .link_value').each((_, element) => {
        links.push($(element).attr('value'));
      });
      return links;
    };

    const cardLinks = extractLinks();
    if (cardLinks.length === 0) {
      return m.reply('Card not found.');
    }

    const cardDetailUrl = `https://www.db.yugioh-card.com${cardLinks[0]}&request_locale=ja`;
    const cardFaqUrl = cardDetailUrl.replace('card_search.action?ope=2', 'faq_search.action?ope=4');

    const replyMessage = `Card Detail: ${cardDetailUrl}\n\nCard FAQ: ${cardFaqUrl}`;
    await m.reply(replyMessage);
  } catch (error) {
    console.error(error);
    await m.reply('An error occurred while fetching card information: ' + error.message);
  }
};

handler.tags = ['tools'];
handler.command = /^(crule|cr)$/i;

export default handler;
