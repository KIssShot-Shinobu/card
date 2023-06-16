const handler = async (m, { conn }) => {
  const caption = `Bot Ini Free
Silahkan di pakai dan semoga membantu

jika Ingin doneate untuk server 
silahkan ke Ewallet :

Dana : 081515680656 / A/N Rifaldi
Ovo : 081515680656 / A/N Rifaldi

`;

  await m.reply(caption);
};

handler.tags = ['tools'];
handler.command = /^(donate)$/i;

export default handler;
