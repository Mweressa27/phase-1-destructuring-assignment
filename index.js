const farmAnimals = 'cow horse sheep pig chicken';
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// 1. Destructuring to assign appropriate variables based on the sounds animals make
const [cow, horse, sheep, pig, chicken] = farmAnimals.split(' ');

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little
const [bessie, dolly, babe, little] = farmAnimals.split(' ').filter((animal, index) => index !== 1);

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink
const [bessie2, dolly2, babe2] = farmAnimals.split(' ').filter((animal, index) => index !== 1 && index !== 3);
const blackAndWhite = 'cow';
const black = 'sheep';
const pink = 'pig';

// 4. Use destructuring to assign appropriate variables using the color names
const [red, orange, yellow, green, blue, indigo, violet] = colors;

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names
const [r, o, y, g, b, , v] = colors;

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg
const [r2, o2, y2, g2, b2, indg, v2] = colors;

// 7. Use destructuring to assign all variables using the keys as the variable names
const { muppetName, color, song, job, partner } = muppet;

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner
const { album: { theMuppetMovie: { song2, song4 } }, nestedJob, nestedPartner } = nestedMuppet;

console.log(cow, horse, sheep, pig, chicken);
console.log(bessie, dolly, babe, little);
console.log(bessie2, dolly2, babe2, blackAndWhite, black, pink);
console.log(red, orange, yellow, green, blue, indigo, violet);
console.log(r, o, y, g, b, v);
console.log(r2, o2, y2, g2, b2, indg, v2);
console.log(muppetName, color, song, job, partner);
console.log(song2, song4, nestedJob, nestedPartner);
