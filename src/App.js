import TableResponsive from "./components/TableResponsive";

const data = [
  {
    id: 1,
    first_name: "Norrie",
    last_name: "Prophet",
    email: "nprophet0@newsvine.com",
    gender: "Genderqueer",
    ip_address: "47.152.1.247",
    company_name: "Jaxspan",
    phone: "(406) 5304154",
    create_time: "10:17 AM",
  },
  {
    id: 2,
    first_name: "Gard",
    last_name: "Letford",
    email: "gletford1@ocn.ne.jp",
    gender: "Male",
    ip_address: "186.228.106.158",
    company_name: "Eare",
    phone: "(406) 1881453",
    create_time: "11:00 AM",
  },
  {
    id: 3,
    first_name: "Ardella",
    last_name: "Angelo",
    email: "aangelo2@newsvine.com",
    gender: "Male",
    ip_address: "61.80.137.80",
    company_name: "Twitternation",
    phone: "(910) 7730091",
    create_time: "9:59 PM",
  },
  {
    id: 4,
    first_name: "Ruthanne",
    last_name: "Kelston",
    email: "rkelston3@1und1.de",
    gender: "Female",
    ip_address: "37.2.34.164",
    company_name: "Yacero",
    phone: "(904) 8047821",
    create_time: "1:11 PM",
  },
  {
    id: 5,
    first_name: "Rosana",
    last_name: "Boxhill",
    email: "rboxhill4@people.com.cn",
    gender: "Female",
    ip_address: "100.198.106.205",
    company_name: "Wikizz",
    phone: "(670) 2016986",
    create_time: "7:40 PM",
  },
  {
    id: 6,
    first_name: "Virginia",
    last_name: "McCambrois",
    email: "vmccambrois5@sciencedaily.com",
    gender: "Female",
    ip_address: "241.93.4.49",
    company_name: "Browsebug",
    phone: "(237) 5203298",
    create_time: "2:29 PM",
  },
  {
    id: 7,
    first_name: "Berton",
    last_name: "Dainton",
    email: "bdainton6@goodreads.com",
    gender: "Male",
    ip_address: "34.126.230.224",
    company_name: "Vidoo",
    phone: "(977) 8740958",
    create_time: "6:19 AM",
  },
  {
    id: 8,
    first_name: "Engracia",
    last_name: "Gerrietz",
    email: "egerrietz7@mozilla.org",
    gender: "Female",
    ip_address: "112.74.61.116",
    company_name: "Trudeo",
    phone: "(263) 6724274",
    create_time: "12:12 PM",
  },
  {
    id: 9,
    first_name: "Darcy",
    last_name: "Liebmann",
    email: "dliebmann8@wikia.com",
    gender: "Female",
    ip_address: "69.174.122.192",
    company_name: "Jazzy",
    phone: "(695) 4441698",
    create_time: "11:55 AM",
  },
  {
    id: 10,
    first_name: "Duky",
    last_name: "Pudden",
    email: "dpudden9@slideshare.net",
    gender: "Male",
    ip_address: "93.170.120.95",
    company_name: "Gabtune",
    phone: "(974) 4781506",
    create_time: "2:40 PM",
  },
  {
    id: 11,
    first_name: "Adi",
    last_name: "Seakings",
    email: "aseakingsa@intel.com",
    gender: "Female",
    ip_address: "156.28.153.146",
    company_name: "Gabcube",
    phone: "(620) 1580381",
    create_time: "5:18 PM",
  },
  {
    id: 12,
    first_name: "Cletis",
    last_name: "Pawelek",
    email: "cpawelekb@wikipedia.org",
    gender: "Female",
    ip_address: "146.251.20.254",
    company_name: "Eidel",
    phone: "(354) 5660641",
    create_time: "9:38 PM",
  },
  {
    id: 13,
    first_name: "Lionello",
    last_name: "Wharrier",
    email: "lwharrierc@gov.uk",
    gender: "Male",
    ip_address: "187.106.245.53",
    company_name: "Meevee",
    phone: "(213) 6131147",
    create_time: "12:57 AM",
  },
  {
    id: 14,
    first_name: "Stillmann",
    last_name: "Duns",
    email: "sdunsd@vk.com",
    gender: "Male",
    ip_address: "217.2.190.79",
    company_name: "Kwilith",
    phone: "(414) 1489176",
    create_time: "2:38 PM",
  },
  {
    id: 15,
    first_name: "Blondy",
    last_name: "German",
    email: "bgermane@mapquest.com",
    gender: "Female",
    ip_address: "255.10.116.24",
    company_name: "Kwinu",
    phone: "(369) 5775240",
    create_time: "9:41 PM",
  },
  {
    id: 16,
    first_name: "Hermina",
    last_name: "Savary",
    email: "hsavaryf@sciencedaily.com",
    gender: "Male",
    ip_address: "126.225.181.22",
    company_name: "Thoughtbridge",
    phone: "(690) 7237902",
    create_time: "3:06 AM",
  },
  {
    id: 17,
    first_name: "Etti",
    last_name: "Brunner",
    email: "ebrunnerg@hud.gov",
    gender: "Female",
    ip_address: "107.196.204.65",
    company_name: "Meedoo",
    phone: "(517) 8252089",
    create_time: "11:54 PM",
  },
  {
    id: 18,
    first_name: "Lodovico",
    last_name: "Cunney",
    email: "lcunneyh@technorati.com",
    gender: "Male",
    ip_address: "120.33.247.44",
    company_name: "Oyoba",
    phone: "(829) 8710963",
    create_time: "10:25 PM",
  },
  {
    id: 19,
    first_name: "Willetta",
    last_name: "Bromehed",
    email: "wbromehedi@bing.com",
    gender: "Female",
    ip_address: "61.154.139.146",
    company_name: "Trunyx",
    phone: "(266) 3968182",
    create_time: "12:31 AM",
  },
  {
    id: 20,
    first_name: "Javier",
    last_name: "Moquin",
    email: "jmoquinj@squarespace.com",
    gender: "Male",
    ip_address: "29.95.177.242",
    company_name: "Tanoodle",
    phone: "(255) 8385273",
    create_time: "9:41 AM",
  },
  {
    id: 21,
    first_name: "Cariotta",
    last_name: "Fagence",
    email: "cfagencek@cdc.gov",
    gender: "Agender",
    ip_address: "36.19.184.245",
    company_name: "Jabberbean",
    phone: "(387) 3688642",
    create_time: "1:39 PM",
  },
  {
    id: 22,
    first_name: "Lorrie",
    last_name: "Bonas",
    email: "lbonasl@ameblo.jp",
    gender: "Female",
    ip_address: "158.158.208.213",
    company_name: "Eadel",
    phone: "(909) 5237246",
    create_time: "4:52 AM",
  },
  {
    id: 23,
    first_name: "Jonis",
    last_name: "Guiel",
    email: "jguielm@nydailynews.com",
    gender: "Male",
    ip_address: "20.147.33.234",
    company_name: "Dabvine",
    phone: "(878) 1741261",
    create_time: "3:40 AM",
  },
  {
    id: 24,
    first_name: "Kate",
    last_name: "Odde",
    email: "kodden@goodreads.com",
    gender: "Female",
    ip_address: "0.190.170.10",
    company_name: "Avamm",
    phone: "(681) 6491559",
    create_time: "5:46 PM",
  },
  {
    id: 25,
    first_name: "Saundra",
    last_name: "Cranmer",
    email: "scranmero@prweb.com",
    gender: "Male",
    ip_address: "156.177.92.172",
    company_name: "Minyx",
    phone: "(700) 5775278",
    create_time: "12:11 AM",
  },
  {
    id: 26,
    first_name: "Kare",
    last_name: "Servant",
    email: "kservantp@cnn.com",
    gender: "Female",
    ip_address: "98.28.20.177",
    company_name: "Oyoba",
    phone: "(200) 8363880",
    create_time: "6:57 PM",
  },
  {
    id: 27,
    first_name: "Elisha",
    last_name: "Isaac",
    email: "eisaacq@cloudflare.com",
    gender: "Male",
    ip_address: "198.90.144.58",
    company_name: "Flashspan",
    phone: "(374) 1595917",
    create_time: "1:04 AM",
  },
  {
    id: 28,
    first_name: "Winfred",
    last_name: "Comerford",
    email: "wcomerfordr@microsoft.com",
    gender: "Female",
    ip_address: "59.209.172.134",
    company_name: "Rhynyx",
    phone: "(512) 9856159",
    create_time: "12:02 AM",
  },
  {
    id: 29,
    first_name: "Vachel",
    last_name: "Goulter",
    email: "vgoulters@archive.org",
    gender: "Genderfluid",
    ip_address: "9.14.70.140",
    company_name: "Rhyzio",
    phone: "(247) 5086841",
    create_time: "1:33 AM",
  },
  {
    id: 30,
    first_name: "Borden",
    last_name: "Euplate",
    email: "beuplatet@symantec.com",
    gender: "Female",
    ip_address: "138.51.173.21",
    company_name: "Trilia",
    phone: "(304) 3330238",
    create_time: "6:33 AM",
  },
  {
    id: 31,
    first_name: "Dyanna",
    last_name: "Shory",
    email: "dshoryu@gravatar.com",
    gender: "Male",
    ip_address: "121.78.87.255",
    company_name: "Midel",
    phone: "(177) 4350170",
    create_time: "1:56 AM",
  },
  {
    id: 32,
    first_name: "Garrot",
    last_name: "Deerness",
    email: "gdeernessv@myspace.com",
    gender: "Male",
    ip_address: "215.169.171.134",
    company_name: "Oloo",
    phone: "(155) 1634422",
    create_time: "4:49 AM",
  },
  {
    id: 33,
    first_name: "Mavis",
    last_name: "Stourton",
    email: "mstourtonw@cafepress.com",
    gender: "Female",
    ip_address: "173.159.242.191",
    company_name: "Realblab",
    phone: "(611) 8174208",
    create_time: "8:11 PM",
  },
  {
    id: 34,
    first_name: "Rolph",
    last_name: "Sea",
    email: "rseax@who.int",
    gender: "Female",
    ip_address: "155.255.32.95",
    company_name: "Rhybox",
    phone: "(462) 9389278",
    create_time: "9:59 PM",
  },
  {
    id: 35,
    first_name: "Engelbert",
    last_name: "Demetr",
    email: "edemetry@kickstarter.com",
    gender: "Female",
    ip_address: "63.97.108.131",
    company_name: "Jetwire",
    phone: "(382) 8690724",
    create_time: "4:05 AM",
  },
  {
    id: 36,
    first_name: "Jillana",
    last_name: "Stratford",
    email: "jstratfordz@huffingtonpost.com",
    gender: "Male",
    ip_address: "124.24.204.205",
    company_name: "Rhynoodle",
    phone: "(387) 4507684",
    create_time: "10:28 PM",
  },
  {
    id: 37,
    first_name: "Clerkclaude",
    last_name: "Beards",
    email: "cbeards10@123-reg.co.uk",
    gender: "Male",
    ip_address: "145.23.136.87",
    company_name: "Babbleset",
    phone: "(542) 4244367",
    create_time: "5:59 AM",
  },
  {
    id: 38,
    first_name: "Bobbi",
    last_name: "Whisby",
    email: "bwhisby11@google.ru",
    gender: "Male",
    ip_address: "246.103.195.65",
    company_name: "Innotype",
    phone: "(378) 5919566",
    create_time: "4:10 AM",
  },
  {
    id: 39,
    first_name: "Solomon",
    last_name: "Mingey",
    email: "smingey12@paypal.com",
    gender: "Male",
    ip_address: "193.198.164.11",
    company_name: "Bubblemix",
    phone: "(990) 6807077",
    create_time: "1:46 AM",
  },
  {
    id: 40,
    first_name: "Basil",
    last_name: "Demonge",
    email: "bdemonge13@unc.edu",
    gender: "Male",
    ip_address: "212.39.30.76",
    company_name: "Dynazzy",
    phone: "(803) 5775879",
    create_time: "8:22 PM",
  },
  {
    id: 41,
    first_name: "Margaret",
    last_name: "Bockmann",
    email: "mbockmann14@cnbc.com",
    gender: "Female",
    ip_address: "58.223.216.153",
    company_name: "Ailane",
    phone: "(277) 6856658",
    create_time: "1:57 AM",
  },
  {
    id: 42,
    first_name: "Donnell",
    last_name: "Antoons",
    email: "dantoons15@altervista.org",
    gender: "Polygender",
    ip_address: "225.214.116.191",
    company_name: "Flashset",
    phone: "(239) 7389027",
    create_time: "7:31 PM",
  },
  {
    id: 43,
    first_name: "Marie",
    last_name: "Chown",
    email: "mchown16@yolasite.com",
    gender: "Female",
    ip_address: "11.167.129.9",
    company_name: "Fiveclub",
    phone: "(954) 4167798",
    create_time: "4:41 PM",
  },
  {
    id: 44,
    first_name: "Rhonda",
    last_name: "Fullegar",
    email: "rfullegar17@oracle.com",
    gender: "Male",
    ip_address: "100.170.240.171",
    company_name: "Gabvine",
    phone: "(765) 5306778",
    create_time: "10:32 AM",
  },
  {
    id: 45,
    first_name: "Bellanca",
    last_name: "Prinn",
    email: "bprinn18@sogou.com",
    gender: "Female",
    ip_address: "144.54.204.217",
    company_name: "Youtags",
    phone: "(660) 7965584",
    create_time: "11:55 PM",
  },
  {
    id: 46,
    first_name: "Jodi",
    last_name: "Kosiada",
    email: "jkosiada19@cbc.ca",
    gender: "Female",
    ip_address: "15.222.173.84",
    company_name: "Innojam",
    phone: "(649) 1290460",
    create_time: "8:06 AM",
  },
  {
    id: 47,
    first_name: "Carina",
    last_name: "Kerans",
    email: "ckerans1a@cisco.com",
    gender: "Female",
    ip_address: "48.185.154.233",
    company_name: "Linklinks",
    phone: "(205) 8018533",
    create_time: "9:15 PM",
  },
  {
    id: 48,
    first_name: "Rhianna",
    last_name: "Camosso",
    email: "rcamosso1b@sfgate.com",
    gender: "Female",
    ip_address: "173.251.103.238",
    company_name: "Mybuzz",
    phone: "(972) 7160963",
    create_time: "12:18 PM",
  },
  {
    id: 49,
    first_name: "Jonell",
    last_name: "Parzis",
    email: "jparzis1c@prnewswire.com",
    gender: "Male",
    ip_address: "127.176.68.117",
    company_name: "Feedfish",
    phone: "(761) 3304455",
    create_time: "5:23 AM",
  },
  {
    id: 50,
    first_name: "Scarlett",
    last_name: "Lethem",
    email: "slethem1d@mayoclinic.com",
    gender: "Female",
    ip_address: "156.28.193.240",
    company_name: "Skipfire",
    phone: "(210) 1401896",
    create_time: "6:06 PM",
  },
  {
    id: 51,
    first_name: "Karolina",
    last_name: "Littlewood",
    email: "klittlewood1e@npr.org",
    gender: "Male",
    ip_address: "255.142.14.43",
    company_name: "Skyvu",
    phone: "(350) 8029747",
    create_time: "3:09 AM",
  },
  {
    id: 52,
    first_name: "Minor",
    last_name: "Rockcliffe",
    email: "mrockcliffe1f@studiopress.com",
    gender: "Female",
    ip_address: "114.229.72.27",
    company_name: "Ooba",
    phone: "(466) 9973374",
    create_time: "1:36 PM",
  },
  {
    id: 53,
    first_name: "Fanny",
    last_name: "Syne",
    email: "fsyne1g@mlb.com",
    gender: "Female",
    ip_address: "123.199.82.72",
    company_name: "Thoughtbeat",
    phone: "(919) 8999586",
    create_time: "4:09 AM",
  },
  {
    id: 54,
    first_name: "Clerc",
    last_name: "Tander",
    email: "ctander1h@vimeo.com",
    gender: "Female",
    ip_address: "49.67.70.169",
    company_name: "Brightdog",
    phone: "(356) 5827558",
    create_time: "6:19 PM",
  },
  {
    id: 55,
    first_name: "Florrie",
    last_name: "O'Mahoney",
    email: "fomahoney1i@ucsd.edu",
    gender: "Polygender",
    ip_address: "159.89.48.148",
    company_name: "Yombu",
    phone: "(696) 1328171",
    create_time: "6:00 AM",
  },
  {
    id: 56,
    first_name: "Efrem",
    last_name: "Arnaud",
    email: "earnaud1j@printfriendly.com",
    gender: "Female",
    ip_address: "18.15.193.162",
    company_name: "Gabtune",
    phone: "(225) 5167359",
    create_time: "3:30 AM",
  },
  {
    id: 57,
    first_name: "Remy",
    last_name: "Coakley",
    email: "rcoakley1k@ow.ly",
    gender: "Female",
    ip_address: "56.205.233.224",
    company_name: "Yodel",
    phone: "(863) 9649044",
    create_time: "12:19 AM",
  },
  {
    id: 58,
    first_name: "Dody",
    last_name: "Westwell",
    email: "dwestwell1l@sciencedirect.com",
    gender: "Male",
    ip_address: "94.155.215.86",
    company_name: "Plajo",
    phone: "(621) 7705284",
    create_time: "6:52 PM",
  },
  {
    id: 59,
    first_name: "Johnathan",
    last_name: "Dudill",
    email: "jdudill1m@about.com",
    gender: "Female",
    ip_address: "76.226.127.128",
    company_name: "Mudo",
    phone: "(709) 9337889",
    create_time: "4:35 AM",
  },
  {
    id: 60,
    first_name: "Byrann",
    last_name: "Gandar",
    email: "bgandar1n@imageshack.us",
    gender: "Male",
    ip_address: "18.64.152.143",
    company_name: "Jaloo",
    phone: "(173) 6140321",
    create_time: "8:23 AM",
  },
  {
    id: 61,
    first_name: "Jessamine",
    last_name: "Pennycuick",
    email: "jpennycuick1o@bloglines.com",
    gender: "Female",
    ip_address: "77.60.190.229",
    company_name: "Zoomdog",
    phone: "(130) 5017975",
    create_time: "2:38 PM",
  },
  {
    id: 62,
    first_name: "Riva",
    last_name: "Goodbur",
    email: "rgoodbur1p@php.net",
    gender: "Male",
    ip_address: "22.88.223.89",
    company_name: "Kayveo",
    phone: "(500) 3970404",
    create_time: "2:45 AM",
  },
  {
    id: 63,
    first_name: "Bianca",
    last_name: "Custy",
    email: "bcusty1q@google.co.uk",
    gender: "Male",
    ip_address: "93.17.215.152",
    company_name: "Yabox",
    phone: "(762) 9967657",
    create_time: "12:30 PM",
  },
  {
    id: 64,
    first_name: "Guenevere",
    last_name: "Waud",
    email: "gwaud1r@alexa.com",
    gender: "Female",
    ip_address: "232.120.37.167",
    company_name: "Mycat",
    phone: "(337) 7990011",
    create_time: "7:39 AM",
  },
  {
    id: 65,
    first_name: "Yasmeen",
    last_name: "Ide",
    email: "yide1s@cisco.com",
    gender: "Male",
    ip_address: "190.83.71.72",
    company_name: "Gabspot",
    phone: "(538) 3201726",
    create_time: "10:04 PM",
  },
  {
    id: 66,
    first_name: "Baudoin",
    last_name: "Ambrogetti",
    email: "bambrogetti1t@fc2.com",
    gender: "Female",
    ip_address: "146.212.197.2",
    company_name: "Yodel",
    phone: "(467) 6525985",
    create_time: "4:51 PM",
  },
  {
    id: 67,
    first_name: "Kerry",
    last_name: "Rowcliffe",
    email: "krowcliffe1u@sogou.com",
    gender: "Female",
    ip_address: "104.116.43.84",
    company_name: "Riffwire",
    phone: "(822) 6238219",
    create_time: "8:47 PM",
  },
  {
    id: 68,
    first_name: "Gasparo",
    last_name: "Sollas",
    email: "gsollas1v@addtoany.com",
    gender: "Female",
    ip_address: "201.83.189.119",
    company_name: "Voonyx",
    phone: "(579) 6253619",
    create_time: "3:42 AM",
  },
  {
    id: 69,
    first_name: "Serge",
    last_name: "De Haven",
    email: "sdehaven1w@yellowbook.com",
    gender: "Female",
    ip_address: "67.145.118.174",
    company_name: "Zoonoodle",
    phone: "(132) 4463203",
    create_time: "6:53 AM",
  },
  {
    id: 70,
    first_name: "Darwin",
    last_name: "Canny",
    email: "dcanny1x@cbc.ca",
    gender: "Female",
    ip_address: "225.158.200.40",
    company_name: "JumpXS",
    phone: "(994) 7522550",
    create_time: "8:36 AM",
  },
  {
    id: 71,
    first_name: "Dillie",
    last_name: "Groneway",
    email: "dgroneway1y@nifty.com",
    gender: "Male",
    ip_address: "127.0.145.55",
    company_name: "Gigaclub",
    phone: "(138) 3142830",
    create_time: "11:02 AM",
  },
  {
    id: 72,
    first_name: "Maynard",
    last_name: "Kinsey",
    email: "mkinsey1z@drupal.org",
    gender: "Female",
    ip_address: "220.168.249.119",
    company_name: "Avaveo",
    phone: "(873) 9655918",
    create_time: "9:29 PM",
  },
  {
    id: 73,
    first_name: "Dorolisa",
    last_name: "Walrond",
    email: "dwalrond20@bloglovin.com",
    gender: "Female",
    ip_address: "229.11.44.32",
    company_name: "Skynoodle",
    phone: "(817) 8845525",
    create_time: "1:26 AM",
  },
  {
    id: 74,
    first_name: "Abran",
    last_name: "Sturte",
    email: "asturte21@nationalgeographic.com",
    gender: "Female",
    ip_address: "229.115.248.217",
    company_name: "Trudoo",
    phone: "(807) 2965161",
    create_time: "1:35 PM",
  },
  {
    id: 75,
    first_name: "Marietta",
    last_name: "Stoite",
    email: "mstoite22@psu.edu",
    gender: "Female",
    ip_address: "89.167.50.39",
    company_name: "Shufflebeat",
    phone: "(880) 2967226",
    create_time: "8:24 AM",
  },
  {
    id: 76,
    first_name: "Natalya",
    last_name: "Frean",
    email: "nfrean23@indiatimes.com",
    gender: "Female",
    ip_address: "130.47.83.208",
    company_name: "Kwinu",
    phone: "(678) 2788111",
    create_time: "7:55 PM",
  },
  {
    id: 77,
    first_name: "Lottie",
    last_name: "Gawen",
    email: "lgawen24@miibeian.gov.cn",
    gender: "Female",
    ip_address: "21.153.245.114",
    company_name: "Riffpedia",
    phone: "(616) 6621337",
    create_time: "3:00 PM",
  },
  {
    id: 78,
    first_name: "Wanids",
    last_name: "Skelton",
    email: "wskelton25@hhs.gov",
    gender: "Male",
    ip_address: "119.144.184.105",
    company_name: "Gigaclub",
    phone: "(921) 9683386",
    create_time: "11:20 PM",
  },
  {
    id: 79,
    first_name: "Marjy",
    last_name: "Kilduff",
    email: "mkilduff26@scribd.com",
    gender: "Female",
    ip_address: "242.231.163.37",
    company_name: "Meezzy",
    phone: "(388) 2308780",
    create_time: "11:30 PM",
  },
  {
    id: 80,
    first_name: "Terence",
    last_name: "Sinncock",
    email: "tsinncock27@psu.edu",
    gender: "Male",
    ip_address: "179.80.25.152",
    company_name: "Divape",
    phone: "(258) 2177582",
    create_time: "3:18 PM",
  },
  {
    id: 81,
    first_name: "Godfree",
    last_name: "Coveny",
    email: "gcoveny28@uiuc.edu",
    gender: "Male",
    ip_address: "176.223.70.252",
    company_name: "Wikivu",
    phone: "(453) 7495296",
    create_time: "3:39 AM",
  },
  {
    id: 82,
    first_name: "Gill",
    last_name: "Crowcum",
    email: "gcrowcum29@cbc.ca",
    gender: "Female",
    ip_address: "167.160.105.9",
    company_name: "Meetz",
    phone: "(636) 2837270",
    create_time: "10:06 AM",
  },
  {
    id: 83,
    first_name: "Smith",
    last_name: "Wardale",
    email: "swardale2a@biblegateway.com",
    gender: "Female",
    ip_address: "250.141.3.83",
    company_name: "Voonix",
    phone: "(297) 1519553",
    create_time: "7:27 PM",
  },
  {
    id: 84,
    first_name: "Bartolemo",
    last_name: "O'Carmody",
    email: "bocarmody2b@toplist.cz",
    gender: "Female",
    ip_address: "105.242.206.47",
    company_name: "Mynte",
    phone: "(743) 2183841",
    create_time: "10:36 PM",
  },
  {
    id: 85,
    first_name: "Candace",
    last_name: "Jobe",
    email: "cjobe2c@earthlink.net",
    gender: "Male",
    ip_address: "154.186.192.237",
    company_name: "Yambee",
    phone: "(268) 3774348",
    create_time: "12:01 PM",
  },
  {
    id: 86,
    first_name: "Tobit",
    last_name: "Attoc",
    email: "tattoc2d@google.es",
    gender: "Female",
    ip_address: "216.40.147.100",
    company_name: "Browsetype",
    phone: "(692) 4656478",
    create_time: "9:58 AM",
  },
  {
    id: 87,
    first_name: "Englebert",
    last_name: "Welton",
    email: "ewelton2e@disqus.com",
    gender: "Female",
    ip_address: "151.16.100.44",
    company_name: "Voolith",
    phone: "(787) 5731595",
    create_time: "4:47 PM",
  },
  {
    id: 88,
    first_name: "Cull",
    last_name: "Vardon",
    email: "cvardon2f@diigo.com",
    gender: "Female",
    ip_address: "167.7.193.152",
    company_name: "Vitz",
    phone: "(286) 4301250",
    create_time: "8:24 PM",
  },
  {
    id: 89,
    first_name: "Barty",
    last_name: "Hampshire",
    email: "bhampshire2g@blogspot.com",
    gender: "Male",
    ip_address: "61.99.144.29",
    company_name: "Jaxworks",
    phone: "(786) 1575715",
    create_time: "1:07 PM",
  },
  {
    id: 90,
    first_name: "Waylin",
    last_name: "Lardner",
    email: "wlardner2h@ted.com",
    gender: "Female",
    ip_address: "157.200.191.245",
    company_name: "Yodo",
    phone: "(492) 5015962",
    create_time: "1:32 PM",
  },
  {
    id: 91,
    first_name: "Ginny",
    last_name: "Willicott",
    email: "gwillicott2i@senate.gov",
    gender: "Male",
    ip_address: "238.126.151.248",
    company_name: "Skinix",
    phone: "(100) 7875163",
    create_time: "5:31 PM",
  },
  {
    id: 92,
    first_name: "Corrianne",
    last_name: "Zaple",
    email: "czaple2j@homestead.com",
    gender: "Male",
    ip_address: "200.181.17.56",
    company_name: "Izio",
    phone: "(963) 9263856",
    create_time: "4:42 AM",
  },
  {
    id: 93,
    first_name: "Edwin",
    last_name: "MacGinney",
    email: "emacginney2k@ocn.ne.jp",
    gender: "Genderfluid",
    ip_address: "61.122.226.63",
    company_name: "Riffwire",
    phone: "(893) 7854417",
    create_time: "8:56 PM",
  },
  {
    id: 94,
    first_name: "Etty",
    last_name: "Pay",
    email: "epay2l@blogtalkradio.com",
    gender: "Female",
    ip_address: "148.147.120.16",
    company_name: "Divavu",
    phone: "(588) 2651559",
    create_time: "8:51 PM",
  },
  {
    id: 95,
    first_name: "Iseabal",
    last_name: "Ramsden",
    email: "iramsden2m@friendfeed.com",
    gender: "Female",
    ip_address: "80.15.69.48",
    company_name: "Feedmix",
    phone: "(854) 6904057",
    create_time: "4:28 AM",
  },
  {
    id: 96,
    first_name: "Agneta",
    last_name: "Ginty",
    email: "aginty2n@google.es",
    gender: "Polygender",
    ip_address: "117.204.112.163",
    company_name: "Skipfire",
    phone: "(359) 4640183",
    create_time: "12:53 PM",
  },
  {
    id: 97,
    first_name: "Trace",
    last_name: "Blackeby",
    email: "tblackeby2o@gizmodo.com",
    gender: "Non-binary",
    ip_address: "182.236.41.147",
    company_name: "Zoomdog",
    phone: "(815) 6337232",
    create_time: "1:54 AM",
  },
  {
    id: 98,
    first_name: "Catharine",
    last_name: "Craigmyle",
    email: "ccraigmyle2p@squarespace.com",
    gender: "Male",
    ip_address: "80.51.225.219",
    company_name: "Buzzdog",
    phone: "(732) 7287593",
    create_time: "12:46 PM",
  },
  {
    id: 99,
    first_name: "Verene",
    last_name: "Cutten",
    email: "vcutten2q@usgs.gov",
    gender: "Female",
    ip_address: "14.196.85.233",
    company_name: "Kanoodle",
    phone: "(915) 3234603",
    create_time: "8:04 AM",
  },
  {
    id: 100,
    first_name: "Thaddus",
    last_name: "Brugden",
    email: "tbrugden2r@xinhuanet.com",
    gender: "Genderqueer",
    ip_address: "185.208.52.3",
    company_name: "Skilith",
    phone: "(119) 9829426",
    create_time: "3:50 AM",
  },
];

