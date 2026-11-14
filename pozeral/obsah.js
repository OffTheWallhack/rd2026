/* =========================================================
   SI POZERAL — obsah kanálov
   Tu pridávaš a mažeš rozprávky, reklamy a predely. Nič iné meniť netreba.

   id   = YouTube ID (časť adresy za watch?v=)
   show = názov rozprávky, ep = názov dielu
   lang = 'CZ', 'SK', 'EN' alebo 'bez slov'
   min / sek = odhad dĺžky. Presnú dĺžku zistí automatický skener sám
               (beží na GitHube po každej zmene tohto súboru a raz denne).
               Videá, ktoré na YouTube zmizli alebo sa nedajú vložiť, skener sám vyradí.
   od / do = voliteľný výrez v sekundách, napr. { id:'…', od:30, do:75 }
   kusy    = dlhú kompiláciu rozseká na kúsky s touto dĺžkou v sekundách
   playlist / kanal = celý playlist (ID za list=) alebo kanál (@meno) — skener ho sám načíta,
                      max = najviac koľko dielov, show + lang platia pre všetky diely
   ========================================================= */
window.POZERAL = {

  // Ručne vyradené videá (napr. keď vieš, že na YouTube už nie sú). Skener tento zoznam nemení.
  // nahrávatelia, ktorých videá nikdy nepúšťame (herné let's play, audioknihy, cudzie dabingy, fanúšikovské kompilácie)
  zakazaniAutori: ["Lůk", "TecŁuna TV", "Totally Awesome Geeks", "TrashmanCZ", "AUDIOKNIHY PRO DĚTI", "Amálie Hučíková", "Barevný Svět zábavy Pejska a Kočičky", "Camille Santana", "Chronicles from the Cathode Tube", "Danovo DVD", "Dobré Pohádky", "Gellnerka Brno", "MATRIXXXL007", "Neywa Games", "PS Mláďata Chotěboř", "Radek Klaudis", "ShortStoryTime", "Studio Lyra - Klasické pohádky a příběhy", "Untilia", "Vetus", "ViolentNiceGuy", "czech bodybuilding", "interbubakcz", "nasuke159", "tyronejoseph senasi", "Bajki po Polsku", "Medojed", "Česká LP pařba", "Cartoon Network India", "Cartoon Network Sverige", "Ed Boy", "Epic Cartoons", "Hak9 i.T", "JarToon", "Pohádky MP3", "Je to jedno s Vendy", "Roblox irl", "Cartoon Network Australia"],
  nefunguje: [
    'lmbvnTftdwQ', // mimo rozprávku: Nejmocnější hrdinové Česka: Kouzelné Slu
    'fJueyvFFWbg', // mimo rozprávku: Nejmocnější hrdinové Česka: Rákosníček
    'O_fwVUYToUM', // mimo rozprávku: Čtyřlístek   05 Záhada pyramidy 2024
    '_hKvsQtSp68', // mimo rozprávku: Med a čtyřlístek 1x17 "To, co nemám, je 
    '3tHQkKRgrew', // mimo rozprávku: Med a čtyřlístek 1x11 Láska nás tlačí. C
    'f5nJ4sow3x0', // mimo rozprávku: Med a čtyřlístek 1x18 Vrátil se. Cz
    'wjhXpDy7PHg', // mimo rozprávku: Med a čtyřlístek 1x02 Hej počkej!!. Cz
    'wZmIG6vza7A', // mimo rozprávku: Med a čtyřlístek 1x10 "Přejdeme oblohu".
    '5nrKSlGv0Vk', // mimo rozprávku: Med a čtyřlístek 1x15 Přesto mu stále ch
    'T_ctYlh_fns', // mimo rozprávku: Mentální Problémy Postav z Pohádek | Na 
    'etvG8hNjJCg', // mimo rozprávku: Every Title Card In Dexters Laboratory 
    '8XNQMddyKxc', // zmazaný zdroj: Mauglí (Filmak.eu)
    'QpBpu9XcPDI', // zmazaný zdroj: Mauglí (Release - Topic)
    'HAaYSP_TPvI', // zmazaný zdroj: Mauglí (Václav Postránecký - Topic)
    'R0cumxzR6Qo', // zmazaný zdroj: Heidi, děvčátko z hor (Fan klub Lucie Vondráčkové)
    'F2stxwOnUn0', // zmazaný zdroj: Heidi, děvčátko z hor (klebetniček )
    'EVgfw3-OdQc', // zmazaný zdroj: Heidi, děvčátko z hor (Michal Kep)
    'StdrTh3XvIs', // zmazaný zdroj: Heidi, děvčátko z hor (klebetniček )
    'xmORQRtFarc', // zmazaný zdroj: Heidi, děvčátko z hor (Michal Kep)
    'sumAzeJYtfE', // zmazaný zdroj: Heidi, děvčátko z hor (HomeCookTeach)
    'e_Hxfb5XT1k', // zmazaný zdroj: Heidi, děvčátko z hor (Michal Kep)
    'Z55RDmEeHt8', // zmazaný zdroj: Heidi, děvčátko z hor (Studio100 KIDS)
    'OjeSulZXfBs', // zmazaný zdroj: Heidi, děvčátko z hor (Studio100 KIDS)
    's8kHIyDgDyE', // zmazaný zdroj: Mladí Titáni (Cartoon Network Česká Republik)
    '9OhWtGt6Q0o', // zmazaný zdroj: Mladí Titáni (Cartoon Network Česká Republik)
    '2eYMbbvNRjI', // zmazaný zdroj: Mladí Titáni (Cartoon Network Česká Republik)
    'xaVMYisVDZ8', // zmazaný zdroj: Mladí Titáni (Cartoon Network Česká Republik)
    'r-t_LbKWpp4', // zmazaný zdroj: Mladí Titáni (Cartoon Network Česká Republik)
    'Iv6hykEWqp0', // zmazaný zdroj: Mladí Titáni (Cartoon Network Česká Republik)
    'dJchzbakArY', // zmazaný zdroj: Mladí Titáni (Cartoon Network Česká Republik)
    'Y5feVNIkX-I', // zmazaný zdroj: Chip a Dale: Rescue Rangers (Disney Channel Animation)
    'anbNuK_sGJI', // zmazaný zdroj: Chip a Dale: Rescue Rangers (Disney Channel Animation)
    'oaVUdgYgCng', // zmazaný zdroj: Chip a Dale: Rescue Rangers (Disney Kids a Disney Channel A)
    '8mTiqrzSRz4', // zmazaný zdroj: Chip a Dale: Rescue Rangers (Disney Kids a Disney Channel A)
    'OWuXkkevavM', // zmazaný zdroj: Chip a Dale: Rescue Rangers (Chip n Dale Rescue Rangers)
    'bKurfUtstTI', // zmazaný zdroj: Chip a Dale: Rescue Rangers (Disney Kids)
    '3y-MgQJCSCY', // zmazaný zdroj: Chip a Dale: Rescue Rangers (Disney Kids a Disney Channel A)
    'p9GTSkpF5FY', // zmazaný zdroj: Chip a Dale: Rescue Rangers (Disney Kids a Disney Channel A)
    'S6NZ82Labtk', // zmazaný zdroj: Chip a Dale: Rescue Rangers (Disney Kids a Disney Channel A)
    '_JI1MPpCDh0', // zmazaný zdroj: Chip a Dale: Rescue Rangers (Disney Kids a Disney Channel A)
    'f4XoNqaf2gw', // zmazaný zdroj: Chip a Dale: Rescue Rangers (Filmy a televize YouTube)
    'eQ3fYwQFHeU', // zmazaný zdroj: Chip a Dale: Rescue Rangers (Disney Kids a Disney Channel A)
    '1DBct9DRr7k', // zmazaný zdroj: Chip a Dale: Rescue Rangers (Corie Tomas)
    'fWnca72MOaw', // zmazaný zdroj: Chip a Dale: Rescue Rangers (ABC)
    'uvfVWCNaLFE', // zmazaný zdroj: Chip a Dale: Rescue Rangers (Disney Kids a Disney Channel A)
    'Rh37yPJmorc', // zmazaný zdroj: Chip a Dale: Rescue Rangers (Disney Kids a Disney Channel A)
    'DmhsYJdxK3I', // zmazaný zdroj: Chip a Dale: Rescue Rangers (ABC)
    'hFrOiJ-6ICI', // zmazaný zdroj: Digimon (Ivoch)
    'Y8RauPQJc-c', // zmazaný zdroj: Digimon (Ivoch)
    'gHYG2F-DCdU', // zmazaný zdroj: Dragon Ball (Animation Maker a  další (4))
    'xpf8VEY4Gyw', // zmazaný zdroj: Spider-Man (Tobyy)
    'b76G9bRgC1Q', // zmazaný zdroj: Spider-Man (Lůk Extra)
    'fruHQAoiF8Q', // zmazaný zdroj: Spider-Man (RetroFunTV)
    'yLLNqUPNWHg', // zmazaný zdroj: Spider-Man (RetroFunTV)
    'ygTYt1RF_l4', // zmazaný zdroj: Spider-Man (Bajki z dawnych lat)
    'xYf4_CfRXSs', // zmazaný zdroj: Spider-Man (Old Is Gold)
    'AOGSxWnjeP0', // zmazaný zdroj: Spider-Man (Hall Of Heroes)
    'C13Asup4ogg', // zmazaný zdroj: Spider-Man (Lůk Extra a Lůk)
    'SM_fhmKjyNw', // zmazaný zdroj: Spider-Man (Clip)
    '7mYr8GkV18s', // zmazaný zdroj: Spider-Man (RetroFunTV)
    'GuZuwOzSOd0', // zmazaný zdroj: Spider-Man (RetroFunTV)
    'UEDkMnRu6xs', // zmazaný zdroj: Spider-Man (CARTOON CHRONICLES)
    'RkUO33CZCUY', // zmazaný zdroj: Spider-Man (CARTOON CHRONICLES)
    'n2LuooaggD0', // zmazaný zdroj: Spider-Man (RetroFunTV)
    'sqgSI-dx31M', // zmazaný zdroj: X-Men (Mr. Anybody)
    'GzFjkBlcRAs', // zmazaný zdroj: X-Men (Super Trendy)
    'xaVMYisVDZ8', // zmazaný zdroj: Batman (Cartoon Network Česká Republik)
    'SlRLJQZscwQ', // zmazaný zdroj: Batman (Pavouk42)
    'seUa8sQvpao', // zmazaný zdroj: Batman (Cartoon Network Česká Republik)
    'DdxYFT9SD5A', // zmazaný zdroj: Motorkáři z Marsu (MT-TM)
    'HD-eoX_gJL4', // zmazaný zdroj: Motorkáři z Marsu (LOSAW RETRO)
    '9WyEy9Dbrgw', // zmazaný zdroj: Hey Arnold! (¡Hey Arnold!)
    'CD-Q7P5PGro',  // Cartoon Network Indi – Johnny Bravo - Woah Mama video collectio
    '5TMSZCuekvo',  // Epic Cartoons – New Funny Cartoons Johnny Bravo  Full Ep
    'IjvTLuv6s_w',  // Hak9 i.T – All 69 Johnny Bravo Episodes & Extras At
    'p2CoBJrzdcc',  // Cartoon Network Sver – En Johnny Bravo-jul | Johnny Bravo | 🇸🇪 
    'kzpNLRDMvnw',  // JarToon – The ENTIRE Story of Dexters Laboratory 
    's4IYUvDUlkA',  // JarToon – The ENTIRE Story of Courage the Cowardly
    '-swdIehPjpM',  // Cartoon Network Indi – Courage The Cowardly Dog🐶| Snowman’s Col
    'HXQ0at6ve_0',  // Ed Boy – Ed Edd n Eddy   Eds Immense Strength! 
    'r_eIKpRktvw',  // Danovo DVD – krtek a kalhotky (celý film)
    '6Iw3CbQ6j1Y',  // ShortStoryTime – Krtek o Vánocích - The Little Mole and C
    'a2ZeGyt4tv8',  // Zuzana Nováková – Maxipes Fík    zmoudření Maxipsa Fíka
    'FcplaEMyAjs',  // TV Mix TV na přání – Maxipes Fík - mluvená pohádka
    'yI_DGd5NFdI',  // AUDIOKNIHY PRO DĚTI – Maxipes Fík - LP nahrávka - Strana B
    'QnzlK0y3xdE',  // AUDIOKNIHY PRO DĚTI – Maxipes Fík - LP nahrávka - Strana A
    'PTuMXXyQLJ4',  // Vojtěch Kopta – Maxipes Fík ve škole
    'FUcMf1vEsp8',  // Vojtěch Kopta – Maxipes Fík na lodi
    'bwcRz79q--w',  // Danovo DVD – Menu k DVD Maxipes fík 1 (15. listopadu 
    'MJtvbjNFzcM',  // Danovo DVD – DVD Pohádky z mechu a kapradí 1/2 (Země 
    'UHDO4mPv774',  // Chronicles from the  – Krtek / The Little Mole  Episode 012  Kr
    'FkGauEYpU-M',  // Camille Santana – Krtek♥️
    '1YwWjen2-w4',  // Chronicles from the  – Krtek / The Little Mole  Episode 037  Kr
    'zaJozAY3Mrg',  // ShortStoryTime – Krtek a medicína - The Little Mole and M
    '-CBWadpy95w',  // ShortStoryTime – Krtek a orel - The Little Mole and the E
    '0kdXKzpaRFE',  // ShortStoryTime – Krtek v ZOO - The Little Mole at the ZOO
    'A7P6IDxcdzo',  // Chronicles from the  – Krtek / The Little Mole  Episode 040  Kr
    'Ts8w6M9RZUc',  // Chronicles from the  – Krtek / The Little Mole  Episode 041  Kr
    'LcN1uG6i2gM',  // Chronicles from the  – Krtek / The Little Mole  Episode 006  Kr
    'AfBwe30yOiU',  // Chronicles from the  – Krtek / The Little Mole  Episode 039  Kr
    'kC1zjw7dmJc',  // czech bodybuilding – Bořek stavitel 2010
    'dYdlyQujL6M',  // tyronejoseph senasi – barbapapa s2 voice cz
    'UZxQPFRL9zA',  // interbubakcz – O pejskovi, kočičce a napraveném vlkovi 
    'yTeMiL_Ojvg',  // Radek Klaudis – Karel Höger vypráví nejlepší pohádky - P
    '-k0HKjAstgk',  // Gellnerka Brno – O pejskovi a kočičce  - Jak dělali dort
    'mO2lSPx2NTM',  // Dobré Pohádky – O pejskovi a kočičce – Jak to bylo na Vá
    'qAJlpSFT83o',  // Amálie Hučíková – O pejskovi a kočičce - O klucích z Domaž
    'DYs15S0JRXY',  // Studio Lyra - Klasic – Jak Pejska ofouklo - pohádka na dobrou n
    'SEWbJC9hYrg',  // PS Mláďata Chotěboř – Povídání o pejskovi a kočičce
    'iURXwE0f1CQ',  // Barevný Svět zábavy  – O pejskovi a kočičce - O klucích z Domaž
    'TcVrLHT2x-Y',  // ViolentNiceGuy – Život s Louiem 2x02 Léto mé nespokojenos
    'WrwuSgHOHBg',  // MATRIXXXL007 – Diablo 3 český Let´s play Witch Doctor (
    'gFrpwDo3hNk',  // MATRIXXXL007 – Diablo 3 český Let´s play Witch Doctor (
    'KWirTl0vnU0',  // Untilia – BLAIR WITCH game (part_06) česky
    'ForN7dkOKik',  // Neywa Games – SKUTEČNÝ DUCH? - Scooby Doo: Počátky str
    'XO8QwISMhuQ',  // Neywa Games – PO STOPÁCH VLKODLAKŮ - Scooby Doo: Počát
    '2iYgX0BvzMg',  // Neywa Games – ROBOKRABÍ VÝVAR - Scooby Doo: Počátky st
    '0v8OLYjIrPg',  // Neywa Games – AAA... SAKRA! - Scooby Doo: Počátky stra
    '6LZkkUJdy2Q',  // Neywa Games – VELMA VÁLÍ - Scooby Doo: Počátky strachu
    'Q8OmGK83DZk',  // Neywa Games – PTÁCI NA CIMBUŘÍ, VLKODLACI NA DVORKU - 
    '0s9afsgW2D8',  // Neywa Games – Roboboss - Scooby Doo: Počátky strachu -
    'KEOCbn94mmE',  // Vetus – 23 Zajímavostí o Seriálu Scooby-Doo, kte
    '4oSkyKa4UOE',  // Česká LP pařba – CZ LP : Dark Souls - Bell Gargoyle ! (Pa
    'sccG1FB_PwU',  // Bajki po Polsku – gormiti-Final evolution cz 3/3 Pl
    'PQtLftk_8bY',  // Medojed – Avatar: Legenda o Aangovi od Netflixu Je
    'CiywEQOQkzI',  // nasuke159 – Naruto Manga 410 (dabing)
    'pwOIfrUEA8M',  // Naruto 1. díl, 1. časť (Jetix dabing) – na YouTube nejde
    // 9. 11.: cudzie videá (návody) a anglický Louie na CZ kanáli
    '1-I4plfXwGY', '2mhVQkn5Vdw', '4eyO3Fo_VKE', '9dDNoJOiavw', 'C57BqJKtu6o', 'NR1pbgjnutc', 'P1c6Fsc0LPs', 'PJFKb759QR0', 'Qg7lpDZikhc', 'RRNxhuXi-uo', 'Vn2Prt0vOZ8', 'W03Aoa2KMdE', 'XqUrfKQUkN4', '_BjXI-9hsnE', 'bS_J779_DM0', 'c_uU2Dg020I', 'dDOETyclPaQ', 'eHRGxeLLfw4', 'eJoqrmnfbV0', 'fBAv7UUyUtY', 'nRfxKHPmGUg', 'nv5YQ5NUHYU', 'qyxhglThTwo', 'wwqPVx4fGoc', 'xuUus4PZlF4', 'ze6UyW7idCI'
  ],

  kanaly: [
    {
      nazov: 'Rozprávka',
      popis: 'večerníčky a klasiky',
      reklamy: 3,          // koľko reklám ide po každej rozprávke
      predelKazdych: 3,    // predel/znelka pred každou x-tou rozprávkou
      program: [
        { id:'wvDJPJLScqY', show:'Gumídci', ep:'Znělka (zpívá Karel Černoch)', lang:'CZ', min:2 },
        { id:'rLm4Ficu5Fg', show:'Pat a Mat', ep:'Palačinky', lang:'bez slov', min:10 },
        { id:'i56L6jU7MjI', show:'Šmolkovia', ep:'Úplná epizóda', lang:'SK', min:25 },
        { id:'XU9XQkT3xw4', show:'Bob a Bobek', ep:'Na bruslích', lang:'CZ', min:8 },
        { id:'-vTP4hR0gUU', show:'Byl jednou jeden… život', ep:'Dýchání', lang:'CZ', min:25 },
        { id:'3NeMjNMOi3E', show:'Pat a Mat', ep:'Natierajú podlahu', lang:'bez slov', min:10 },
        { id:'W_1TdqDf9G4', show:'Šmolkovia', ep:'Šmolkovský raj', lang:'SK', min:15 },
        { id:'TDpXdIDXpco', show:'Bob a Bobek', ep:'Ve škole sportu', lang:'CZ', min:8 },
        { id:'-Q0mPkDibXI', show:'Byl jednou jeden… život', ep:'Původ života', lang:'CZ', min:25 },
        { id:'1VLI47pHDcI', show:'Šmolkovia', ep:'Šľachetný Gargamel', lang:'SK', min:15 },
        { id:'Ew_moNhHocE', show:'Bob a Bobek', ep:'Jezero krokodýlů', lang:'CZ', min:8 },
        { id:'G1qtEZLcv6U', show:'Bob a Bobek', ep:'Na ulici', lang:'CZ', min:8 },
        { id:'gRjhMNveAbU', show:'Mach a Šebestová', ep:'O utrženém sluchátku', lang:'CZ', min:9 },
        { id:'k4T_9i_jtUI', show:'Krtek', ep:'Krtek zahradníkem', lang:'bez slov', min:6 },
        { id:'aDkLj2kEkk0', show:'Maxipes Fík', ep:'Zrození Maxipsa Fíka', lang:'CZ', min:8 },
        { id:'4cuDJYLPRVw', show:'Šmolkovia', ep:'Šmolkovia a Veľká noc', lang:'SK', min:12 },
        { id:'xDvqxN0XgI8', show:'Pohádky z mechu a kapradí', ep:'Jak Křemílek a Vochomůrka sázeli semínko', lang:'CZ', min:8 },
        { id:'myoqg_xiMn0', show:'O loupežníku Rumcajsovi', ep:'1. díl', lang:'CZ', min:9 },
        { id:'MFBKpT2OggI', show:'Pásli ovce valaši', ep:'Ako Kubko a Maťko naučili vílu ovečky dojiť', lang:'SK', min:8 },
        { id:'vvHFyMGfYLc', show:'Jája a Pája', ep:'Jak pěstovali jahody', lang:'CZ', min:8 },
        { id:'dZ-ki-tiFfM', show:'Pat a Mat', ep:'Potrubní pošta', lang:'bez slov', min:8 },
        { id:'PUOv5l54vMw', show:'Byl jednou jeden… život', ep:'Planeta buněk', lang:'CZ', min:25 },
        { id:'FGNaXX8OIKw', show:'Macko Uško', ep:'Sánkovačka', lang:'SK', min:8 },
        { id:'IDRVLyBQEuk', show:'Spejbl a Hurvínek', ep:'Plavání zakázáno', lang:'CZ', min:8 },
        { id:'sxYMWzwOGro', show:'Bob a Bobek', ep:'Na zahradě', lang:'CZ', min:8 },
        { id:'BfEbDmf8_I4', show:'Krtek', ep:'Krtek a buldozer', lang:'bez slov', min:6 },
        { id:'0cCjNm5ZauY', show:'Krkonošské pohádky', ep:'Jak Trautenberk lovil v Krakonošově revíru', lang:'CZ', min:12 },
        { id:'1LT9gwqFO1s', show:'Mach a Šebestová', ep:'Piráti', lang:'CZ', min:9 },
        { id:'NBBELMq1AmQ', show:'Bořek stavitel', ep:'Najmenší raketa', lang:'SK', min:10 },
        { id:'WG_nN-MeEfw', show:'Šmolkovia', ep:'Vianoce Šmolkov', lang:'SK', min:22 },
        { id:'oi-nrSsZ86U', show:'Pohádky o mašinkách', ep:'1. díl', lang:'CZ', min:8 },
        { id:'J6DvmJ6opzI', show:'Maxipes Fík', ep:'Maxipes Fík objevitelem', lang:'CZ', min:8 },
        { id:'AjcxLmm35h0', show:'Bolek a Lolek', ep:'Hledači pokladů', lang:'bez slov', min:10 },
        { id:'k0Iq-fQ-AkQ', show:'Pohádky z mechu a kapradí', ep:'Jak si Křemílek a Vochomůrka věděli se vším rady', lang:'CZ', min:8 },
        { id:'6lLXkEjzl9Q', show:'Mumínci', ep:'1. díl', lang:'CZ', min:22 },
        { id:'pH2cjc8m3IE', show:'Pat a Mat', ep:'Hrnčíři', lang:'bez slov', min:7 },
        { id:'WeQpBr9gbEA', show:'Bob a Bobek', ep:'S koloběžkou', lang:'CZ', min:8 },
        { id:'M5uY3OVtKRc', show:'O loupežníku Rumcajsovi', ep:'Jak Rumcajs přechytračil knížepána', lang:'CZ', min:9 },
        { id:'Uh9MVThjxBo', show:'Pásli ovce valaši', ep:'Ako Kubko s Maťkom učili kukučku kukať', lang:'SK', min:8 },
        { id:'s-LN2VSwO_w', show:'Krtek', ep:'Krtek a zelená hvězda', lang:'bez slov', min:6 },
        { id:'3LzzGC3JUnE', show:'Jája a Pája', ep:'Jak zasadili prasečí ocásek', lang:'CZ', min:8 },
        { id:'3biYSPLCSvw', show:'Byl jednou jeden… život', ep:'Narození', lang:'CZ', min:25 },
        { id:'m5AvxFcNaag', show:'Spejbl a Hurvínek', ep:'Hurvínek oslavuje', lang:'CZ', min:8 },
        { id:'b0cPkgNTArw', show:'Šmolkovia', ep:'Priateľky', lang:'SK', min:12 },
        { id:'LsDhjWys1y0', show:'Mach a Šebestová', ep:'Přírodní zákony', lang:'CZ', min:9 },
        { id:'JhyXj0WalFQ', show:'Macko Uško', ep:'Poriadok', lang:'SK', min:8 },
        { id:'V8B5UBD0hO4', show:'Včelka Mája', ep:'20. díl', lang:'CZ', min:23 },
        { id:'HtglNkzRPI0', show:'Bob a Bobek', ep:'Truhláři', lang:'CZ', min:8 },
        { id:'mCG3mEYGWWg', show:'Maxipes Fík', ep:'Fík za volantem', lang:'CZ', min:8 },
        { id:'-awgOp-5sJE', show:'Pohádky o mašinkách', ep:'U kouzelníka Zababy', lang:'CZ', min:8 },
        { id:'JHCMnr1bU2Q', show:'Pat a Mat', ep:'Automat', lang:'bez slov', min:7 },
        { id:'ynJ6B1dLyCE', show:'Krkonošské pohádky', ep:'Jak Trautenberk sušil Krakonošovu louku', lang:'CZ', min:12 },
        { id:'8wkHzEQ7Ggc', show:'Krtek', ep:'Krtek malířem', lang:'bez slov', min:6 },
        { id:'5Gdl8YBpHzQ', show:'Šmolkovia', ep:'Smoliar', lang:'SK', min:12 },
        { id:'YyEZty88LdQ', show:'Mach a Šebestová', ep:'Jak Mach a Šebestová hlídali dítě', lang:'CZ', min:9 },
        { id:'Ye_jtPsGuk0', show:'Bořek stavitel', ep:'Max na ledu', lang:'CZ', min:10 },
        { id:'jd5sQAHt0Yw', show:'O loupežníku Rumcajsovi', ep:'Jak Rumcajs pro kukačku padl málem do vězení', lang:'CZ', min:9 },
        { id:'hVrrYaNjzv8', show:'Mumínci', ep:'2. díl', lang:'CZ', min:22 },
        { id:'BG2GmWVXZzk', show:'Jája a Pája', ep:'Piráti', lang:'CZ', min:8 },
        { id:'tsJ1GV_xDK0', show:'Bob a Bobek', ep:'Ve vzduchu', lang:'CZ', min:8 },
        { id:'0Babqb-hNSc', show:'Spejbl a Hurvínek', ep:'Vánoční dárek', lang:'CZ', min:8 },
        { id:'mREr3qOgDpY', show:'Pohádky z mechu a kapradí', ep:'Jak Křemílek a Vochomůrka hledali, až našli', lang:'CZ', min:8 },
        { id:'lGNBQmeN1Ws', show:'Pásli ovce valaši', ep:'Ako sa Kubko a Maťko dali na zboj', lang:'SK', min:8 },
        { id:'r_eIKpRktvw', show:'Krtek', ep:'Jak krtek ke kalhotkám přišel', lang:'bez slov', min:13 },
        { id:'1z8w-djYJHQ', show:'Byl jednou jeden… život', ep:'Ústa a zuby', lang:'CZ', min:25 },
        { id:'NWFt2LX28aQ', show:'Maxipes Fík', ep:'Maxipes Fík trosečníkem', lang:'CZ', min:8 },
        { id:'s4kvd7ChFFA', show:'Pat a Mat', ep:'Autodráha', lang:'bez slov', min:7 },
        { id:'S39RbpBifLU', show:'Šmolkovia', ep:'Vystrašení Šmolkovia', lang:'SK', min:12 },
        { id:'Je4HmdVgJpg', show:'Mach a Šebestová', ep:'Vzorné chování', lang:'CZ', min:9 },
        { id:'2FaCMT74d7I', show:'Hurvínek vzduchoplavcem', ep:'4. díl', lang:'CZ', min:8 },
        { id:'I6sNX_ZLciI', show:'Pohádky o mašinkách', ep:'3. díl', lang:'CZ', min:8 },
        { id:'kvvEvgNPKBI', show:'Bob a Bobek', ep:'Na útěku', lang:'CZ', min:8 },
        { id:'ptjfy7a4-Hc', show:'Bolek a Lolek', ep:'Žirafa', lang:'bez slov', min:10 },
        { id:'6Iw3CbQ6j1Y', show:'Krtek', ep:'Krtek o Vánocích', lang:'bez slov', min:28 },
        { id:'GhBuGixYe9I', show:'Šmoulové', ep:'Šmoulinka', lang:'CZ', min:12 },
        { id:'7hssKvYVeWQ', show:'Šmolkovia', ep:'Purpuroví Šmolkovia', lang:'SK', min:12 },
        { id:'IKo5iM7I028', show:'Šmoulové', ep:'Šmoulí polévka', lang:'CZ', min:12 },
        { id:'bVqxXSJ2pDY', show:'Šmolkovia', ep:'Myška Pískalka', lang:'SK', min:12 },
        { id:'Ka7azkbEvwk', show:'Šmoulové', ep:'Šmoulové ve Strašidelném zámku', lang:'CZ', min:12 },
        { id:'Ba_HMUsXZh0', show:'Šmoulové', ep:'Král Šmoulů', lang:'CZ', min:12 },
        { id:'vHVXHptT2gA', show:'Šmoulové', ep:'Hafík', lang:'CZ', min:12 },
        { id:'mBG6jYdyXOk', show:'Šmoulové', ep:'Dobrodružství Robina Šmoula', lang:'CZ', min:12 },
        { id:'rb9YK_TuXqA', show:'Šmoulové', ep:'Šmoulata – část první', lang:'CZ', min:12 },
        { playlist:'PLXkA6SvogZFumCc1H0KgXGPdsRrzCcTHw', show:'Pat a Mat', lang:'bez slov', min:8, max:40 },
        { playlist:'PL3SFGj27PTbfdUXNVv20TCjhbm8sriSH_', show:'Pat a Mat', lang:'bez slov', min:8, max:25 },
        { playlist:'PLXkA6SvogZFsro5cOPiQcy1CHMjSLOQq7', show:'Byl jednou jeden… život', lang:'CZ', min:25, max:26 },
        { playlist:'PL_c00IPCdRoGD0k6aG7725OaqHQQffcVf', show:'Byl jednou jeden… život', lang:'CZ', min:25, max:26 },
        { kanal:'@byljednoujedenzivot', show:'Byl jednou jeden… život', lang:'CZ', min:25, max:20 },
        { playlist:'PLh4oNLWEP1pov-S4X2rwB3e1kKFFjecKe', show:'Bob a Bobek', lang:'CZ', min:8, max:30 },
        { hladaj:['Bolek a Lolek', 'Bolek a Lolek celý díl', 'Bolek a Lolek cz'], obsahuje:'bolek a lolek', show:'Bolek a Lolek', lang:'CZ', min:9, max:30, jazyk:false, vynechaj:'hračk|plyš|lego|omaľov|omalov|vymaľov|pexeso|puzzle|nálepk|audio|kniha|čte |čtení|čítanie|divadl|písni|píseň|pesni|song|karaoke', minSek:240, maxSek:1800 },
        { hladaj:['Pohádky z mechu a kapradí', 'Křemílek a Vochomůrka'], obsahuje:'mechu a kaprad|křemílek|vochomůrk', show:'Pohádky z mechu a kapradí', lang:'CZ', min:8, max:30, jazyk:false, vynechaj:'hračk|plyš|lego|omaľov|omalov|vymaľov|pexeso|puzzle|nálepk|audio|kniha|čte |čtení|čítanie|divadl|písni|píseň|pesni|song|karaoke', minSek:240, maxSek:1800 },
        { hladaj:['O loupežníku Rumcajsovi', 'Rumcajs večerníček'], obsahuje:'rumcajs', show:'Rumcajs', lang:'CZ', min:8, max:30, jazyk:false, vynechaj:'hračk|plyš|lego|omaľov|omalov|vymaľov|pexeso|puzzle|nálepk|audio|kniha|čte |čtení|čítanie|divadl|písni|píseň|pesni|song|karaoke|film', minSek:240, maxSek:1800 },
        { hladaj:['Krtek večerníček', 'Krteček celý díl', 'Krtek a kalhotky'], obsahuje:'krte(k|ček)', show:'Krtek', lang:'bez slov', min:7, max:30, jazyk:false, vynechaj:'hračk|plyš|lego|omaľov|omalov|vymaľov|pexeso|puzzle|nálepk|audio|kniha|čte |čtení|čítanie|divadl|písni|píseň|pesni|song|karaoke|na dobrou noc|zábava|vyrábí|kreslen|kreslí', minSek:240, maxSek:1800 },
        { hladaj:['Mach a Šebestová', 'Mach a Šebestová večerníček'], obsahuje:'mach a šebestov', show:'Mach a Šebestová', lang:'CZ', min:9, max:30, jazyk:false, vynechaj:'hračk|plyš|lego|omaľov|omalov|vymaľov|pexeso|puzzle|nálepk|audio|kniha|čte |čtení|čítanie|divadl|písni|píseň|pesni|song|karaoke|film', minSek:240, maxSek:1800 },
        { hladaj:['Včelka Mája cz', 'Včelka Mája celý díl'], obsahuje:'v[čc]elka m[áa]j', show:'Včelka Mája', lang:'CZ', min:12, max:30, jazyk:false, vynechaj:'hračk|plyš|lego|omaľov|omalov|vymaľov|pexeso|puzzle|nálepk|audio|kniha|čte |čtení|čítanie|divadl|písni|píseň|pesni|song|karaoke|film|movie', minSek:240, maxSek:1800 },
        { hladaj:['Včielka Maja sk', 'Včielka Maja celý diel'], obsahuje:'v[čc]ielka maj', show:'Včielka Maja', lang:'SK', min:12, max:30, jazyk:false, vynechaj:'hračk|plyš|lego|omaľov|omalov|vymaľov|pexeso|puzzle|nálepk|audio|kniha|čte |čtení|čítanie|divadl|písni|píseň|pesni|song|karaoke|film|movie', minSek:240, maxSek:1800 },
        { hladaj:['Mumínci', 'Mumínci celý díl'], obsahuje:'mumín', show:'Mumínci', lang:'CZ', min:22, max:30, jazyk:false, vynechaj:'hračk|plyš|lego|omaľov|omalov|vymaľov|pexeso|puzzle|nálepk|audio|kniha|čte |čtení|čítanie|divadl|písni|píseň|pesni|song|karaoke|film|movie|trailer', minSek:300, maxSek:1800 },
        { hladaj:['Bořek stavitel cz', 'Bořek stavitel celý díl'], obsahuje:'bo[řr]ek stavitel', show:'Bořek stavitel', lang:'CZ', min:10, max:30, jazyk:false, vynechaj:'hračk|plyš|lego|omaľov|omalov|vymaľov|pexeso|puzzle|nálepk|audio|kniha|čte |čtení|čítanie|divadl|písni|píseň|pesni|song|karaoke|toys?|stavebnic|unbox', minSek:240, maxSek:1800 },
        { hladaj:['Mašinka Tomáš cz', 'Mašinka Tomáš a jeho přátelé'], obsahuje:'ma[šs]inka tom[áa][šs]', show:'Mašinka Tomáš', lang:'CZ', min:10, max:30, jazyk:false, vynechaj:'hračk|plyš|lego|omaľov|omalov|vymaľov|pexeso|puzzle|nálepk|audio|kniha|čte |čtení|čítanie|divadl|písni|píseň|pesni|song|karaoke|toys?|vláčk|trackmaster|unbox|koleje|dráha|vlaky', minSek:240, maxSek:1800 },
        { hladaj:['Šmoulové cz', 'Šmoulové celý díl'], obsahuje:'šmoul', show:'Šmoulové', lang:'CZ', min:12, max:30, jazyk:false, vynechaj:'hračk|plyš|lego|omaľov|omalov|vymaľov|pexeso|puzzle|nálepk|audio|kniha|čte |čtení|čítanie|divadl|písni|píseň|pesni|song|karaoke|film|movie|trailer', minSek:300, maxSek:1800 },
        { hladaj:['Šmolkovia sk dabing', 'Šmolkovia celý diel'], obsahuje:'šmolkov', show:'Šmolkovia', lang:'SK', min:12, max:30, jazyk:false, vynechaj:'hračk|plyš|lego|omaľov|omalov|vymaľov|pexeso|puzzle|nálepk|audio|kniha|čte |čtení|čítanie|divadl|písni|píseň|pesni|song|karaoke|film|movie|trailer', minSek:300, maxSek:1800 },
        { hladaj:['Maťko a Kubko'], obsahuje:'ma[ťt]ko a kubko', show:'Maťko a Kubko', lang:'SK', min:8, max:30, jazyk:false, vynechaj:'hračk|plyš|lego|omaľov|omalov|vymaľov|pexeso|puzzle|nálepk|audio|kniha|čte |čtení|čítanie|divadl|písni|píseň|pesni|song|karaoke', minSek:180, maxSek:1800 },
        { hladaj:['O pejskovi a kočičce', 'Povídání o pejskovi a kočičce'], obsahuje:'pejsk', autor:'^(Emil Zak|Filmy - cz dabing|bodomil17)$', show:'O pejskovi a kočičce', lang:'CZ', min:8, max:30, jazyk:false, vynechaj:'hračk|plyš|lego|omaľov|omalov|vymaľov|pexeso|puzzle|nálepk|audio|kniha|čte |čtení|čítanie|divadl|písni|píseň|pesni|song|karaoke|film', minSek:240, maxSek:1800 },
        { hladaj:['Jája a Pája'], obsahuje:'jája a pája', show:'Jája a Pája', lang:'CZ', min:8, max:30, jazyk:false, vynechaj:'hračk|plyš|lego|omaľov|omalov|vymaľov|pexeso|puzzle|nálepk|audio|kniha|čte |čtení|čítanie|divadl|písni|píseň|pesni|song|karaoke', minSek:180, maxSek:1800 },
        { hladaj:['Ferda Mravenec večerníček', 'Ferda Mravenec celý díl'], obsahuje:'ferda', show:'Ferda Mravenec', lang:'CZ', min:8, max:30, jazyk:false, vynechaj:'hračk|plyš|lego|omaľov|omalov|vymaľov|pexeso|puzzle|nálepk|audio|kniha|čte |čtení|čítanie|divadl|písni|píseň|pesni|song|karaoke|film|hra', minSek:240, maxSek:1800 },
        { hladaj:['Rákosníček', 'Rákosníček a hvězdy'], obsahuje:'rákosn[ií][cč]ek', show:'Rákosníček', lang:'CZ', min:8, max:30, jazyk:false, vynechaj:'hračk|plyš|lego|omaľov|omalov|vymaľov|pexeso|puzzle|nálepk|audio|kniha|čte |čtení|čítanie|divadl|písni|píseň|pesni|song|karaoke|film|movie|hra|game|figurk|cosplay|amv|trailer|zvučka|znelka|intro', minSek:240, maxSek:1800 },
        { hladaj:['Čtyřlístek cz', 'Čtyřlístek celý díl'], obsahuje:'čtyřlístek', show:'Čtyřlístek', lang:'CZ', min:10, max:30, jazyk:false, vynechaj:'hračk|plyš|lego|omaľov|omalov|vymaľov|pexeso|puzzle|nálepk|audio|kniha|čte |čtení|čítanie|divadl|písni|píseň|pesni|song|karaoke|film|movie|hra|game|figurk|cosplay|amv|trailer|zvučka|znelka|intro', minSek:300, maxSek:1800 },
        { hladaj:['Včelí medvídci cz', 'Včelí medvídci díl'], obsahuje:'včelí medv', show:'Včelí medvídci', lang:'CZ', min:22, max:30, jazyk:false, vynechaj:'hračk|plyš|lego|omaľov|omalov|vymaľov|pexeso|puzzle|nálepk|audio|kniha|čte |čtení|čítanie|divadl|písni|píseň|pesni|song|karaoke|film|movie|hra|game|figurk|cosplay|amv|trailer|zvučka|znelka|intro', minSek:600, maxSek:1800 },
        { hladaj:['Pipi Dlouhá punčocha cz', 'Pipi Dlouhá punčocha díl'], obsahuje:'pipi', show:'Pipi Dlouhá punčocha', lang:'CZ', min:22, max:30, jazyk:false, vynechaj:'hračk|plyš|lego|omaľov|omalov|vymaľov|pexeso|puzzle|nálepk|audio|kniha|čte |čtení|čítanie|divadl|písni|píseň|pesni|song|karaoke|film|movie|hra|game|figurk|cosplay|amv|trailer|zvučka|znelka|intro', minSek:600, maxSek:1800 },
        { autor:'^Celé Filmy a seriály', hladaj:['Lucky Luke cz dabing', 'Lucky Luke česky'], obsahuje:'lucky luke', show:'Lucky Luke', lang:'CZ', min:22, max:30, jazyk:false, vynechaj:'hračk|plyš|lego|omaľov|omalov|vymaľov|pexeso|puzzle|nálepk|audio|kniha|čte |čtení|čítanie|divadl|písni|píseň|pesni|song|karaoke|film|movie|hra|game|figurk|cosplay|amv|trailer|zvučka|znelka|intro', minSek:600, maxSek:1800 },
        { hladaj:['Medvídek Pú cz dabing', 'Medvedík Pú sk'], obsahuje:'medv[ií]d?[eí]k p[uú]', show:'Medvídek Pú', lang:'CZ', min:22, max:30, jazyk:false, vynechaj:'hračk|plyš|lego|omaľov|omalov|vymaľov|pexeso|puzzle|nálepk|audio|kniha|čte |čtení|čítanie|divadl|písni|píseň|pesni|song|karaoke|film|movie|hra|game|figurk|cosplay|amv|trailer|zvučka|znelka|intro', minSek:300, maxSek:1800 },
      ]
    },
    {
      nazov: 'Po škole',
      popis: 'seriály, na ktoré si sa ponáhľal zo školy',
      reklamy: 3,
      predelKazdych: 2,
      program: [
        { id:'7317QcTXiDw', show:'Klíšťák', ep:'Klíšťák a hypnotizér', lang:'CZ', min:22 },
        { id:'g-sb2JideT8', show:'Život s Louiem', ep:'Vánoční překvapení', lang:'CZ', min:22 },
        { id:'85mbr-0GygU', show:'Tři kamarádi a Jerry', ep:'Bleší trh', lang:'CZ', min:12 },
        { id:'f-gYesYeIuo', show:'Totally Spies – Špiónky', ep:'Ďábelské zakončení (1. část)', lang:'CZ', min:22 },
        { id:'KBFq_JYvenE', show:'Klíšťák', ep:'Klíšťák – zlo má pauzu', lang:'CZ', min:22 },
        { id:'a98xtdBdlqU', show:'Život s Louiem', ep:'Táta má padáka', lang:'CZ', min:22 },
        { id:'lWLpRq9TAU4', show:'Tři kamarádi a Jerry', ep:'Super model', lang:'CZ', min:11 },
        { id:'nXJXmtwVXUg', show:'Život s Louiem', ep:'Prší mi do postele', lang:'CZ', min:22 },
        { id:'DuZ3fcaIo-I', show:'Tři kamarádi a Jerry', ep:'Tajná mise, Archeologický výkop, Bleší trh, Brýle, Bumerang', lang:'CZ', min:55 },
        { id:'SxyHoiyugis', show:'Tři kamarádi a Jerry', ep:'Circus, Dát si pusu s Lindou, Dívčí šaty, Domovník, Dvoření', lang:'CZ', min:55 },
        { id:'ZSkIt43qlH4', show:'Klíšťák', ep:'Klíšťák a Klíšťák', lang:'CZ', min:22 },
        { id:'BanM6mxidgw', show:'Totally Spies – Špiónky', ep:'Anti-sociální síť', lang:'CZ', min:22 },
        { id:'ocj3I2WW4ag', show:'Tři kamarádi a Jerry', ep:'Jak být vedle', lang:'CZ', min:10 },
        { id:'zA5yPfYHtXI', show:'Dennis postrach okolí', ep:'Sbohem stará malbo', lang:'CZ', min:22 },
        { id:'ZCnJuXjG01U', show:'Inspektor Šikula', ep:'Příšerné jezero', lang:'CZ', min:22 },
        { id:'c4wiJt4pE80', show:'Galactik Football', ep:'Nová naděje', lang:'CZ', min:26 },
        { id:'H8S76g8I8es', show:'Klíšťák', ep:'Klíšťák a dinosaurus Neil (1/2)', lang:'CZ', min:11 },
        { id:'PIIoaNagEB4', show:'Kocour Raplík', ep:'Kocour Raplík a hromještěři', lang:'CZ', min:11 },
        { id:'mLrAoJO-UZc', show:'W.I.T.C.H.', ep:'Začátek', lang:'CZ', min:22 },
        { id:'8WRSXxpUTao', show:'Tři kamarádi a Jerry', ep:'Olympijské hry', lang:'CZ', min:10 },
        { id:'Zovf3EyLbcc', show:'Totally Spies – Špiónky', ep:'Hračičky (2. část)', lang:'CZ', min:22 },
        { id:'po90SMIxY6U', show:'Dennis postrach okolí', ep:'Zachráněný život', lang:'CZ', min:22 },
        { id:'Tu3umAwHS2g', show:'Galactik Football', ep:'2. série – 1. díl', lang:'CZ', min:26 },
        { id:'nosggszCwAE', show:'Klíšťák', ep:'Klíšťák a mistr pekař (1/2)', lang:'CZ', min:11 },
        { id:'CfknD0OmQEA', show:'Tři kamarádi a Jerry', ep:'Noční sova', lang:'CZ', min:10 },
        { id:'5ieHWwx7ZtY', show:'Totally Spies – Špiónky', ep:'Halloween (2. část)', lang:'CZ', min:22 },
        { id:'X2iLOt8WHCk', show:'Dennis postrach okolí', ep:'Blahodárné lázně', lang:'CZ', min:22 },
        { id:'omfMvI9w2eI', show:'Lucky Luke', ep:'Tři díly za sebou', lang:'CZ', min:70 },
        { id:'hTB8_HZCWaA', show:'Tři kamarádi a Jerry', ep:'Tajná skřínka', lang:'CZ', min:10 },
        { id:'VESWf19ckIY', show:'Galactik Football', ep:'2. série – 3. díl', lang:'CZ', min:26 },
        { id:'TnC70DLMZGw', show:'Totally Spies – Špiónky', ep:'Případ zlé dědičky (2. část)', lang:'CZ', min:22 },
        { id:'fGT1X8XwagM', show:'Tři kamarádi a Jerry', ep:'Supermarket', lang:'CZ', min:10 },
        { id:'DgINE3MKem4', show:'Galactik Football', ep:'2. série – 9. díl', lang:'CZ', min:26 },
        { id:'206HF_GurW8', show:'Totally Spies – Špiónky', ep:'Odporná špindíra (2. část)', lang:'CZ', min:22 },
        { id:'eKcOw14HjZ4', show:'Tři kamarádi a Jerry', ep:'Dopisová známost', lang:'CZ', min:10 },
        { id:'hwMe-lLVWAM', show:'Galactik Football', ep:'2. série – 12. díl', lang:'CZ', min:26 },
        { id:'OhcFFFxzv2c', show:'Totally Spies – Špiónky', ep:'2. série, 2. díl', lang:'CZ', min:22 },
        { id:'nrfheZPAbR4', show:'Tři kamarádi a Jerry', ep:'Tonyho párty', lang:'CZ', min:10 },
        { id:'VYYtmlgJjO8', show:'Galactik Football', ep:'2. série – 15. díl', lang:'CZ', min:26 },
        { id:'D5ecUCYUoQA', show:'Totally Spies – Špiónky', ep:'1. série, 1. díl (1/2)', lang:'CZ', min:11 },
        { id:'OlWiAglOCGc', show:'Tři kamarádi a Jerry', ep:'Jerryho šťastný den', lang:'CZ', min:10 },
        { id:'MlrqMNysrgs', show:'Galactik Football', ep:'3. série – 2. díl', lang:'CZ', min:26 },
        { id:'76RQmb-hhjc', show:'Tři kamarádi a Jerry', ep:'Soutěž krásy', lang:'CZ', min:10 },
        { id:'rGABDba-FUM', show:'Tři kamarádi a Jerry', ep:'Vši', lang:'CZ', min:10 },
        { id:'m7-xx__rSMo', show:'Tři kamarádi a Jerry', ep:'Koledníci', lang:'CZ', min:10 },
        { id:'CcqpZpvybP0', show:'Život s Louiem', ep:'Nespokojené léto', lang:'CZ', min:22 },
        { id:'Y-c4u3sQTNc', show:'Klíšťák', ep:'Klíšťák a Klíšťák (1. časť)', lang:'CZ', min:11 },
        { id:'F2AwDKkWVnM', show:'Totally Spies – Špiónky', ep:'Nový Jerry', lang:'CZ', min:22 },
        { id:'bg3JzT7WsN8', show:'Mr. Bean: Animované příběhy', ep:'Domácí biják', lang:'bez slov', min:11 },
        { id:'IzlLq3tr3UI', show:'Garfieldova show', ep:'Těžké váhy', lang:'CZ', min:12 },
        { id:'vgiIxzLsx-U', show:'Kačeří příběhy', ep:'Karanténa strýčka Skrblíka', lang:'CZ', min:22 },
        { id:'A_CSxmUkPew', show:'Rychlá rota', ep:'Prohozená těla', lang:'CZ', min:22 },
        { id:'jFDNPc8EgFo', show:'Totally Spies – Špiónky', ep:'Uteč pryč', lang:'CZ', min:22 },
        { id:'7eOEZq8ORlw', show:'Garfieldova show', ep:'Stratený Lyman', lang:'SK', min:12 },
        { id:'aKChMtuiykE', show:'Kim Possible', ep:'Halloween', lang:'CZ', min:22 },
        { id:'KG20Le3mhUs', show:'Garfield a přátelé', ep:'Filmové šoky', lang:'CZ', min:7 },
        { id:'PU-CdSmSiaU', show:'Mr. Bean: Animované příběhy', ep:'Skládací nábytek', lang:'bez slov', min:11 },
        { id:'XouTkwoTH8I', show:'Garfieldova show', ep:'Podle přání', lang:'CZ', min:12 },
        { id:'asb09scHGSM', show:'Totally Spies – Špiónky', ep:'1. série, 5. díl (1/2)', lang:'CZ', min:11 },
        { id:'C11GBYdAP7k', show:'Dennis postrach okolí', ep:'Ja-bko', lang:'CZ', min:7 },
        { id:'CJgcvSYN9YM', show:'Animáci', ep:'Super silní sourozenci Warnerovi', lang:'CZ', min:7 },
        { id:'gc77arzV6HI', show:'Garfieldova show', ep:'Kočičí svět', lang:'CZ', min:12 },
        { id:'sosuGW5J8rM', show:'Kocour Raplík', ep:'Kocour Raplík', lang:'CZ', min:22 },
        { id:'YODEL-OWCEM', show:'Totally Spies – Špiónky', ep:'1. série, 6. díl (1/2)', lang:'CZ', min:11 },
        { id:'eIAr6xDJJXc', show:'Garfieldova show', ep:'Král Nermal', lang:'CZ', min:12 },
        { id:'lwhpvjQlxkw', show:'Garfieldova show', ep:'Najdrahší medvedík', lang:'SK', min:12 },
        { id:'8utmK8TkRSw', show:'Kačeří příběhy', ep:'Poklad ze ztracené lampy (film)', lang:'CZ', min:74 },
        { id:'JhapP0DuETo', show:'Růžový panter', ep:'Sink Pink', lang:'bez slov', min:7 },
        { id:'RVU2-KAQ1xU', show:'Spongebob v kalhotách', ep:'Silák Spongebob', lang:'CZ', min:11 },
        { id:'0v-0ufXF8KA', show:'Detektiv Duck', ep:'Little Girl Blue', lang:'CZ', min:22 },
        { id:'KpqWI_ZdwjI', show:'Mr. Bean: Animované příběhy', ep:'Ztracený medvídek', lang:'bez slov', min:11 },
        { id:'G5j-k9mnLII', show:'Rychlá rota', ep:'Rychlá rota', lang:'CZ', min:22 },
        { id:'41aGCrXM20E', show:'Růžový panter', ep:'The Pink Phink', lang:'bez slov', min:7 },
        { id:'LopOr5-uLPQ', show:'Galactik Football', ep:'2. série – 11. díl', lang:'CZ', min:26 },
        { id:'3X4vSyK2fhE', show:'Spongebob v kalhotách', ep:'Spongebob a Plankton', lang:'CZ', min:11 },
        { id:'iob2jUGBQ50', show:'Kačer Kabrňák', ep:'Kačer Kabrňák', lang:'CZ', min:22 },
        { id:'DQjN5Ka8qTk', show:'Mr. Bean: Animované příběhy', ep:'Vynálezce', lang:'bez slov', min:11 },
        { id:'-DJ6CEA0i9I', show:'Růžový panter', ep:'Dial "P" for Pink', lang:'bez slov', min:7 },
        { id:'gPNbYDIuPXs', show:'Kačeří příběhy', ep:'Kačeří příběhy (1987)', lang:'CZ', min:22 },
        { id:'R63piJHBAmc', show:'Spongebob v kalhotách', ep:'Spongebob a bubliny', lang:'CZ', min:11 },
        { id:'o5U7eIwo32M', show:'Rychlá rota', ep:'Rychlá rota', lang:'CZ', min:22 },
        { id:'yIasDc7XTxY', show:'Růžový panter', ep:'Pink Ice', lang:'bez slov', min:7 },
        { id:'yRyBfGRUTcI', show:'Mr. Bean: Animované příběhy', ep:'Problémy s autem', lang:'bez slov', min:11 },
        { id:'H2wm_I7pSaE', show:'Galactik Football', ep:'2. série – 16. díl', lang:'CZ', min:26 },
        { id:'WHOs6nm8qg4', show:'Spongebob v kalhotách', ep:'Spongebobův klon', lang:'CZ', min:11 },
        { id:'xiA6qe5S2wU', show:'Růžový panter', ep:'Pink, Plunk, Plink', lang:'bez slov', min:7 },
        { id:'JrJnY5rpmm8', show:'Rychlá rota', ep:'Chip, Dale, Monty Jack a Gedžitka', lang:'CZ', min:22 },
        { id:'OTT2XxDbWic', show:'Mr. Bean: Animované příběhy', ep:'Problémy vo vlaku', lang:'bez slov', min:11 },
        { id:'T0t_Ivp99sY', show:'Růžový panter', ep:'Vitamin Pink', lang:'bez slov', min:7 },
        { id:'a-3UHk-Fsk0', show:'Spongebob v kalhotách', ep:'Spongebob a studna', lang:'CZ', min:11 },
        { id:'wu65RVbFPPk', show:'Růžový panter', ep:'Smile Pretty, Say Pink', lang:'bez slov', min:7 },
        { id:'m-QpAnKfRB0', show:'Růžový panter', ep:'Psychedelic Pink', lang:'bez slov', min:7 },
        { id:'f2GxXHcXCPc', show:'Kim Possible', ep:'Amnézia', lang:'SK', min:22 },
        { id:'ROrhFa1-iLM', show:'Asterix', ep:'Asterix a překvapení pro Cézara (film)', lang:'CZ', min:79 },
        { playlist:'PLQ7nXaicptSxRccybPZUBAPhSdxh1v9jI', show:'Galactik Football', lang:'CZ', min:26, max:40 },
        { playlist:'PLwhLvPy7SFDEN8_qYEdv7LfbTdO3EQBBd', show:'Život s Louiem', lang:'CZ', min:22, max:40 },
        { playlist:'PLpNHzGK1cU90EcFXgbD0C3n9LiHwJokg4', show:'Kačeří příběhy', lang:'CZ', min:22, max:40 },
        { kanal:'@spionkycz-sk1054', show:'Totally Spies – Špiónky', lang:'CZ', min:22, max:40 },
        { hladaj:['Špiónky celý díl', 'Totally Spies Špiónky', 'Totally Spies Špiónky cz'], obsahuje:'špiónky|spionky', show:'Totally Spies – Špiónky', lang:'CZ', min:22, max:60, jazyk:false },
        { hladaj:['Robotboy cz', 'Robotboy česky', 'Robotboy cz dabing díl'], obsahuje:'robot ?boy', show:'Robotboy', lang:'CZ', min:22, max:30 },
        { hladaj:['Život s Louiem', 'Život s Louiem celý díl', 'Život s Louiem S02', 'Život s Louiem CZ dabing'], obsahuje:'louiem', vynechaj:'life with', show:'Život s Louiem', lang:'CZ', min:22, max:60, jazyk:false },
        { hladaj:['Klíšťák cz', 'Klíšťák celý díl', 'Klíšťák část 1/2', 'Klíšťák S01'], obsahuje:'klíšťák|klistak|klíšťak', show:'Klíšťák', lang:'CZ', min:10, max:60, jazyk:false },
        { hladaj:['Tři kamarádi a Jerry', 'Tři kamarádi a Jerry celý díl', 'Tři kamarádi a Jerry CZ', 'Tři kamarádi a Jerry S2'], obsahuje:'kamarádi a jerry|kamaradi a jerry', vynechaj:'EN\\.dab|\\(EN', show:'Tři kamarádi a Jerry', lang:'CZ', min:7, max:60, jazyk:false },
        { hladaj:['WITCH cz dabing', 'W.I.T.C.H. česky'], obsahuje:'w\\.?i\\.?t\\.?c\\.?h', autor:'W\\.I\\.T\\.C\\.H CZ|CTENO95', show:'W.I.T.C.H.', lang:'CZ', min:22, max:30 },
        { hladaj:['Rychlá rota cz', 'Rychlá rota celý díl', 'Rychlá rota cz dabing'], obsahuje:'rychl[áa] rota', show:'Rychlá rota', lang:'CZ', min:22, max:30, jazyk:false },
        { hladaj:['Totální drama cz', 'Totální drama ostrov'], obsahuje:'tot[áa]ln[íi] drama', show:'Totální drama', lang:'CZ', min:22, max:30, jazyk:false },
        { hladaj:['Garfieldova show cz', 'Garfieldova show celý díl', 'Garfield show sk dabing'], obsahuje:'garfield', show:'Garfieldova show', lang:'CZ', min:12, max:40 },
        { hladaj:['Gumídci', 'Gumídci celý díl', 'Gumídci cz'], obsahuje:'gumídci|gumidci', show:'Gumídci', lang:'CZ', min:22, max:30, jazyk:false, minSek:600, maxSek:1800 },
        { hladaj:['Darkwing Duck cz', 'Darkwing Duck česky'], obsahuje:'darkwing', show:'Darkwing Duck', lang:'CZ', min:22, max:30, minSek:600, maxSek:1800 },
        { hladaj:['Timon a Pumbaa cz', 'Timon a Pumbaa celý díl'], obsahuje:'timon a pumb', show:'Timon a Pumbaa', lang:'CZ', min:11, max:30, jazyk:false, minSek:300, maxSek:1800 },
        { hladaj:['Pepek námořník', 'Pepek námořník cz'], obsahuje:'pepek', show:'Pepek námořník', lang:'CZ', min:7, max:30, jazyk:false, minSek:240, maxSek:1800 },
        { hladaj:['Animáci cz', 'Animáci celý díl'], obsahuje:'animáci', show:'Animáci', lang:'CZ', min:22, max:30, jazyk:false, minSek:600, maxSek:1800 },
        { hladaj:['Pinky a Brain cz', 'Pinky a Brain česky'], obsahuje:'pinky a brain', show:'Pinky a Brain', lang:'CZ', min:22, max:30, jazyk:false, minSek:300, maxSek:1800 },
        { hladaj:['Dexterova laboratoř', 'Dexterova laboratoř cz'], obsahuje:'dexterova laborato', show:'Dexterova laboratoř', lang:'CZ', min:22, max:30, jazyk:false, minSek:300, maxSek:1800 },
        { hladaj:['Kravička a Kuřátko'], obsahuje:'kravi[čc]ka a ku[řr][áa]tko', show:'Kravička a Kuřátko', lang:'CZ', min:22, max:30, jazyk:false, minSek:300, maxSek:1800 },
        { hladaj:['Johnny Bravo cz dabing', 'Johnny Bravo česky'], obsahuje:'johnny bravo', show:'Johnny Bravo', lang:'CZ', min:22, max:30, minSek:300, maxSek:1800 },
        { hladaj:['Kouzelní kmotříčkové', 'Kouzelní kmotříčkové cz'], obsahuje:'kouzeln[ií] kmot', show:'Kouzelní kmotříčkové', lang:'CZ', min:22, max:30, jazyk:false, minSek:300, maxSek:1800 },
        { hladaj:['Jimmy Neutron cz', 'Jimmy Neutron česky'], obsahuje:'jimmy neutron', show:'Jimmy Neutron', lang:'CZ', min:22, max:30, vynechaj:'film|movie', minSek:600, maxSek:1800 },
        { hladaj:['Hej Arnolde', 'Hej Arnolde cz'], obsahuje:'hej,? arnolde', show:'Hej Arnolde!', lang:'CZ', min:22, max:30, jazyk:false, vynechaj:'film|movie', minSek:300, maxSek:1800 },
        { hladaj:['Rugrats cz', 'Rugrats česky'], obsahuje:'rugrats', show:'Rugrats', lang:'CZ', min:22, max:30, vynechaj:'film|movie', minSek:300, maxSek:1800 },
        { hladaj:['Divocí Thornberryovi'], obsahuje:'divo[cč][ií] thornberr', show:'Divocí Thornberryovi', lang:'CZ', min:22, max:30, jazyk:false, minSek:600, maxSek:1800 },
        { hladaj:['SpongeBob v kalhotách cz', 'SpongeBob v kalhotách celý díl'], obsahuje:'v kalhot', show:'SpongeBob v kalhotách', lang:'CZ', min:11, max:30, jazyk:false, vynechaj:'film|movie|hra|game|lego|hračk|minecraft|roblox', minSek:300, maxSek:1800 },
        { hladaj:['SpongeBob v nohaviciach', 'SpongeBob v nohaviciach sk'], obsahuje:'v nohavic', show:'SpongeBob v nohaviciach', lang:'SK', min:11, max:30, jazyk:false, vynechaj:'film|movie|hra|game|lego|hračk|minecraft|roblox', minSek:300, maxSek:1800 },
        { hladaj:['Inspektor Gadget cz', 'Inspektor Gadget česky'], obsahuje:'inspektor gadget', show:'Inspektor Gadget', lang:'CZ', min:22, max:30, vynechaj:'film|movie|2015', minSek:600, maxSek:1800 },
        { hladaj:['Kim Possible cz dabing díl'], obsahuje:'kim possible', show:'Kim Possible', lang:'CZ', min:22, max:30, vynechaj:'film|movie|ps2|gba|hra|game', minSek:600, maxSek:1800 },
        { autor:'^Disney Channel Česk', hladaj:['Phineas a Ferb cz dabing', 'Phineas a Ferb díl'], obsahuje:'phineas', show:'Phineas a Ferb', lang:'CZ', min:22, max:30, jazyk:false, vynechaj:'hračk|plyš|lego|omaľov|omalov|vymaľov|pexeso|puzzle|nálepk|audio|kniha|čte |čtení|čítanie|divadl|písni|píseň|pesni|song|karaoke|film|movie|hra|game|figurk|cosplay|amv|trailer|zvučka|znelka|intro', minSek:600, maxSek:1800 },
        { autor:'^Disney Channel Česk', hladaj:['Lilo a Stitch seriál cz'], obsahuje:'lilo', show:'Lilo a Stitch', lang:'CZ', min:22, max:30, jazyk:false, vynechaj:'hračk|plyš|lego|omaľov|omalov|vymaľov|pexeso|puzzle|nálepk|audio|kniha|čte |čtení|čítanie|divadl|písni|píseň|pesni|song|karaoke|film|movie|hra|game|figurk|cosplay|amv|trailer|zvučka|znelka|intro', minSek:600, maxSek:1800 },
      ]
    },
    {
      nazov: 'Akcia',
      popis: 'anime a akčné seriály',
      reklamy: 3,
      predelKazdych: 2,
      program: [
        { id:'pwOIfrUEA8M', show:'Naruto', ep:'1. díl, 1. časť (Jetix dabing)', lang:'CZ', min:6 },
        { id:'DTTfn7gvhE0', show:'Huntik', ep:'Zrození hledače', lang:'CZ', min:22 },
        { id:'xj3HKEGlvQE', show:'Power Rangers: Síla Strážců', ep:'Zlomené kouzlo (1. část)', lang:'CZ', min:22 },
        { id:'q1c0dI8M4Wc', show:'Beyblade Metal Fusion', ep:'Běž! Síla býka!', lang:'CZ', min:22 },
        { id:'DA8zu58hEYQ', show:'OBAN – nebeské lodě', ep:'Nový začátek', lang:'CZ', min:22 },
        { id:'-SEgHpvI82s', show:'Avatar: Legenda o Aangovi', ep:'Chlapec v ledovci', lang:'CZ', min:22 },
        { id:'n_4vbYUmrIE', show:'Power Rangers: Síla Strážců', ep:'Tajemná formule', lang:'CZ', min:22 },
        { id:'zQVGQSIf7uE', show:'Beyblade Metal Masters', ep:'13. díl', lang:'CZ', min:22 },
        { id:'HO4MBz17lfg', show:'Power Rangers: Síla Strážců', ep:'Hlasy', lang:'CZ', min:22 },
        { id:'3PRsu1XuyQg', show:'Beyblade Metal Fusion', ep:'Tvrdá poslední bitva', lang:'CZ', min:22 },
        { id:'-Vhv7B3ErBY', show:'Power Rangers: Síla Strážců', ep:'Ohnivé srdce', lang:'CZ', min:22 },
        { id:'ZL-JNEgCF_c', show:'Beyblade Metal Masters', ep:'27. díl', lang:'CZ', min:22 },
        { id:'nclfXMJLsCU', show:'Power Rangers: Síla Strážců', ep:'Cizinec (2. část)', lang:'CZ', min:22 },
        { id:'g3592ZthdnU', show:'Beyblade Metal Masters', ep:'43. díl', lang:'CZ', min:22 },
        { id:'iqUjm8oX7IM', show:'Power Rangers: Síla Strážců', ep:'Zdroj světla (1. část)', lang:'CZ', min:22 },
        { id:'WSbDlKyd70o', show:'Power Rangers: Operace Overdrive', ep:'Jednou Rangerem (1. část)', lang:'CZ', min:22 },
        { id:'WM3Byx1-Z9k', show:'Power Rangers: Operace Overdrive', ep:'Jednou Rangerem (2. část)', lang:'CZ', min:22 },
        { id:'B9dig9jOvOM', show:'Pokémon', ep:'Pikachu, volím si tebe!', lang:'CZ', min:22 },
        { id:'8jAuOt1kLYI', show:'Bakugan: Gundalian Invaders', ep:'1. díl', lang:'CZ', min:22 },
        { id:'82347rgAJRU', show:'Naruto', ep:'132. díl', lang:'CZ', min:23 },
        { id:'9a8gvUu1VaU', show:'Beyblade Metal Fusion', ep:'Chyťte vlka!', lang:'CZ', min:22 },
        { id:'_W72hoVddDM', show:'Bakugan', ep:'Šest stupňů zkázy', lang:'CZ', min:22 },
        { id:'HrFiDKeIZPA', show:'Bakugan: Gundalian Invaders', ep:'11. díl', lang:'CZ', min:22 },
        { id:'6NMj1Iypb4o', show:'Bakugan: Gundalian Invaders', ep:'18. díl', lang:'CZ', min:22 },
        { id:'Ol0qBsGWI5c', show:'Bakugan: Gundalian Invaders', ep:'25. díl', lang:'CZ', min:22 },
        { id:'JDn8h8666MU', show:'Bakugan: Gundalian Invaders', ep:'35. díl', lang:'CZ', min:22 },
        { id:'ylgj7iP6Uk4', show:'Želvy Ninja', ep:'V hlubinách lesa', lang:'CZ', min:22 },
        { id:'_IToi99XNWg', show:'Power Rangers: Operace Overdrive', ep:'Za každou cenu', lang:'CZ', min:22 },
        { kanal:'@pokemonserialczsk6452', show:'Pokémon', lang:'CZ', min:22, max:50 },
        { playlist:'PLhr2MGr4OPNcEUNaI_aESmupie_m-Ppzr', show:'Král šamanů', lang:'CZ', min:22, max:40 },
        { playlist:'PL3EEYr69JFOyn1EKmWZwkq6_cPL_LGxEY', show:'Beyblade Metal Masters', lang:'CZ', min:22, max:40 },
        { hladaj:['Pokémon cz dabing celý díl', 'Pokémon česky epizoda', 'Pokémon sk dabing'], obsahuje:'pok[eé]mon', show:'Pokémon', lang:'CZ', min:22, max:30, vynechaj:'karty|cards?\\b|booster|pack|balíč|\\bgo\\b|scarlet|violet|legends|film|soundtrack|movie' },
        { hladaj:['Ben 10 cz dabing', 'Ben 10 česky celý díl'], obsahuje:'ben ?10', show:'Ben 10', lang:'CZ', min:22, max:30, vynechaj:'omnitrix|hračk|toy' },
        { hladaj:['Power Rangers cz dabing', 'Power Rangers česky', 'Power Rangers Síla Strážců cz', 'Mighty Morphin Power Rangers CZ'], obsahuje:'power rangers', show:'Power Rangers', lang:'CZ', min:22, max:50, vynechaj:'film|movie|trailer|game|toy' },
        { hladaj:['Gormiti cz'], obsahuje:'gormiti', show:'Gormiti', vynechaj:'apk|sběratel|kolekc', lang:'CZ', min:22, max:30 },
        { hladaj:['Bakugan cz dabing', 'Bakugan bitevní planeta cz'], obsahuje:'bakugan', show:'Bakugan', lang:'CZ', min:22, max:30, vynechaj:'hračk|toys?|unbox|recenz|game|hra', minSek:600, maxSek:1800 },
        { hladaj:['Naruto cz dabing díl', 'Naruto český dabing'], obsahuje:'naruto', autor:'^Naruto cz$', show:'Naruto', lang:'CZ', min:22, max:30, vynechaj:'shippuden|boruto|film|movie|amv|titulk|\\btit\\b|\\bsub|game|hra|storm|reakc', minSek:600, maxSek:1800 },
        { hladaj:['Yu-Gi-Oh cz dabing díl'], obsahuje:'yu-?gi-?oh', show:'Yu-Gi-Oh!', lang:'CZ', min:22, max:30, vynechaj:'karty|cards?|booster|pack|deck|duel links|master duel|game|hra|ps\\d', minSek:600, maxSek:1800 },
        { hladaj:['Želvy ninja cz dabing díl', 'Želvy ninja 2003 cz'], obsahuje:'[žz]elvy ninja', show:'Želvy Ninja', lang:'CZ', min:22, max:30, jazyk:false, diel:true, vynechaj:'film|movie|trailer|hra|game|lego|hračk|figur', minSek:600, maxSek:1800 },
        { hladaj:['Beyblade Metal Fusion cz', 'Beyblade Metal Fury cz', 'Beyblade cz dabing díl'], obsahuje:'beyblade', show:'Beyblade', lang:'CZ', min:22, max:30, vynechaj:'hračk|toys?|unbox|souboj|arena|launcher|recenz|test|stadium', minSek:600, maxSek:1800 },
        { hladaj:['Oban Star Racers cz'], obsahuje:'oban', show:'Oban Star-Racers', lang:'CZ', min:22, max:30, minSek:600, maxSek:1800 },
        { hladaj:['Monster Buster Club cz'], obsahuje:'monster buster', show:'Monster Buster Club', lang:'CZ', min:22, max:30, minSek:600, maxSek:1800 },
        { autor:'^(Gigatron|Maja Polasek)$', hladaj:['Transformers cz dabing díl', 'Beast Wars cz dabing'], obsahuje:'transformers|beast wars', show:'Transformers', lang:'CZ', min:22, max:30, jazyk:false, vynechaj:'hračk|plyš|lego|omaľov|omalov|vymaľov|pexeso|puzzle|nálepk|audio|kniha|čte |čtení|čítanie|divadl|písni|píseň|pesni|song|karaoke|film|movie|hra|game|figurk|cosplay|amv|trailer|zvučka|znelka|intro|hrá|vs\\.?|figur', minSek:600, maxSek:1800 },
      ]
    },
    {
      nazov: 'Originál',
      popis: 'zahraničné rozprávky po anglicky',
      reklamy: 3,
      predelKazdych: 3,
      program: [
        // Originál po anglicky. Skener kanály a playlisty sám rozbalí a prefiltruje podľa názvu:
        // obsahuje = názov musí sedieť, vynechaj = názov nesmie sedieť (klipy, iné jazyky).

        // SpongeBob: oficiálne maratóny celých dielov (dĺžka je odhad, slot sa počíta z min)
        { id:'8FsJlCpSZRY', show:'SpongeBob SquarePants', ep:'1+ hodina dielov – 2. séria', lang:'EN', min:62 },
        { id:'EDAICKYaUtU', show:'SpongeBob SquarePants', ep:'3 hodiny klasických dielov – 2. séria', lang:'EN', min:165 },
        { id:'iDchyEK-l5Q', show:'SpongeBob SquarePants', ep:'3 hodiny najlepších dielov', lang:'EN', min:165 },
        { id:'uoMvv03mm4E', show:'SpongeBob SquarePants', ep:'120 minút nových dielov', lang:'EN', min:110 },
        // SpongeBob: oficiálne kanály, len diely a maratóny (nie krátke klipy a "momenty")
        { kanal:'@SpongeBobOfficial', show:'SpongeBob SquarePants', lang:'EN', min:44, max:600, minSek:900, maxSek:14400,
          obsahuje:'episodes?|marathon|full\\s+ep|hours?\\b|season', vynechaj:'moment|scene|recreation|IRL|in \\d+ minutes?|minute from|clip|reaction|tutorial|how to|game|trailer|LIVE|español|latino|capítulo|hindi|tamil|telugu|urdu|bahasa|indonesia|português|dublado|deutsch|français|русск' },
        { playlist:'UUx27Pkk8plpiosF14qXq-VA', show:'SpongeBob SquarePants', lang:'EN', min:44, max:600, minSek:900, maxSek:14400,
          obsahuje:'episodes?|marathon|full\\s+ep|hours?\\b|season', vynechaj:'moment|scene|recreation|IRL|in \\d+ minutes?|minute from|clip|reaction|tutorial|how to|game|trailer|LIVE|español|latino|capítulo|hindi|tamil|telugu|urdu|bahasa|indonesia|português|dublado|deutsch|français|русск' },

        // Johnny Bravo: celé diely po anglicky
        // (playlist PLjScWr8… vyhodený 9. 11.: „Full Episode N“ boli cudzie videá, nie Johnny Bravo)
        { playlist:'PLCVuwQ1eXVCWVeSpX0khngqq_UIpX5hYU', show:'Johnny Bravo', lang:'EN', min:11, max:150, minSek:420, maxSek:3000,
          obsahuje:'Bravo', vynechaj:'new episode|watch full|johny|español|latino|capítulo|hindi|tamil|telugu|urdu|bahasa|indonesia|português|dublado|deutsch|français|русск|best of|best moments|top 10|compilation|Johnny Test' },
        { kanal:'johnnybravochannel', show:'Johnny Bravo', lang:'EN', min:22, max:300, minSek:420, maxSek:3000,
          obsahuje:'Johnny Bravo', vynechaj:'new episode|watch full|johny|español|latino|capítulo|hindi|tamil|telugu|urdu|bahasa|indonesia|português|dublado|deutsch|français|русск|best of|best moments|top 10|compilation|theme|intro|Johnny Test' },
        // Ďalšie klasiky po anglicky (cez vyhľadávanie; nahrávateľov overujem v inventúre)
        { hladaj:['Courage the Cowardly Dog full episode'], jazyk:false, diel:false, obsahuje:'courage', show:'Courage the Cowardly Dog', lang:'EN', min:22, max:30, minSek:600, maxSek:3000, vynechaj:'best of|compilation|moments|español|latino|hindi|tamil|dublado|deutsch|français|русск|trailer|game|reaction|theme|intro|cz|sk\\b|česk|slovensk' },
        { hladaj:['Ed Edd n Eddy full episode'], jazyk:false, diel:false, obsahuje:'ed,? edd', show:'Ed, Edd n Eddy', lang:'EN', min:22, max:30, minSek:600, maxSek:3000, vynechaj:'best of|compilation|moments|español|latino|hindi|tamil|dublado|deutsch|français|русск|trailer|game|reaction|theme|intro|cz|sk\\b|česk|slovensk' },
        { hladaj:['Powerpuff Girls full episode', 'The Powerpuff Girls FULL EPISODE'], jazyk:false, diel:false, autor:'^(Cartoon Network|The Powerpuff Girls)$', obsahuje:'powerpuff', show:"The Powerpuff Girls", lang:'EN', min:22, max:30, minSek:600, maxSek:3000, vynechaj:'best of|compilation|moments|español|latino|hindi|tamil|dublado|deutsch|français|русск|trailer|game|reaction|theme|intro|cz|sk\\b|česk|slovensk|shorts?\\b|promo|sneak' },
        { hladaj:['I Am Weasel full episode', 'Dexters Laboratory FULL EPISODE Cartoon Network'], jazyk:false, diel:false, autor:'^Cartoon (Network|Cartoons)(\\sa\\s.*)?$', obsahuje:'weasel|dexter', show:"Cartoon Network klasiky", lang:'EN', min:11, max:30, minSek:600, maxSek:3000, vynechaj:'best of|compilation|moments|español|latino|hindi|tamil|dublado|deutsch|français|русск|trailer|game|reaction|theme|intro|cz|sk\\b|česk|slovensk|shorts?\\b|promo|sneak' },
        { hladaj:['Chip n Dale Rescue Rangers full episode', 'Chip n Dale Rescue Rangers S1 full episode'], jazyk:false, diel:false, autor:'^(Disney Kids( a\\s.*)?|Disney Channel Animation.*)$', obsahuje:'rescue rangers', show:"Chip n Dale: Rescue Rangers", lang:'EN', min:22, max:30, minSek:900, maxSek:3000, vynechaj:'best of|compilation|moments|ganze|aflevering|epis[oó]dio|teljes|volledige|complet|completo|folge|odcinek|trailer|clip|shorts?\\b|promo|reaction|explained' },
        { hladaj:['Lilo and Stitch The Series full episode'], jazyk:false, diel:false, autor:'^(Disney Kids( a\\s.*)?|Disney Channel Animation.*)$', obsahuje:'lilo', show:"Lilo & Stitch: The Series", lang:'EN', min:22, max:30, minSek:900, maxSek:3000, vynechaj:'best of|compilation|moments|ganze|aflevering|epis[oó]dio|teljes|volledige|complet|completo|folge|odcinek|trailer|clip|shorts?\\b|promo|reaction|explained' },
        { hladaj:['Ultimate Spider-Man full episode Marvel HQ'], jazyk:false, diel:false, autor:'^Marvel HQ$', obsahuje:'spider-?man', show:"Spider-Man (Marvel HQ)", lang:'EN', min:22, max:30, minSek:900, maxSek:3000, vynechaj:'best of|compilation|moments|ganze|aflevering|epis[oó]dio|teljes|volledige|complet|completo|folge|odcinek|trailer|clip|shorts?\\b|promo|reaction|explained' },
        { hladaj:['Samurai Jack full episode'], jazyk:false, diel:false, autor:'^Cartoon (Network|Cartoons)(\\sa\\s.*)?$', obsahuje:'samurai jack', show:"Samurai Jack", lang:'EN', min:11, max:30, minSek:600, maxSek:3000, vynechaj:'best of|compilation|moments|español|latino|hindi|tamil|dublado|deutsch|français|русск|trailer|game|reaction|theme|intro|cz|sk\\b|česk|slovensk|shorts?\\b|promo|sneak|every |ranked|explained|recap|clip' },
        { hladaj:['Cow and Chicken full episode Cartoon Network'], jazyk:false, diel:false, autor:'^Cartoon (Network|Cartoons)(\\sa\\s.*)?$', obsahuje:'cow and chicken|i am weasel', show:"Cow and Chicken", lang:'EN', min:11, max:30, minSek:600, maxSek:3000, vynechaj:'best of|compilation|moments|español|latino|hindi|tamil|dublado|deutsch|français|русск|trailer|game|reaction|theme|intro|cz|sk\\b|česk|slovensk|shorts?\\b|promo|sneak|every |ranked|explained|recap|clip' },
        { hladaj:['Billy and Mandy full episode', 'Grim Adventures of Billy and Mandy FULL EPISODE'], jazyk:false, diel:false, autor:'^Cartoon (Network|Cartoons)(\\sa\\s.*)?$', obsahuje:'billy (and|&) mandy|grim adventures', show:"The Grim Adventures of Billy & Mandy", lang:'EN', min:11, max:30, minSek:600, maxSek:3000, vynechaj:'best of|compilation|moments|español|latino|hindi|tamil|dublado|deutsch|français|русск|trailer|game|reaction|theme|intro|cz|sk\\b|česk|slovensk|shorts?\\b|promo|sneak|every |ranked|explained|recap|clip' },
        { hladaj:['Codename Kids Next Door full episode'], jazyk:false, diel:false, autor:'^Cartoon (Network|Cartoons)(\\sa\\s.*)?$', obsahuje:'kids next door|codename', show:"Codename: Kids Next Door", lang:'EN', min:11, max:30, minSek:600, maxSek:3000, vynechaj:'best of|compilation|moments|español|latino|hindi|tamil|dublado|deutsch|français|русск|trailer|game|reaction|theme|intro|cz|sk\\b|česk|slovensk|shorts?\\b|promo|sneak|every |ranked|explained|recap|clip' },
        { hladaj:['Fosters Home for Imaginary Friends full episode'], jazyk:false, diel:false, autor:'^Cartoon (Network|Cartoons)(\\sa\\s.*)?$', obsahuje:'foster', show:"Foster's Home for Imaginary Friends", lang:'EN', min:11, max:30, minSek:600, maxSek:3000, vynechaj:'best of|compilation|moments|español|latino|hindi|tamil|dublado|deutsch|français|русск|trailer|game|reaction|theme|intro|cz|sk\\b|česk|slovensk|shorts?\\b|promo|sneak|every |ranked|explained|recap|clip' },
        { hladaj:['Camp Lazlo full episode'], jazyk:false, diel:false, autor:'^Cartoon (Network|Cartoons)(\\sa\\s.*)?$', obsahuje:'lazlo', show:"Camp Lazlo", lang:'EN', min:11, max:30, minSek:600, maxSek:3000, vynechaj:'best of|compilation|moments|español|latino|hindi|tamil|dublado|deutsch|français|русск|trailer|game|reaction|theme|intro|cz|sk\\b|česk|slovensk|shorts?\\b|promo|sneak|every |ranked|explained|recap|clip' },
        { hladaj:['Time Squad full episode'], jazyk:false, diel:false, autor:'^Cartoon (Network|Cartoons)(\\sa\\s.*)?$', obsahuje:'time squad', show:"Time Squad", lang:'EN', min:11, max:30, minSek:600, maxSek:3000, vynechaj:'best of|compilation|moments|español|latino|hindi|tamil|dublado|deutsch|français|русск|trailer|game|reaction|theme|intro|cz|sk\\b|česk|slovensk|shorts?\\b|promo|sneak|every |ranked|explained|recap|clip' },
        { hladaj:['Mucha Lucha full episode'], jazyk:false, diel:false, autor:'^Cartoon (Network|Cartoons)(\\sa\\s.*)?$', obsahuje:'mucha lucha', show:"Mucha Lucha", lang:'EN', min:11, max:30, minSek:600, maxSek:3000, vynechaj:'best of|compilation|moments|español|latino|hindi|tamil|dublado|deutsch|français|русск|trailer|game|reaction|theme|intro|cz|sk\\b|česk|slovensk|shorts?\\b|promo|sneak|every |ranked|explained|recap|clip' },
        { hladaj:['Megas XLR full episode'], jazyk:false, diel:false, autor:'^Cartoon (Network|Cartoons)(\\sa\\s.*)?$', obsahuje:'megas xlr', show:"Megas XLR", lang:'EN', min:11, max:30, minSek:600, maxSek:3000, vynechaj:'best of|compilation|moments|español|latino|hindi|tamil|dublado|deutsch|français|русск|trailer|game|reaction|theme|intro|cz|sk\\b|česk|slovensk|shorts?\\b|promo|sneak|every |ranked|explained|recap|clip' },
        { hladaj:['Sheep in the Big City full episode'], jazyk:false, diel:false, autor:'^Cartoon (Network|Cartoons)(\\sa\\s.*)?$', obsahuje:'sheep in the big city', show:"Sheep in the Big City", lang:'EN', min:11, max:30, minSek:600, maxSek:3000, vynechaj:'best of|compilation|moments|español|latino|hindi|tamil|dublado|deutsch|français|русск|trailer|game|reaction|theme|intro|cz|sk\\b|česk|slovensk|shorts?\\b|promo|sneak|every |ranked|explained|recap|clip' },
        { hladaj:['Chowder full episode Cartoon Network'], jazyk:false, diel:false, autor:'^Cartoon (Network|Cartoons)(\\sa\\s.*)?$', obsahuje:'chowder', show:"Chowder", lang:'EN', min:11, max:30, minSek:600, maxSek:3000, vynechaj:'best of|compilation|moments|español|latino|hindi|tamil|dublado|deutsch|français|русск|trailer|game|reaction|theme|intro|cz|sk\\b|česk|slovensk|shorts?\\b|promo|sneak|every |ranked|explained|recap|clip' },
        { hladaj:['Marvelous Misadventures of Flapjack full episode'], jazyk:false, diel:false, autor:'^Cartoon (Network|Cartoons)(\\sa\\s.*)?$', obsahuje:'flapjack', show:"Flapjack", lang:'EN', min:11, max:30, minSek:600, maxSek:3000, vynechaj:'best of|compilation|moments|español|latino|hindi|tamil|dublado|deutsch|français|русск|trailer|game|reaction|theme|intro|cz|sk\\b|česk|slovensk|shorts?\\b|promo|sneak|every |ranked|explained|recap|clip' },
        { hladaj:['Teen Titans full episode Cartoon Network'], jazyk:false, diel:false, autor:'^Cartoon (Network|Cartoons)(\\sa\\s.*)?$', obsahuje:'teen titans', show:"Teen Titans", lang:'EN', min:11, max:30, minSek:600, maxSek:3000, vynechaj:'best of|compilation|moments|español|latino|hindi|tamil|dublado|deutsch|français|русск|trailer|game|reaction|theme|intro|cz|sk\\b|česk|slovensk|shorts?\\b|promo|sneak|every |ranked|explained|recap|clip' },
        { hladaj:['Ben 10 classic full episode Cartoon Network'], jazyk:false, diel:false, autor:'^Cartoon (Network|Cartoons)(\\sa\\s.*)?$', obsahuje:'ben 10', show:"Ben 10", lang:'EN', min:11, max:30, minSek:600, maxSek:3000, vynechaj:'best of|compilation|moments|español|latino|hindi|tamil|dublado|deutsch|français|русск|trailer|game|reaction|theme|intro|cz|sk\\b|česk|slovensk|shorts?\\b|promo|sneak|every |ranked|explained|recap|clip' },
        { hladaj:['Dexters Laboratory FULL EPISODE Cartoon Network'], jazyk:false, diel:false, autor:'^Cartoon (Network|Cartoons)(\\sa\\s.*)?$', obsahuje:'dexter', show:"Dexter's Laboratory", lang:'EN', min:11, max:30, minSek:600, maxSek:3000, vynechaj:'best of|compilation|moments|español|latino|hindi|tamil|dublado|deutsch|français|русск|trailer|game|reaction|theme|intro|cz|sk\\b|česk|slovensk|shorts?\\b|promo|sneak|every |ranked|explained|recap|clip' },
        { hladaj:['Johnny Bravo FULL EPISODE Cartoon Network'], jazyk:false, diel:false, autor:'^Cartoon (Network|Cartoons)(\\sa\\s.*)?$', obsahuje:'johnny bravo', show:"Johnny Bravo", lang:'EN', min:11, max:30, minSek:600, maxSek:3000, vynechaj:'best of|compilation|moments|español|latino|hindi|tamil|dublado|deutsch|français|русск|trailer|game|reaction|theme|intro|cz|sk\\b|česk|slovensk|shorts?\\b|promo|sneak|every |ranked|explained|recap|clip' }
      ]
    }
  ],

  /* Reklamy na hračky — po každej rozprávke idú za sebou, točia sa dokola. */
  reklamy: [
    { id:'hWiR7oAHsqI', ep:'LEGO Bionicle – Maska moci', lang:'CZ', sek:35 },
    { id:'4F270bSlSHk', ep:'Hot Wheels – Car Factory (2002)', lang:'EN', sek:35 },
    { id:'zstpFp_Oi04', ep:'LEGO Bionicle', lang:'CZ', sek:35 },
    { id:'AyJnyNX_vDg', ep:'Planet Hot Wheels – Energy Cars (2002)', lang:'EN', sek:35 },
    { id:'lBP3n21jx28', ep:'LEGO Bionicle – Toa Nuva (2002)', lang:'EN', sek:35 },
    { id:'5HFXx_ij93A', ep:'Hot Wheels – Turbo Jet City (2002)', lang:'EN', sek:35 },
    { id:'PiovQRLC_S4', ep:'Hot Wheels – Shark Park (2002)', lang:'EN', sek:35 },
    { id:'4OhJJ0cRQ98', ep:'Action Man – figúrky', lang:'CZ', sek:30 },
    { id:'v6DBPyPNDdM', ep:'Kinder vajíčko – Továrna na vajíčka', lang:'CZ', sek:30 },
    { id:'8o-R4H9pPAk', ep:'Furby (1998)', lang:'EN', sek:15 },
    { id:'KWYn_j0ohpQ', ep:'Furby (1998)', lang:'EN', sek:30 },
    { id:'app3lXgbG40', ep:'Tamagotchi (1997)', lang:'EN', sek:30 },
    { id:'T8_LDW5hO0k', ep:'Pokémon – zberateľské karty (1999)', lang:'EN', sek:30 },
    { id:'FrDGGBzPI2A', ep:'Pokémon – hračky (1999)', lang:'EN', sek:30 },
    { id:'cKa9z2uxxts', ep:'Pokémon TCG – Game Boy Color (1999)', lang:'EN', sek:30 },
    { id:'zdFyvy3qw0Q', ep:'Yomega – jojo (1999)', lang:'EN', sek:30 },
    { id:'k9jbhrcXMhA', ep:'Game Boy Advance (2001)', lang:'EN', sek:30 },
    { id:'UlA31BzFjDc', ep:'Game Boy Advance – Super Mario Advance (2001)', lang:'EN', sek:30 },
    { id:'Fa5cXtqewaM', ep:'Game Boy Advance (2001)', lang:'EN', sek:30 },
    { id:'oGHvd6NuNE0', ep:'Tech Deck – fingerboardy', lang:'EN', sek:30 },
    { id:'HxtACb2K-Xw', ep:'Tech Deck Dudes', lang:'EN', sek:30 },
    { id:'Zm8RpQvZpzY', ep:'Digimon – Digivice D3', lang:'EN', sek:30 },
    { id:'nMV6xYrq9Hw', ep:'LEGO Racers', lang:'EN', sek:30 },
    { id:'5KlNEYRMeI0', ep:'LEGO Galidor (2002)', lang:'EN', sek:30 },
    { id:'5es2scEYrCk', ep:'LEGO Bionicle – Bohrok-Kal (2003)', lang:'EN', sek:30 },
    { id:'G7kBW_hDqH8', ep:'LEGO Bionicle – Titans (2006)', lang:'EN', sek:30 },
    { id:'NtjlZBzQrqE', ep:'LEGO Bionicle – Toa Hordika (2005)', lang:'PL', sek:30 },
    { id:'4Ji74zIAOHg', ep:'LEGO Bionicle – pevnosť Piraka (2006)', lang:'PL', sek:30 },
    { id:'sr0AWWvvhLM', ep:'LEGO Knights Kingdom (2004)', lang:'EN', sek:30 },
    { id:'Rz0f3fDOlZo', ep:'LEGO Knights Kingdom II (2004)', lang:'EN', sek:30 },
    { id:'Akvrjpf1bQA', ep:'Hot Wheels – Highway 35 World Race (2003)', lang:'EN', sek:30 },
    { id:'UscBtrLiK9g', ep:'Micro Machines (1998)', lang:'EN', sek:30 },
    { id:'lsbRIM_hlUE', ep:'Super Soaker (1999)', lang:'EN', sek:30 },
    { id:'J3qG6KomlMk', ep:'Super Soaker – Supercharger (1999)', lang:'EN', sek:30 },
    { id:'v1lOkd7GUsY', ep:'Super Soaker XP 90 (1999)', lang:'EN', sek:30 },
    { id:'gXTdm7uLjFI', ep:'Super Soaker – Wetter is Better (2000)', lang:'EN', sek:30 },
    { id:'0DYA7ggxigM', ep:'Nerf N-Strike (2003)', lang:'EN', sek:30 },
    { id:'VPMAFXBUVB4', ep:'PlayStation – Crash Bandicoot: Warped (1998)', lang:'EN', sek:30 },
    { id:'t1gjERcfZl0', ep:'PlayStation – Crash Bandicoot: Warped (1998)', lang:'EN', sek:15 },
    { id:'zvq8MjyoG_Q', ep:'PlayStation – Spyro the Dragon (1998)', lang:'EN', sek:30 },
    { id:'W4tQ7ontF3Q', ep:'Power Rangers Ninja Storm – Mobile Control Centre (2003)', lang:'EN', sek:30 },
    { id:'SHaRtUDCPR0', ep:'Power Rangers Ninja Storm – Megazord (2003)', lang:'EN', sek:30 },
    { id:'G6v7209uJX8', ep:'Bratz (2001)', lang:'EN', sek:30 },
    { id:'zYP49pImZV0', ep:'Bratz – Stylin\' Salon (2002)', lang:'EN', sek:15 },
    { id:'Qkb5Wc9tqxk', ep:'Bratz – FM Cruiser (2002)', lang:'EN', sek:30 },
    { id:'7jBCVmBHJA0', ep:'Polly Pocket – Fashion Boutique (1999)', lang:'EN', sek:30 },
    { id:'kvHCm4qI2YE', ep:'Kinder Surprise – Mole Mission (2004)', lang:'EN', sek:30 },
    { id:'pEh9ELsNFas', ep:'Beyblade V-Force (2003)', lang:'EN', sek:30 }
  ],

  /* Predely — staré promá a znelky. kanaly:[2,3] = len na týchto kanáloch. */
  predely: [
    { id:'VsSoENH-PNE', ep:'Fox Kids CZ – promá a jingly (2004/2005)', lang:'CZ', kusy:60, min:10, kanaly:[2,3] },
    { id:'x0ODhe6wfTU', ep:'Fox Kids / Jetix CZ – promá a predely', lang:'CZ', kusy:60, min:20, kanaly:[2,3] },
    { id:'ebnqVNJ4Mcs', ep:'Fox Kids – upútavka na seriály', lang:'CZ', sek:60, kanaly:[2] },
    { id:'IWTTTd0mfo0', ep:'Huntik – znelka (Jetix)', lang:'CZ', sek:40, kanaly:[3] },
    { id:'enbbT7m1PYY', ep:'Jetix – predely (2004–2005)', lang:'EN', kusy:30, min:5, kanaly:[2,3] },
    { id:'1oaSNb8US6Y', ep:'Jetix – predely (2004–2009)', lang:'EN', kusy:30, min:10, kanaly:[3] },
    { id:'HvYnxRmL5-Q', ep:'Fox Kids – promo Game (2001)', lang:'EN', sek:60, kanaly:[2] },
    { id:'8H47R46HuMg', ep:'Kačeří příběhy – znělka', lang:'CZ', sek:60, kanaly:[1] }
  ],

  /* Tvoje vlastné videá (znelky Si pozeral). Mp4 nahraj do priečinka pozeral/videa/.
     Príklad: { src:'videa/znelka-1.mp4', ep:'Znelka', sek:10 }  alebo  { id:'YOUTUBE_ID', ep:'Predel', sek:15 } */
  znelky: [
  ]
};
