import hats from './images/hats.jpg';
import jackets from './images/jackets.jpg';
import mens from './images/mens.jpg';
import shoes from './images/shoes.jpg';
import womens from './images/womens.jpg';

export const menuItems = [
  {
    title: 'hats',
    imageUrl: hats,
    id: 1,
    linkUrl: 'shop/hats'
  },
  {
    title: 'jackets',
    imageUrl: jackets,
    id: 2,
    linkUrl: 'shop/jackets'
  },
  {
    title: 'shoes',
    imageUrl: shoes,
    id: 3,
    linkUrl: 'shop/shoes'
  },
  {
    title: 'womens',
    imageUrl: womens,
    size: 'large',
    id: 4,
    linkUrl: 'shop/womens'
  },
  {
    title: 'mens',
    imageUrl: mens,
    size: 'large',
    id: 5,
    linkUrl: 'shop/mens'
  }
];
