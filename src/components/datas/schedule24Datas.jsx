
/****Type represents if the Weekend is in Sprint format or traditional
 * 0 = classic (P1, P2, P3, Q, Race)
 * 1 = sprint (P1, SQ, SR, Race)
 */

//Note: China GP will not take place due F1 23 Game regulations of a limit of 24 GP

/**
 * To avoid a 1 month break in April, between the original Japanese GP and Miami GP (bc China GP will not take Place due F1 23 regulations). We could
 * switch the Azerbaijan, which is switched into September in real life to the weekend where the Original China GP takes place -
 * BUT: the loss of Azebaijan GP in September means a 1 month break between Monza and Singapore -> We could do the race calendar adopt with the races before
 * (Netherland and Italy(Monza) GP to take 2 weeks later which resulting in a longer Summer break)
 */



const schedule24Data = [
  

    {
      name: 'Formula 1 Aramco Pre Season Testing 2024',
      round: '',
      country: 'Bahrain',
      destination: 'Sakhir',
      circuit: 'Bahrain International Circuit',
      type: 0,

      startDate: '2024-02-21T00:00:00',
      endDate: '2024-02-23T13:08:00',
      displayDate: '21.02. - 23.02.2024',
      flag: '/mediacontent/logos/f1-red.svg',
      trackmap: 'TCB',
      trackinfo: 'trackinfo_bah',
    },



    {
      name: 'Formula 1 Gulf Air Bahrain Grand Prix 2024',
      round: '1',
      country: 'Bahrain',
      destination: 'Sakhir',
      circuit: 'Bahrain International Circuit',
      type: 0,

      startDate: '2024-02-28T00:00:00',
      endDate: '2024-03-02T23:59:59',
      displayDate: '28.02. - 02.03.2024',

      flag: '/mediacontent/images/flags/bah.avif',
      trackmap: '/mediacontent/images/tracks/bah.avif',
      trackinfo: 'trackinfo_bah',
    },



    {
      name: 'Formula 1 STC Saudi Arabian Grand Prix 2024',
      round: '2',
      country: 'Saudi Arabia',
      destination: 'Jeddah',
      circuit: 'Jeddah Corniche Circuit',
      type: 0,

      startDate: '2024-03-06T00:00:00',
      endDate: '2024-03-09T23:59:59',
      displayDate: '06.03. - 09.03.2024',

      flag: './mediacontent/images/flags/sau.avif',
      trackmap: './mediacontent/images/tracks/sau.avif',
      trackinfo: 'trackinfo_sau',
  },



  {
    name: 'Formula 1 Rolex Australian Grand Prix 2024',
    round: '3',
    country: 'Australia',
    destination: 'Melbourne',
    circuit: 'Melbourne Grand Prix Circuit',
    type: 0,

    startDate: '2024-03-21T00:00:00',
    endDate: '2024-03-24T23:59:59',
    displayDate: '21.03. - 24.03.2024',

    flag: './mediacontent/images/flags/aus.avif',
    trackmap: './mediacontent/images/tracks/aus.avif',
    trackinfo: 'trackinfo_aus',
  },



  {
    name: 'Formula 1 MSC Cruises Japanese Grand Prix 2024',
    round: '4',
    country: 'Japan',
    destination: 'Suzuka',
    circuit: 'Suzuka Racing Course',
    type: 0,

    startDate: '2024-04-04T00:00:00',
    endDate: '2024-04-07T23:59:59',
    displayDate: '04.04. - 07.04.2024',

    flag: './mediacontent/images/flags/jap.avif',
    trackmap: './mediacontent/images/tracks/jap.avif',
    trackinfo: 'trackinfo_jap',
  },



  {
    name: 'Formula 1 Crypto.com Miami Grand Prix 2024',
    round: '5',
    country: 'United States',
    destination: 'Miami',
    circuit: 'Miami International Autodrome',
    type: 0,

    startDate: '2024-05-02T00:00:00',
    endDate: '2024-05-05T23:59:59',
    displayDate: '02.05. - 05.05.2024',

    flag: './mediacontent/images/flags/usa.avif',
    trackmap: './mediacontent/images/tracks/mia.avif',
    trackinfo: 'trackinfo_mia',
  },



  {
    name: 'Formula 1 MSC Cruises Gran Premio Dell `Emilia-Romagna 2024',
    round: '6',
    country: 'Italy',
    destination: 'Imola',
    circuit: 'Autodormo Enzo e Dino Ferrari',
    type: 0,

    startDate: '2024-05-16T00:00:00',
    endDate: '2024-05-19T23:59:59',
    displayDate: '16.05. - 19.05.2024',

    flag: './mediacontent/images/flags/ita.avif',
    trackmap: './mediacontent/images/tracks/imo.avif',
    trackinfo: 'trackinfo_imo',
  },



  {
    name: 'Formula 1 Grand Prix de Monaco 2024',
    round: '7',
    country: 'Monaco',
    destination: 'Monte-Carlo',
    circuit: 'Circuit de Monaco',
    type: 0,

    startDate: '2024-06-23T00:00:00',
    endDate: '2024-06-26T23:59:59',
    displayDate: '23.06. - 26.06.2024',

    flag: './mediacontent/images/flags/mon.avif',
    trackmap: './mediacontent/images/tracks/mon.avif',
    trackinfo: 'trackinfo_mon',
  },



  {
    name: 'Formula 1 Grand Prix Du Canada 2024',
    round: '8',
    country: 'Canada',
    destination: 'Montreal',
    circuit: 'Circuit Gilles-Villeneuve',
    type: 0,

    startDate: '2024-06-06T00:00:00',
    endDate: '2024-06-09T23:59:59',
    displayDate: '06.06. - 09.06.2024',

    flag: './mediacontent/images/flags/can.avif',
    trackmap: './mediacontent/images/tracks/can.avif',
    trackinfo: 'trackinfo_can',
  },



  {
    name: 'Formula 1 Gran Premio de Espana 2024',
    round: '9',
    country: 'Spain',
    destination: 'Barcelona',
    circuit: 'Circuit de Barcelona-Catalyna',
    type: 0,

    startDate: '2024-06-20T00:00:00',
    endDate: '2024-06-23T23:59:59',
    displayDate: '23.06. - 26.06.2024',

    flag: './mediacontent/images/flags/spa.avif',
    trackmap: './mediacontent/images/tracks/spa.avif',
    trackinfo: 'trackinfo_spa',
  },



  {
    name: 'Formula 1 Quatar Airways Austrian Grand Prix 2024',
    round: '10',
    country: 'Austria',
    destination: 'Spielberg',
    circuit: 'Red Bull Ring',
    type: 0,

    startDate: '2024-06-27T00:00:00',
    endDate: '2024-06-30T23:59:59',
    displayDate: '27.06. - 30.06.2024',

    flag: './mediacontent/images/flags/aut.avif',
    trackmap: './mediacontent/images/tracks/aut.avif',
    trackinfo: 'trackinfo_aut',
  },



  {
    name: 'Formula 1 Quatar Airways British Grand Prix 2024',
    round: '11',
    country: 'Great Britain',
    destination: 'Silverstone',
    circuit: 'Silverstone Circuit',
    type: 0,

    startDate: '2024-07-04T00:00:00',
    endDate: '2024-07-07T23:59:59',
    displayDate: '04.07. - 07.07.2024',

    flag: './mediacontent/images/flags/bri.avif',
    trackmap: './mediacontent/images/tracks/bri.avif',
    trackinfo: 'trackinfo_bri',
  },



  {
    name: 'Formula 1 Hungarian Grand Prix 2024',
    round: '12',
    country: 'Hungary',
    destination: 'Budapest',
    circuit: 'Hungaroring',
    type: 0,

    startDate: '2024-07-18T00:00:00',
    endDate: '2024-07-21T23:59:59',
    displayDate: '18.07. - 21.07.2024',

    flag: './mediacontent/images/flags/hun.avif',
    trackmap: './mediacontent/images/tracks/hun.avif',
    trackinfo: 'trackinfo_hun',
  },



  {
    name: 'Formula 1 Rolex Belgian Grand Prix 2024',
    round: '13',
    country: 'Belgium',
    destination: 'Spa-Francorchamps',
    circuit: 'Circuit de Spa-Francorchamps',
    type: 0,

    startDate: '2024-07-25T00:00:00',
    endDate: '2024-07-28T23:59:59',
    displayDate: '25.07. - 28.07.2024',

    flag: './mediacontent/images/flags/bel.avif',
    trackmap: './mediacontent/images/tracks/bel.avif',
    trackinfo: 'trackinfo_bel',
  },



  {
    name: 'Summerbreak',
    country: 'F2, F3',
    destination: 'F1',
    circuit: '',
    type: 0,

    startDate: '2024-07-29T00:00:00',
    endDate: '2024-08-18T23:59:59',
    displayDate: '29.07. - 18.08.2024',

    flag: './mediacontent/logos/f1-white.svg',
    trackmap: 'TCB',
    trackinfo: 'TCB',
  },



  {
    name: 'Formula 1 Heineken Dutch Grand Prix 2024',
    round: '14',
    country: 'Netherlands',
    destination: 'Zanvoort',
    circuit: 'Circuit Zanvoort',
    type: 0,

    startDate: '2024-08-22T00:00:00',
    endDate: '2024-08-25T23:59:59',
    displayDate: '22.08. - 25.08.2024',

    flag: './mediacontent/images/flags/ned.avif',
    trackmap: './mediacontent/images/tracks/ned.avif',
    trackinfo: 'trackinfo_ned',
  },



  {
    name: 'Formula 1 Pirelli Gran Premio D`Italy 2024',
    round: '15',
    country: 'Italy',
    destination: 'Monza',
    circuit: 'Motodromo Nationale di Monza',
    type: 0,

    startDate: '2024-08-29T00:00:00',
    endDate: '2024-09-01T23:59:59',
    displayDate: '29.08. - 01.09.2024',

    flag: './mediacontent/images/flags/ita.avif',
    trackmap: './mediacontent/images/tracks/ita.avif',
    trackinfo: 'trackinfo_ita',
  },



  {
    name: 'Formula 1 Quatar Airways Azerbaijan Grand Prix 2024',
    round: '16',
    country: 'Azerbaijan',
    destination: 'Baku',
    circuit: 'Baku City Circuit',
    type: 0,

    startDate: '2024-09-12T00:00:00',
    endDate: '2024-09-15T23:59:59',
    displayDate: '12.09. - 15.09.2024',

    flag: './mediacontent/images/flags/aze.avif',
    trackmap: './mediacontent/images/tracks/aze.avif',
    trackinfo: 'trackinfo_aze',
  },



  {
    name: 'Formula 1 Singapore Airlines Singapore Grand Prix 2024',
    round: '17',
    country: 'Singapore',
    destination: 'Singapore',
    circuit: 'Marina Bay Street Circuit',
    type: 0,

    startDate: '2024-09-19T00:00:00',
    endDate: '2024-09-22T23:59:59',
    displayDate: '19.09. - 22.09.2024',

    flag: './mediacontent/images/flags/sin.avif',
    trackmap: './mediacontent/images/tracks/sin.avif',
    trackinfo: 'trackinfo_sin',
  },



  {
    name: 'Formula 1 Pirelli United States Grand Prix 2024',
    round: '18',
    country: 'United States',
    destination: 'Austin, Texas',
    circuit: 'Circuit of the Americas',
    type: 0,

    startDate: '2024-10-17T00:00:00',
    endDate: '2024-10-20T23:59:59',
    displayDate: '17.10. - 20.10.2024',

    flag: './mediacontent/images/flags/usa.avif',
    trackmap: './mediacontent/images/tracks/tex.avif',
    trackinfo: 'trackinfo_tex',
  },



  {
    name: 'Formula 1 Gran Premio de la Ciudad de Mexico 2024',
    round: '19',
    country: 'Mexico',
    destination: 'Mexico-City',
    circuit: 'Autodromo Hermanos Rodriguez',
    type: 0,

    startDate: '2024-10-24T00:00:00',
    endDate: '2024-10-27T23:59:59',
    displayDate: '25.07. - 28.07.2024',

    flag: './mediacontent/images/flags/mex.avif',
    trackmap: './mediacontent/images/tracks/mex.avif',
    trackinfo: 'trackinfo_mex',
  },



  {
    name: 'Formula 1 Lenovo Grande Premio de Sau Paulo 2024',
    round: '20',
    country: 'Brazil',
    destination: 'Interlagos',
    circuit: 'Autodromo Jose Carlos Pace',
    type: 0,

    startDate: '2024-10-31T00:00:00',
    endDate: '2024-11-03T23:59:59',
    displayDate: '31.10. - 03.11.2024',

    flag: './mediacontent/images/flags/bra.avif',
    trackmap: './mediacontent/images/tracks/bra.avif',
    trackinfo: 'trackinfo_bra',
  },



  {
    name: 'Formula 1 Heineken Silver Las Vegas Grand Prix 2024',
    round: '21',
    country: 'United States',
    destination: 'Las Vegas, Nevada',
    circuit: 'Las Vegas Strip Circuit',
    type: 0,

    startDate: '2024-11-20T00:00:00',
    endDate: '2024-11-23T23:59:59',
    displayDate: '20.11. - 23.11.2024',

    flag: './mediacontent/images/flags/usa.avif',
    trackmap: './mediacontent/images/tracks/veg.avif',
    trackinfo: 'trackinfo_veg',
  },



  {
    name: 'Formula 1 Quatar Airways Quatar Grand Prix 2024',
    round: '22',
    country: 'Quatar',
    destination: 'Lossail',
    circuit: 'Losail International Circuit',
    type: 0,

    startDate: '2024-11-28T00:00:00',
    endDate: '2024-12-01T23:59:59',
    displayDate: '28.11. - 01.12.2024',

    flag: './mediacontent/images/flags/qua.avif',
    trackmap: './mediacontent/images/tracks/qua.avif',
    trackinfo: 'trackinfo_qua',
  },



  {
    name: 'Formula 1 Etihad Airways Abu Dhabi Grand Prix 2024',
    round: '23',
    country: 'Abu Dhabi',
    destination: 'Yas Island',
    circuit: 'Yas Marina Circuit',
    type: 0,

    startDate: '2024-12-05T00:00:00',
    endDate: '2024-12-08T23:59:59',
    displayDate: '05.12. - 08.12.2024',

    flag: './mediacontent/images/flags/abu.avif',
    trackmap: './mediacontent/images/tracks/abu.avif',
    trackinfo: 'trackinfo_abu',
  },



  {
    name: 'Formula 1 Aramco Post Season Testing 2024',
    country: 'Abu Dhabi',
    destination: 'Yas Island',
    circuit: 'Yas Marina Circuit',
    type: 0,

    startDate: '2024-12-10T00:00:00',
    endDate: '2024-12-10T13:08:00',
    displayDate: '10.12.2024',

    flag: './mediacontent/logos/f1-red.svg',
    trackmap: 'TCB',
    trackinfo: 'TCB',
  },



  ];
  



  export default schedule24Data;



  // Preload images
function preloadImages(data) {
  const imagePreloads = [];

  data.forEach(item => {
    const image = new Image();
    image.src = item.flag;
    imagePreloads.push(image);
  });

  return Promise.all(imagePreloads.map(img => new Promise(resolve => img.onload = resolve)));
}

// Usage
preloadImages(schedule24Data).then(() => {
  // Images are preloaded, you can proceed with your application logic
  console.log('Images preloaded successfully.');
});