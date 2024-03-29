import { MEAL_FILTERS } from "../constants/filters";
import { getRandomInt } from "../utils/math";
import { USERS } from "./users";

const recipeNames = [
  {
    name: "Eggs",
    image:
      "https://www.allrecipes.com/thmb/_tlTl7zfu2mCZzzuf9r8WOW-31U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/256007-best-scrambled-eggs-ddmfs-3X4-0031-ff526aac78f24031a5f947a546918a39.jpg",
  },
  {
    name: "Scone",
    image:
      "https://assets.bonappetit.com/photos/57acebc153e63daf11a4db87/master/pass/Scones.jpg",
  },
  {
    name: "Muffin",
    image:
      "https://sugargeekshow.com/wp-content/uploads/2019/10/chocolate-chip-muffins-featured.jpg",
  },
  {
    name: "Sandwhich",
    image:
      "https://somethingaboutsandwiches.com/wp-content/uploads/2022/04/ham-sandwich-500x375.jpg",
  },
  {
    name: "Chicken Ceaser Wrap",
    image:
      "https://cookingwithcocktailrings.com/wp-content/uploads/2022/07/Grilled-Chicken-Caesar-Wrap-46.jpg",
  },
  {
    name: "PB & J",
    image:
      "https://www.peanutbutter.com/wp-content/uploads/2022/03/Web_500_Classic-Peanut-Butter-Jelly-Sandwich.png",
  },
  {
    name: "Beef Stew",
    image:
      "https://www.simplyrecipes.com/thmb/yF-8mMRMxkdUmvfx8NXBb57wqSM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2015__03__irish-beef-stew-horiz-a2-1800-24f1087421414a77a25518c0897d7e23.jpg",
  },
  {
    name: "Chicken Pot Pie",
    image:
      "https://www.allrecipes.com/thmb/vlTW2Csu30V0zGDOm-5C4LDVGhA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/26317-chicken-pot-pie-xi-MFS_275-4x3-87a594bb9406495cbf51b166f7112e5c.jpg",
  },
  {
    name: "Cacio Pepe",
    image:
      "https://www.sipandfeast.com/wp-content/uploads/2019/08/bucatini-cacio-e-pepe-recipe-snippet.jpg",
  },
  {
    name: "Pesto Pasta",
    image:
      "https://images.101cookbooks.com/winter-penne-pasta-h.jpg?w=1200&auto=compress&auto=format",
  },
];

function makeRecipes() {
  const recipes = [];

  for (let i = 0; i < recipeNames.length; i++) {
    const newRecipe = {
      id: i,
      name: recipeNames[i].name,
      image: recipeNames[i].image,
      chef: USERS[getRandomInt(USERS.length)],
      stars: Math.random() * 5,
      serves: getRandomInt(6),
      time: getRandomInt(130),
      tags: [MEAL_FILTERS[getRandomInt(MEAL_FILTERS.length)]],
    };
    recipes.push(newRecipe);
  }
  return recipes;
}

export const RECIPES = makeRecipes();

export const DEMO_RECIPES = [
  {
    id: 1,
    name: "Krabby Patty",
    image:
      "https://media0.giphy.com/media/K4x1ZL36xWCf6/giphy.gif?cid=6c09b952o7p2veaoxs6utmxe3wjdlyfpg2oinm4sxieln833&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
    chef: "patrickstar",
    stars: 5,
    serves: 1,
    time: 25,
    tags: ["lunch", "dinner"],
  },
  {
    id: 2,
    name: "Hero Hunny",
    image:
      "https://media2.giphy.com/media/84ZzhsJZWlE3e/giphy.gif?cid=6c09b952i022x2734kbuko15c6oryt6b7o4unmu6ro6l37qx&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
    chef: "WinnieThePooh",
    stars: 4.5,
    serves: 1,
    time: 10,
    tags: ["breakfast", "dessert"],
  },
  {
    id: 3,
    name: "Cookies",
    image:
      "https://media4.giphy.com/media/HGe4zsOVo7Jvy/giphy.gif?cid=6c09b9525n7nw3mbvn69g727o38rpauix9vyiv3tzsiaxdin&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
    chef: "CookieMonster",
    stars: 4,
    serves: 1,
    time: 30,
    tags: ["dessert"],
  },
];

export const SAMPLE_RECIPE = {
  name: "Eggs",
  image:
    "https://www.allrecipes.com/thmb/_tlTl7zfu2mCZzzuf9r8WOW-31U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/256007-best-scrambled-eggs-ddmfs-3X4-0031-ff526aac78f24031a5f947a546918a39.jpg",
  stars: 3,
  serves: 4,
  time: 10,
  tags: ["breakfast"],
  ingredients: ["ingredient"],
  directions: ["one", "two", "three"],
};