function App() {
  const columnsBasic = [
    {
      dataField: "first_name",
      text: "First Name",
      headerStyle: { width: "50vw", fontSize: "12px" },
      headerClasses: "text-center",
      classes: "py-1",
      style: { fontSize: "12px" },
      // formatter: (cellContent, row, idx) => {
      //   return (
      //     <input
      //       className="form-control"
      //       value={cellContent}
      //       style={{ fontSize: "12px" }}
      //       onChange={(e) => {
      //         console.log(e);
      //       }}
      //     />
      //   );
      // },
      sort: true,
    },
    {
      dataField: "last_name",
      text: "Last Name",
      headerStyle: { width: "50vw", fontSize: "12px" },
      headerClasses: "text-center",
      classes: "py-1",
      style: { fontSize: "12px" },
    },
    {
      dataField: "email",
      text: "Email",
      headerStyle: { width: "100vw", fontSize: "12px" },
      headerClasses: "text-center",
      classes: "py-1",
      style: { fontSize: "12px" },
    },
    {
      dataField: "gender",
      text: "Gender",
      headerStyle: { width: "20vw", fontSize: "12px" },
      headerClasses: "text-center",
      classes: "py-1",
      style: { fontSize: "12px" },
    },
    {
      dataField: "ip_address",
      text: "IP Address",
      headerStyle: { width: "25vw", fontSize: "12px" },
      headerClasses: "text-center",
      classes: "py-1",
      style: { fontSize: "12px" },
    },
    {
      dataField: "company_name",
      text: "Company Name",
      headerStyle: { width: "25vw", fontSize: "12px" },
      headerClasses: "text-center",
      classes: "py-1",
      style: { fontSize: "12px" },
    },
    {
      dataField: "phone",
      text: "Phone",
      headerStyle: { width: "25vw", fontSize: "12px" },
      headerClasses: "text-center",
      classes: "py-1",
      style: { fontSize: "12px" },
    },
  ];

  return (
    <div className="container">
      <TableResponsive id="tableResponsive" columns={columnsBasic} data={data} />
    </div>
  );
}

export default App;
