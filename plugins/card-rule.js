import axios from 'axios';
import cheerio from 'cheerio';

const handler = async (m, { conn, text }) => {
  const query = text || m.quoted?.text || '';

  let cardName = 'Dragunity Arma Leyvaten'; //get from input then validate
  //if valid continue
  cardName = cardName.split(' ');
  cardName = cardName.join('+');

  const url = `https://www.db.yugioh-card.com/yugiohdb/card_search.action?ope=1&sess=1&rp=10&mode=&sort=1&keyword=${cardName}&stype=1&ctype=&othercon=2&starfr=&starto=&pscalefr=&pscaleto=&linkmarkerfr=&linkmarkerto=&link_m=2&atkfr=&atkto=&deffr=&defto=`;

  const extractLinks = ($) => [
    ...new Set(
      $('.list .link_value')
        .map((_, a) => $(a).attr('value'))
        .toArray()
    ),
  ];

  async function fetchLink() {
    try {
      const response = await axios.get(url);
      const html = response.data;
      const $ = cheerio.load(html);

      let card = 'https://www.db.yugioh-card.com';

      card += extractLinks($)[0] + '&request_locale=ja';
      let faq = card.replace(
        'card_search.action?ope=2',
        'faq_search.action?ope=4'
      );

      //OUTPUT
      process.stdout.write('Card Detail: ');
      console.log(card);

      console.log();

      process.stdout.write('Card FAQ: ');
      console.log(faq);
    } catch (error) {
      throw error;
    }
  }

  fetchLink();
};

handler.tags = ['tools'];
handler.command = /^(id?)$/i;

export default handler;
