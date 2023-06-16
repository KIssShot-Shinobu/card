const handler = async (m, { conn }) => {
  //const cardImageUrl = 'https://i.postimg.cc/TYzzD97s/Screenshot-9.png';
  const caption = `*BATTLE OF WAIFU*

*Group A*
*Ash Blossom&Joyous Spring*
Achmad/ achmad
Xinryu / Xinryu
Life777/Isak
*Ghost Belle&Haunted Mansion*
SapZoldyck/ Syafi'i
Elthor/victor
A.Somad [DS] / A.Somad
*Ghost Reaper&Winter Cherries*
Ririwa / Hanif
[DS]Roronoa /Atalarik
kennyson/ kenny
*Ghost Ogre&Snow Rabbit*
Aganisme / aga
zeizen/zeizen
[DS]KissShot / Rifaldi

*Group B*
*Ghost Mourner&Moonlit Chill*
Natsudin / adolf
[DS] AninKZ / Roy
DuelistCupu / Naufal Refadi
*Ghost Sister&Spoky Dogwood*
[DS]Clyne /Hendra
Ryuen /Arifan
ELdrago / Risky
*Yuki-Onna, The Absolute Zero Mayakashi*
Xanxus[DS] / Bakti
[DS] Euphy / Naim
Neo_ice / Rizki Maulana
*Dakki, The Gracefull Mayakashi*
TempeLegi /Irham
Zekken / Fiqhi
TheMyth/RiezkiYanto

*Group C*
*Sky Striker Ace - Kagari*
[DS]Neoxuz / Ade
Equinox/kevin
{(Hilman)} / Hilman
*Lovely Labrynth of The Silver Castle*
Alyzter/Herman
Rexcrooz / Felix
Ronin / Agung
*Underworld Goddess of The World*
Astes/Vio
DS Ikhsan /ikhsan
Kakuja / febric
*Tearlements Rulkallos*
Silencerdrake/ JC
Gembul shop / gembul shop
[DS]Megumi / Bexafid

*Group D*
*I:P Masquerena*
Kaiser / anca
[DS]Akira / Akira
War&4/ Btw
*Appolousa,Bow The Goddess*
Annova / alfian n.
ds-lusit / andre Saputra
Reimma / Dava Kurniansyah
*Dark Magician Girl*
Gamma [K]SR/ gamma kus sam rokhmatulloh
 Lolipop/Ridwan
[DS]72Degree
*Selene,Queen of The  Master Magician*
Spageti/Trans
Che'gu / Naim
Valdomort / Vals

*Group E*
*Witchcrafter Madame Verre*
[DS]XiXi / Prayogi
Amaya / zzz
Void abdilah
*Fairy Tail Luna*
Deadend / Joshua
Sooyaaa / gilang
-K-/ Ken
*Fortune Lady Every*
Ryan/Ryan
Muza/ Mudzaki
G[L]uttony / Ryadi M
*Madolche Puddingcess*
Aleister / Aleister
[DS]SilentDead /Fallen
[DS]ZarC / Arman

*Group F*
*Springans Kitt*
Meltorefas/ Jamper
[DS]Shthana / Nanta
Hero /Rein
*Incredible Ecclesia The Virtuous*
Ikan/rahman
UXI INKAI/Indra
AskaKuma / Aska
*The Iris Swordsoul*
De Bruyne / Refaldi widara
Hepburn/valdo
Nobody / Anom
*Laundry Dragonmaid*
Kurosaki / Kurosaki
Voltage / Hafizh Fahreza
Ifasta / Ibrahim

*Group G*
*Blazing Cartesua The Virtuous*
[DS]TehManis /Alim
Raptor / Dicky
[DS] Alroy /Alroy
*Marincess Aqua Argonaut*
[L] / Aswin
Lalala la / Samuel Juan
Djanda / SamsulBadai
*Silent Magician*
[L]MAHADEWA/MAHADEWA
Invader/Deni P
Scarlet / Diva
*Teardrop The Rikka Queen*
Kyln / Angga Danistian
[DS] Tahumil /Galih
Julienrique/ Aldebaran

*Group H*
*Spiritual Best Tamer Winda*
Ns rin / Nanami
[DS]Reyla/Reyla
Rion/Rio Ramadhan
*Winda Priestess of Gusto*
Beam /bima
k|yor / Basep
Darma/Ali Akbar
*DarkLord Ixchel*
Suimi[K]ado / Tirta
Kazami / Ajigun
[DS]Vanquish/Hudha
*The Weather Painter Rainbow*
Roxa / Zul
JOKER / mhuseinr
Smug Loli / Jojo
`;

  await m.reply(caption);
  //await conn.sendFile(m.chat, cardImageUrl, 'card_image.png', caption, m);
};

handler.tags = ['tools'];
handler.command = /^(waifuteam)$/i;

export default handler;
