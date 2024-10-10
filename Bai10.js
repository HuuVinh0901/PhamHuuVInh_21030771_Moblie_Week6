const game = {
    team1: "Manchester City",
    team2: "Việt Nam",
    players: [
      [
        "Ederson",
        "Walker",
        "Dias",
        "Stones",
        "Gvaldior",
        "Rodri",
        "Gundogan",
        "De Bruyne",
        "Foden",
        "Doku",
        "Haaland",
      ],
      [
        "Philips Nguyen",
        "QNH",
        "DDM",
        "VVT",
        "NXM",
        "DHD",
        "NHD",
        "NQH",
        "NVT",
        "PVD",
        "NTL",
      ],
    ],
    score: "4:0",
    scored: ["Haaland", "Foden", "Doku"],
    date: "Aug 7th, 2100",
    odds: {
      team1: 8.2,
      x: 4.2,
      team2: 5.5,
    },
  };
  
  // Extracting players for each team
  const players1 = game.players[0];
  const players2 = game.players[1];
  
  // Extracting the goalkeeper from team 1 and field players
  const gk = players1[0];
  const fieldPlayers = players1.slice(1);
  
  // Creating an array containing all players from both teams
  const allPlayers = [...players1, ...players2];
  
  // Creating a final players array for team 1 with substitutes
  const players1Final = [...players1, "Haaland", "Foden", "Doku"];
  
  // Extracting odds for each outcome
  const { team1, x: draw, team2 } = game.odds;
  console.log("-------------------------------- Bài 10 --------------------------------");
  // Function to print the number of goals and goal scorers
  const printGoals = (...players) => {
    console.log(`${players.length} goals were scored by: ${players.join(", ")}`);
  };
  
  // Example usages of printGoals function
  printGoals("Haaland", "Foden", "Doku");
  printGoals(...game.scored);
  
  // Determine which team is more likely to win
  const likelyWinner =
    team1 < team2 ? game.team1 : game.team2;
  
  console.log(`${likelyWinner} is more likely to win.`);
  