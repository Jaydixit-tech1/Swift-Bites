// Real food images from Unsplash (free to use, reliable)
const unsplash = (id, w = 600, h = 400) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop`;

const FOOD_IMAGES = {
  Pizza: [
    '1565299624946-b28f40a0ae38', '1574071318508-1cdbab80d002', '1565299585083-44d6f47fbedf',
    '1571994118237-ef2e9f8f5da5', '1604382355076-af4b0eb60143', '1593560704299-1553369245c8',
    '1598023696416-0193a0bcd302', '1565299624946-b28f40a0ae38'
  ],
  Burger: [
    '1568901346375-23c9450c58cd', '1553979459-d2229ba7433b', '1594216930639-5dcb0dfb9bca',
    '1550547660-d9450f859349', '1572802419224-296f0eede158', '1565299624946-b28f40a0ae38',
    '1553979459-d2229ba7433b', '1568901346375-23c9450c58cd'
  ],
  Pasta: [
    '1551183053-bf91a1d81141', '1473093295043-cdd812d0e601', '1552611052-33e04de081de',
    '1612874742237-6526221588e3', '1547592166-23e0d8a2d658', '1551183053-bf91a1d81141',
    '1473093295043-cdd812d0e601', '1612874742237-6526221588e3'
  ],
  Desserts: [
    '1488477181946-6428a0291777', '1565958011703-92f458ef3283', '1578985545062-69928b1f9589',
    '1551024506-0bccd828d307', '1488477181946-6428a0291777', '1565958011703-92f458ef3283',
    '1606890737304-3840b01c247a', '1578985545062-69928b1f9589'
  ],
  Drinks: [
    '1544787219-7f82cc5a73ed', '1551024606-b1297984aafa', '1544145945-f90425340c7e',
    '1551024506-0bccd828d307', '1558642452-9d2a7deb7f62', '1563649893547-94b045f45426',
    '1544787219-7f82cc5a73ed', '1551024606-b1297984aafa'
  ]
};

const getFoodImage = (category, index) => {
  const list = FOOD_IMAGES[category] || FOOD_IMAGES.Drinks;
  return unsplash(list[index % list.length]);
};

const foodData = [
  { id: 1, name: 'Margherita Pizza', description: 'Classic pizza with fresh mozzarella, basil, and tomato sauce.', price: 299, category: 'Pizza', image: getFoodImage('Pizza', 0) },
  { id: 2, name: 'Pepperoni Feast', description: 'Loaded with spicy pepperoni and gooey cheese.', price: 349, category: 'Pizza', image: getFoodImage('Pizza', 1) },
  { id: 3, name: 'BBQ Chicken Pizza', description: 'Smoky BBQ sauce, grilled chicken, red onion, and cilantro.', price: 379, category: 'Pizza', image: getFoodImage('Pizza', 2) },
  { id: 4, name: 'Veggie Supreme', description: 'Bell peppers, olives, mushrooms, onions, and tomato.', price: 329, category: 'Pizza', image: getFoodImage('Pizza', 3) },
  { id: 5, name: 'Four Cheese Pizza', description: 'Mozzarella, cheddar, Parmesan, and feta blend.', price: 399, category: 'Pizza', image: getFoodImage('Pizza', 4) },
  { id: 6, name: 'Mushroom Truffle Pizza', description: 'Wild mushrooms, truffle oil, and fresh herbs.', price: 429, category: 'Pizza', image: getFoodImage('Pizza', 5) },
  { id: 7, name: 'Paneer Tikka Pizza', description: 'Spiced paneer, onion, capsicum, and mint chutney.', price: 359, category: 'Pizza', image: getFoodImage('Pizza', 6) },
  { id: 8, name: 'Hawaiian Pizza', description: 'Ham, pineapple, and mozzarella on tomato base.', price: 339, category: 'Pizza', image: getFoodImage('Pizza', 7) },
  { id: 9, name: 'Classic Cheeseburger', description: 'Juicy beef patty with cheddar, lettuce, and tomato.', price: 279, category: 'Burger', image: getFoodImage('Burger', 0) },
  { id: 10, name: 'Spicy Chicken Burger', description: 'Crispy chicken with spicy mayo and pickles.', price: 329, category: 'Burger', image: getFoodImage('Burger', 1) },
  { id: 11, name: 'Double Patty Burger', description: 'Two beef patties, double cheese, and special sauce.', price: 399, category: 'Burger', image: getFoodImage('Burger', 2) },
  { id: 12, name: 'Veggie Burger', description: 'Crispy veggie patty with lettuce, tomato, and mayo.', price: 249, category: 'Burger', image: getFoodImage('Burger', 3) },
  { id: 13, name: 'Mushroom Swiss Burger', description: 'Beef patty with sautéed mushrooms and Swiss cheese.', price: 369, category: 'Burger', image: getFoodImage('Burger', 4) },
  { id: 14, name: 'BBQ Bacon Burger', description: 'Beef, crispy bacon, BBQ sauce, and onion rings.', price: 419, category: 'Burger', image: getFoodImage('Burger', 5) },
  { id: 15, name: 'Aloo Tikki Burger', description: 'Crispy potato patty with chutney and veggies.', price: 229, category: 'Burger', image: getFoodImage('Burger', 6) },
  { id: 16, name: 'Fish Burger', description: 'Crispy fish fillet with tartar sauce and lettuce.', price: 349, category: 'Burger', image: getFoodImage('Burger', 7) },
  { id: 17, name: 'Creamy Alfredo Pasta', description: 'Fettuccine tossed in rich Alfredo sauce.', price: 369, category: 'Pasta', image: getFoodImage('Pasta', 0) },
  { id: 18, name: 'Pesto Penne', description: 'Penne pasta with fresh basil pesto and Parmesan.', price: 329, category: 'Pasta', image: getFoodImage('Pasta', 1) },
  { id: 19, name: 'Spaghetti Bolognese', description: 'Classic meat sauce with herbs and Parmesan.', price: 349, category: 'Pasta', image: getFoodImage('Pasta', 2) },
  { id: 20, name: 'Garlic Butter Pasta', description: 'Penne in garlic butter with parsley and cheese.', price: 299, category: 'Pasta', image: getFoodImage('Pasta', 3) },
  { id: 21, name: 'Red Sauce Pasta', description: 'Tangy tomato sauce with basil and olive oil.', price: 279, category: 'Pasta', image: getFoodImage('Pasta', 4) },
  { id: 22, name: 'White Sauce Pasta', description: 'Creamy white sauce with mushrooms and pepper.', price: 319, category: 'Pasta', image: getFoodImage('Pasta', 5) },
  { id: 23, name: 'Mac and Cheese', description: 'Elbow pasta in rich cheddar cheese sauce.', price: 269, category: 'Pasta', image: getFoodImage('Pasta', 6) },
  { id: 24, name: 'Pasta Arrabiata', description: 'Spicy tomato sauce with chili and garlic.', price: 289, category: 'Pasta', image: getFoodImage('Pasta', 7) },
  { id: 25, name: 'Chocolate Lava Cake', description: 'Warm chocolate cake with a molten center.', price: 249, category: 'Desserts', image: getFoodImage('Desserts', 0) },
  { id: 26, name: 'Strawberry Cheesecake', description: 'Creamy cheesecake topped with fresh strawberries.', price: 279, category: 'Desserts', image: getFoodImage('Desserts', 1) },
  { id: 27, name: 'Brownie with Ice Cream', description: 'Fudgy brownie with a scoop of vanilla ice cream.', price: 229, category: 'Desserts', image: getFoodImage('Desserts', 2) },
  { id: 28, name: 'Tiramisu', description: 'Coffee-soaked ladyfingers with mascarpone cream.', price: 299, category: 'Desserts', image: getFoodImage('Desserts', 3) },
  { id: 29, name: 'Gulab Jamun', description: 'Soft milk dumplings in rose-cardamom syrup.', price: 149, category: 'Desserts', image: getFoodImage('Desserts', 4) },
  { id: 30, name: 'Ice Cream Sundae', description: 'Vanilla ice cream with chocolate sauce and nuts.', price: 199, category: 'Desserts', image: getFoodImage('Desserts', 5) },
  { id: 31, name: 'Red Velvet Cake', description: 'Layers of red velvet with cream cheese frosting.', price: 319, category: 'Desserts', image: getFoodImage('Desserts', 6) },
  { id: 32, name: 'Mango Mousse', description: 'Light mango mousse with fresh mango pieces.', price: 259, category: 'Desserts', image: getFoodImage('Desserts', 7) },
  { id: 33, name: 'Iced Latte', description: 'Chilled espresso with milk and ice.', price: 199, category: 'Drinks', image: getFoodImage('Drinks', 0) },
  { id: 34, name: 'Fresh Orange Juice', description: 'Cold-pressed juice from ripe oranges.', price: 169, category: 'Drinks', image: getFoodImage('Drinks', 1) },
  { id: 35, name: 'Cold Coffee', description: 'Blended coffee with milk and ice.', price: 179, category: 'Drinks', image: getFoodImage('Drinks', 2) },
  { id: 36, name: 'Mango Shake', description: 'Thick mango shake with cream.', price: 189, category: 'Drinks', image: getFoodImage('Drinks', 3) },
  { id: 37, name: 'Lemonade', description: 'Fresh lemon juice with mint and soda.', price: 129, category: 'Drinks', image: getFoodImage('Drinks', 4) },
  { id: 38, name: 'Cappuccino', description: 'Espresso with steamed milk and foam.', price: 219, category: 'Drinks', image: getFoodImage('Drinks', 5) },
  { id: 39, name: 'Watermelon Juice', description: 'Refreshing chilled watermelon juice.', price: 149, category: 'Drinks', image: getFoodImage('Drinks', 6) },
  { id: 40, name: 'Cola', description: 'Chilled cola with ice.', price: 79, category: 'Drinks', image: getFoodImage('Drinks', 7) }
];

export const categories = ['All', 'Pizza', 'Burger', 'Pasta', 'Desserts', 'Drinks'];

export default foodData;
