const handler = async (m, { conn }) => {
            
   const cardImageUrl = 'https://iili.io/H44A0wN.png';
   const caption = `Group 1

1. [DS]ZarC @Arman DS 
2. Nirmana @~Nirmana Andersen 
3. [DS]Antun @~Antonius Andar 
4. Reizee @~Rizal Rivaldi 
5.Alyzter @~Herman Darael 
6. [DS] Ayzeo @~Ayzeo Kaiba 
7. [DS]LAZYLYNX @Amzah DS 
8. [DS] Sybe @~Fahmisyb 
9. {(Hilman)} @~Hilman 
10. Ikan @M. Rahman / Theos 
11. [DS] Arcy @Supra Yogi DS 
12. [DS] Uru @~Diego 
13. [DS] Misplay @~Wira 
14. [DS]Z3R0 @~Ade Wahyudin 

Group 2

1. [DS] KissShot @@@@ldy 
2. [DS]Rexia @~Agung Mahendra 
3. [DS]Y∅uth @~Rachmad Fiqih 
4. Reinryusan @~Rifky Raditya 
5. [DS] W I L S @+62 811-755-079 
6. [DS]Scaletta @~Scaletta 
7. Ki[DS] @~Faris I 
8. [DS] Tahumil @~GalihWrtma 
9. Tear @~Adit 
10 [DS]Alroy @Roy DS 
11. [DS]Roronoa @atalarik
12. [DS]Darkly44 @~Yusran Irfansyah 
13. Xanxus[DS] @Bakti 
14. [DS]Shthana @~Nanta Sony
`;


    await conn.sendFile(m.chat, cardImageUrl, 'card_image.png', caption, m);
  
};

handler.tags = ['tools'];
handler.command = /^(psd|peserta)$/i;

export default handler;
