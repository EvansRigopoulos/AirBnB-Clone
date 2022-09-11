//an array with dummy objects instead of pulling of an API
const Cards = [
  {
    id: 1,
    img: require('../images/Zaferes.PNG'), //using require for local path
    rating: 5.0,
    rating_count: 6,
    Country: 'Online',
    title: 'Life Lessons with Katie Zaferes',
    description:
      'I will share with you what I call "Positively Impactful Moments of Disappointment." Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.',
    price: 136,
    open_spots: 0,
  },
  {
    id: 2,
    img: require('../images/wedding.PNG'), //using require for local path
    rating: 5.0,
    rating_count: 30,
    Country: 'Online',
    title: 'Learn Wedding Photography',
    description:
      "Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that'll last a lifetime.",
    price: 125,
    open_spots: 27,
  },
  {
    id: 3,
    title: 'Group Mountain Biking',
    description:
      'Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)',
    price: 50,
    img: require('../images/mountain-bike.png'),
    rating: 4.8,
    rating_count: 2,

    Country: 'Norway',
    openSpots: 3,
  },
];

export default Cards;
