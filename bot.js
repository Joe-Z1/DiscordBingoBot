const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');



function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


//var Wordbank = [" [1] ", " [2] ", " [3] "," [4] ", " [5] ", " [6] "," [7] ", " [8] ", " [9] "," [10] ", " [11] ", " [12] "," [13] ", " [14] ", " [15] "," [16] ", " [17] ", " [18] "," [19] ", " [20] ", " [21] "," [22] ", " [23] ", " [24] "," [25] "];
var Wordbank = [" [One] ", " [Two] ", " [Three] ", " [Four] ", " [Five] ", " [Six] ", " [Seven] ", " [Eight] ", " [Nine] ", " [Ten] ", " [Eleven] ", " [Twelve] ", " [FREE SPACE] ", " [Fourteen] ", " [Fifteen] ", " [Sixteen] ", " [Seventeen] ", " [Eighteen] ", " [Nineteen] ", " [Twenty] ", " [Twenty One] ", " [Twenty Two] ", " [Twenty Three] ", " [Twenty Four] ", " [Twenty Five] "];
Wordbank = shuffle(Wordbank);
if (middle = 12) {
  console.log("already there");
}

var middle = (Wordbank.indexOf(' [FREE SPACE] '));
[Wordbank[12], Wordbank[middle]] = [Wordbank[middle], Wordbank[12]];

Wordbankfinal = Wordbank;

var gfg = new Array(5);

// Loop to create 2D array using 1D array
for (var i = 0; i < gfg.length; i++) {
  gfg[i] = [];
}
var h = 0;

var s = Wordbankfinal;

// Loop to initilize 2D array elements.
for (var i = 0; i < 5; i++) {
  for (var j = 0; j < 5; j++) {

    gfg[i][j] = s[h++];
  }
}

// Loop to display the elements of 2D array.
function GetDisp() {
  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++)

    {

      return gfg[i][j];

    }

  }
}




client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on('message', msg => {

  if (msg.content === 'pp') {
    msg.react('🤔');
    msg.reply("This is your card");
    msg.channel.send(gfg);
  }
});

client.login(auth.token);