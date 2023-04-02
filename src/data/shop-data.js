// DATA to batch upload to firebase once, see commented out code in product context
const SHOP_DATA = [
  {
    title: 'Hats',
    items: [
      {
        id: 1,
        name: 'Brown Brim',
        imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
        price: 25,
      },
      {
        id: 2,
        name: 'Blue Beanie',
        imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
        price: 18,
      },
      {
        id: 3,
        name: 'Brown Cowboy',
        imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
        price: 35,
      },
      {
        id: 4,
        name: 'Grey Brim',
        imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
        price: 25,
      },
      {
        id: 5,
        name: 'Green Beanie',
        imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
        price: 18,
      },
      {
        id: 6,
        name: 'Palm Tree Cap',
        imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
        price: 14,
      },
      {
        id: 7,
        name: 'Red Beanie',
        imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
        price: 18,
      },
      {
        id: 8,
        name: 'Wolf Cap',
        imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
        price: 14,
      },
      {
        id: 9,
        name: 'Blue Snapback',
        imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
        price: 16,
      },
    ],
  },
  {
    title: 'Shoes',
    items: [
      {
        id: 10,
        name: 'Red Trainers',
        imageUrl: 'https://t3.ftcdn.net/jpg/00/77/52/94/240_F_77529477_n4TqondFEsZWUpKcJXg5TiWndYnvzsqc.jpg',
        price: 220,
      },
      {
        id: 11,
        name: 'White Trainers',
        imageUrl: 'https://t3.ftcdn.net/jpg/01/98/11/36/240_F_198113627_E5hQnRt4BsqtRL6N4wiELAS9Y59oYLnc.jpg',
        price: 280,
      },
      {
        id: 12,
        name: 'Cream Trainers',
        imageUrl: 'https://t4.ftcdn.net/jpg/02/11/11/15/240_F_211111574_VLtzH6ORhebXvnJXjlkAkaUuAftnvmJH.jpg',
        price: 110,
      },
      {
        name: 'Brown Shoes',
        imageUrl: 'https://t4.ftcdn.net/jpg/02/98/59/83/240_F_298598309_GFrMKsw0j4Vo2CufzeFFGoysAT52soYz.jpg',
        price: 160,
      },
      {
        id: 14,
        name: 'Blue Trainers',
        imageUrl: 'https://t3.ftcdn.net/jpg/02/77/57/08/240_F_277570866_4paYMmM6jGZC70J4wJhRNlML3JzRWJKQ.jpg',
        price: 160,
      },
      {
        id: 15,
        name: 'Orange Football Boots',
        imageUrl: 'https://t4.ftcdn.net/jpg/03/31/63/23/240_F_331632326_uQWdocQgdS4TbPEJ02JF61YdjL8QNkL8.jpg',
        price: 160,
      },
      {
        id: 16,
        name: 'Air Jordan Limited',
        imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
        price: 190,
      },
      {
        id: 17,
        name: 'Pink Trainers',
        imageUrl: 'https://t3.ftcdn.net/jpg/00/72/34/30/240_F_72343007_RziabN4GgQGpX3f2MUJsryesYGuIvVhD.jpg',
        price: 200,
      },
    ],
  },
  {
    title: 'Jackets',
    items: [
      {
        id: 18,
        name: 'Blue Jacket',
        imageUrl: 'https://t3.ftcdn.net/jpg/03/98/05/38/240_F_398053820_fw4nyZSLFLIEdt2IqKjCV5atrJIvykXT.jpg',
        price: 125,
      },
      {
        id: 19,
        name: 'Blue Puffer Jacket',
        imageUrl: 'https://t4.ftcdn.net/jpg/02/35/26/65/240_F_235266548_rroJLE6PdmfLWy6IJjD5zRH7SFwwCJPu.jpg',
        price: 90,
      },
      {
        id: 20,
        name: 'Leather Jacket',
        imageUrl: 'https://t4.ftcdn.net/jpg/04/51/15/39/240_F_451153951_Sph6KozC93U9Zq282GIgzoizCoVL8geZ.jpg',
        price: 90,
      },
      {
        id: 21,
        name: 'Black Hoody',
        imageUrl: 'https://t3.ftcdn.net/jpg/04/88/46/70/240_F_488467037_HAcRWaWML9muDH26FYPzYPtj1yYw5qLQ.jpg',
        price: 165,
      },
      {
        id: 22,
        name: 'Orange Stripe Jacket',
        imageUrl: 'https://t3.ftcdn.net/jpg/03/83/54/76/240_F_383547638_CDc6qV1e8lYIsA0QOxNGZmg1u1DMCR2E.jpg',
        price: 185,
      },
      {
        id: 23,
        name: 'Red Jacket',
        imageUrl: 'https://t4.ftcdn.net/jpg/02/35/26/65/240_F_235266586_Ki2CloueguvWgazAMXrK9WHQbUoWcENm.jpg',
        price: 14,
      },
      {
        id: 24,
        name: 'White Jacket',
        imageUrl: 'https://t4.ftcdn.net/jpg/01/91/95/71/240_F_191957164_EWstMeq7FYKaYsA93txu93nt1r23q6au.jpg',
        price: 18,
      },
      {
        id: 25,
        name: 'Charcoal Jacket',
        imageUrl: 'https://t4.ftcdn.net/jpg/02/37/05/83/240_F_237058345_cJeiWLVgYeATmqh6Yphtn7jGZD3dLTUn.jpg',
        price: 14,
      },
      {
        id: 26,
        name: 'Black Gillete',
        imageUrl: 'https://t4.ftcdn.net/jpg/02/35/26/65/240_F_235266543_8M3jnjOm6kVq6v6tnzKchVlMpLn97C85.jpg',
        price: 16,
      },
    ],
  },
  {
    title: 'Womens',
    items: [
      {
        id: 27,
        name: 'Blue Tanktop',
        imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
        price: 25,
      },
      {
        id: 28,
        name: 'Floral Blouse',
        imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
        price: 20,
      },
      {
        id: 29,
        name: 'Floral Dress',
        imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
        price: 80,
      },
      {
        id: 30,
        name: 'Red Dots Dress',
        imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
        price: 80,
      },
      {
        id: 31,
        name: 'Striped Sweater',
        imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
        price: 45,
      },
      {
        id: 32,
        name: 'Yellow Track Suit',
        imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
        price: 135,
      },
      {
        id: 33,
        name: 'White Blouse',
        imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
        price: 20,
      },
    ],
  },
  {
    title: 'Mens',
    items: [
      {
        id: 34,
        name: 'Camo Down Vest',
        imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
        price: 325,
      },
      {
        id: 35,
        name: 'Floral T-shirt',
        imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
        price: 20,
      },
      {
        id: 36,
        name: 'Black & White Longsleeve',
        imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
        price: 25,
      },
      {
        id: 37,
        name: 'Pink T-shirt',
        imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
        price: 25,
      },
      {
        id: 38,
        name: 'Jean Long Sleeve',
        imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
        price: 40,
      },
      {
        id: 39,
        name: 'Burgundy T-shirt',
        imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
        price: 25,
      },
    ],
  },
];

export default SHOP_DATA;
