require("../db");
const Celebrity = require("../models/Celebrity.model")

const celebrities = [
    {
      name: "Snoop Dogg",
      occupation:"Hip Hop Artist",
      catchPhrase: "Fo Shizzle",
    },
    {
      name: "Conor McGregor",
      occupation: "MMA Fighter",
      catchPhrase: "You'll Do Fookn Nuttin"
    },
    {
      name: "Donald Trump",
      occupation:"Politician",
      catchPhrase: "I Make The Best Deals",
    }
]

Celebrity.insertMany(celebrities).then((celebritiesFromDB) => {
    console.log(`celebrities: - ${celebritiesFromDB.length}`);
});
