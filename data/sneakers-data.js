 import Category from '../models/category';
 import Sneakers from '../models/sneakers';

export const CATEGORIES = [
  new Category(
    "c1",
    "Nike",
    "https://img2.freepng.fr/20180720/urx/kisspng-swoosh-nike-fuelband-logo-air-jordan-logo-nike-5b5178d3545fc3.0976516815320660033456.jpg"
  ),
  new Category(
    "c2",
    "Adidas",
    "https://img2.freepng.fr/20180419/lge/kisspng-adidas-originals-logo-iron-on-puma-shopping-logo-design-5ad8444c749378.5996728615241227004775.jpg"
  ),
  new Category(
    "c3",
    "Jordan",
    "https://img2.freepng.fr/20180606/whb/kisspng-jumpman-air-jordan-logo-swoosh-jordan-5b186529503b37.7045896715283254173286.jpg"
  ),
  new Category(
    "c4",
    "Puma",
    "https://img2.freepng.fr/20180712/xik/kisspng-puma-sneakers-logo-blue-logo-diadora-5b46debb369b70.1396981515313711952237.jpg"
  )
];

export const SNEAKERS = [
  new Sneakers(
    "s1",
    "c3",
    "Jordan 12 Retro Black University Gold",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac imperdiet ligula, et molestie lectus. Integer vel justo dolor. Pellentesque porta elit sit amet elit auctor pharetra. Suspendisse potenti. Mauris.",
    230,
    9,
    "https://stockx.imgix.net/Air-Jordan-12-Retro-Black-University-Gold.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1593581868",
  ),
  new Sneakers(
    "s2",
    "c2",
    "adidas Yeezy Boost 350 V2 Zyon",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac imperdiet ligula, et molestie lectus. Integer vel justo dolor. Pellentesque porta elit sit amet elit auctor pharetra. Suspendisse potenti. Mauris.",
    240,
    11,
    "https://stockx.imgix.net/adidas-Yeezy-Boost-350-V2-Zyon-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1596134320",
  ),
  new Sneakers(
    "s3",
    "c3",
    "Jordan 4 Retro Off-White Sail",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac imperdiet ligula, et molestie lectus. Integer vel justo dolor. Pellentesque porta elit sit amet elit auctor pharetra. Suspendisse potenti. Mauris.",
    740,
    10,
    "https://stockx.imgix.net/Air-Jordan-4-Retro-Off-White-Sail-W-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1596134320",
  ),
  new Sneakers(
    "s4",
    "c4",
    "Puma RS-Dreamer J. Cole Black",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac imperdiet ligula, et molestie lectus. Integer vel justo dolor. Pellentesque porta elit sit amet elit auctor pharetra. Suspendisse potenti. Mauris.",
    156,
    8,
    "https://stockx.imgix.net/Puma-RS-Dreamer-J-Cole-Black.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1596012170",
  ),
  new Sneakers(
    "s5",
    "c1",
    "Nike SB Dunk Low Grateful Dead Bears Opti Yellow",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac imperdiet ligula, et molestie lectus. Integer vel justo dolor. Pellentesque porta elit sit amet elit auctor pharetra. Suspendisse potenti. Mauris.",
    800,
    9,
    "https://stockx.imgix.net/Nike-SB-Dunk-Low-Grateful-Dead-Bears-Yellow.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1594740526",
  ),
  new Sneakers(
    "s6",
    "c1",
    "Nike Air Force 1 Low White '07",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac imperdiet ligula, et molestie lectus. Integer vel justo dolor. Pellentesque porta elit sit amet elit auctor pharetra. Suspendisse potenti. Mauris.",
    80,
    11,
    "https://stockx.imgix.net/Nike-Air-Force-1-Low-White-07-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1561409052",
  ),
  new Sneakers(
    "s7",
    "c2",
    "adidas Yeezy Boost 350 V2 Cinder",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac imperdiet ligula, et molestie lectus. Integer vel justo dolor. Pellentesque porta elit sit amet elit auctor pharetra. Suspendisse potenti. Mauris.",
    287,
    10,
    "https://stockx.imgix.net/adidas-Yeezy-Boost-350-V2-Cinder-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1594236988",
  ),
  new Sneakers(
    "s8",
    "c4",
    "Puma Cell Endura Rhude Sundry",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac imperdiet ligula, et molestie lectus. Integer vel justo dolor. Pellentesque porta elit sit amet elit auctor pharetra. Suspendisse potenti. Mauris.",
    90,
    8,
    "https://stockx.imgix.net/Puma-Cell-Endura-Rhude-Sundry-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1555969688",
  ),
  new Sneakers(
    "s9",
    "c3",
    "Jordan 12 Retro Chinese New Year 2019 (PS)",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac imperdiet ligula, et molestie lectus. Integer vel justo dolor. Pellentesque porta elit sit amet elit auctor pharetra. Suspendisse potenti. Mauris.",
    106,
    9,
    "https://stockx.imgix.net/Air-Jordan-12-Retro-Chinese-New-Year-2019-PS.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1546879170",
  ),
  new Sneakers(
    "s10",
    "c1",
    "Nike Air Force 1 Low Double Layer White Obsidian Red (PS)",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac imperdiet ligula, et molestie lectus. Integer vel justo dolor. Pellentesque porta elit sit amet elit auctor pharetra. Suspendisse potenti. Mauris.",
    80,
    11,
    "https://stockx.imgix.net/Nike-Air-Force-1-Low-Double-Layer-White-Obsidian-Red-PS.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1556848769",
  ),
  new Sneakers(
    "s11",
    "c2",
    "adidas Yeezy Boost 700 Wave Runner Solid Grey",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac imperdiet ligula, et molestie lectus. Integer vel justo dolor. Pellentesque porta elit sit amet elit auctor pharetra. Suspendisse potenti. Mauris.",
    430,
    10,
    "https://stockx.imgix.net/Adidas-Yeezy-Wave-Runner-700-Solid-Grey-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1538080256",
  ),
  new Sneakers(
    "s12",
    "c4",
    "Puma Disc Blaze Bape Camo Green",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac imperdiet ligula, et molestie lectus. Integer vel justo dolor. Pellentesque porta elit sit amet elit auctor pharetra. Suspendisse potenti. Mauris.",
    230,
    8,
    "https://stockx.imgix.net/Puma-Disc-Blaze-Bape-Camo-Green-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1538080256",
  ),
  new Sneakers(
    "s13",
    "c1",
    "Nike React Element 87 Anthracite Black",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac imperdiet ligula, et molestie lectus. Integer vel justo dolor. Pellentesque porta elit sit amet elit auctor pharetra. Suspendisse potenti. Mauris.",
    100,
    9,
    "https://stockx.imgix.net/Nike-React-Element-87-Anthracite-Black-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1538080256",
  ),
  new Sneakers(
    "s14",
    "c3",
    "Jordan 11 Retro Concord (2018)",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac imperdiet ligula, et molestie lectus. Integer vel justo dolor. Pellentesque porta elit sit amet elit auctor pharetra. Suspendisse potenti. Mauris.",
    320,
    11,
    "https://stockx.imgix.net/Air-Jordan-11-Retro-Concord-2018-1.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1566585772",
  ),
  new Sneakers(
    "s15",
    "c2",
    "adidas Crazy BYW 2.0 Pharrell",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac imperdiet ligula, et molestie lectus. Integer vel justo dolor. Pellentesque porta elit sit amet elit auctor pharetra. Suspendisse potenti. Mauris.",
    70,
    10,
    "https://stockx.imgix.net/adidas-Crazy-BYW-2-Pharrell.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1584514320",
  ),
  new Sneakers(
    "s16",
    "c4",
    "Puma Cell Bait x Marvel Venom",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac imperdiet ligula, et molestie lectus. Integer vel justo dolor. Pellentesque porta elit sit amet elit auctor pharetra. Suspendisse potenti. Mauris.",
    380,
    8,
    "https://stockx.imgix.net/Puma-Cell-Bait-x-Marvel-Venom.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1548970354",
  )
];
