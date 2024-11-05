function createMagicPotion(potions, target) {
  // Code here
  var size = potions.length;
  var rtas = [];

  for (var i = 0; i <= size; i++) {
    var k = potions[i];
    for (var j = i + 1; j <= size; j++) {
      var s = k + potions[j];

      if (s === target) {
        rtas.push([i, j]);
      }
    }
  }
  console.log(rtas);
  if (rtas.length > 1) {
    for (var b = 0; b <= rtas.length - 2; b++) {
      aa = rtas[b][1];

      bb = rtas[b + 1][1];

      if (aa > bb) {
        var rta = rtas[b + 1];
      }
    }
    if (!rta) {
      return rtas[0];
    }
  } else if (rtas.length === 1) {
    return rtas[0];
  }

  return undefined;
}

var a = createMagicPotion([10, 5, 2, 3, 7, 5], 10);
function battleHorde(zombies, humans) {
  var poderz = 0;
  var poderh = 0;

  for (var i = 0; i <= zombies.length - 1; i++) {
    var z = parseInt(zombies[i]) + poderz;
    var h = parseInt(humans[i]) + poderh;

    poderz = 0;
    poderh = 0;

    if (z > h) {
      poderz += z - h;
    } else if (h > z) {
      poderh += h - z;
    }
  }

  if (poderz > poderh) {
    return poderz + "z";
  } else if (poderh > poderz) {
    return poderh + "h";
  } else {
    return "x";
  }
}

function findSafestPath(dream) {
  n = dream.length;
  nn = dream[0].length;
  dp = [];
  for (var i = 0; i <= n - 1; i++) {
    var a = [];

    for (var j = 0; j <= n - 1; j++) {
      a.push(0);
    }
    dp.push(a);
  }
  dp[0][0] = dream[0][0];
  console.log(dp);
  for (var i = 0; i <= n - 1; i++) {
    for (var j = 0; j <= n - 1; j++) {
      if (i != 0 || j != 0) {
        if (i === 0) {
          dp[i][j] = dream[i][j] + dp[i][j - 1];
        } else if (j === 0) {
          dp[i][j] = dream[i][j] + dp[i - 1][j];
        } else {
          var up = dream[i][j] + dp[i][j - 1];
          var ri = dream[i][j] + dp[i - 1][j];
          if (up > ri) dp[i][j] = ri;
          else if (ri >= up) {
            dp[i][j] = up;
          }
        }
      }
    }
  }

  console.log(dp);

  if (dp[n - 1][n - 1] === 0) {
    return dp[n - 1][nn - 1];
  } else {
    return dp[n - 1][n - 1];
  }
}
var aa = findSafestPath([
  [1, 2],
  [3, 4],
  [6, 5],
  [7, 8],
]);

console.log(aa);

function findTheKiller(whisper, suspects) {
  var rtas = suspects;
  var whisper = whisper.toLowerCase();
  var n = whisper.length;
  if (whisper[n - 1] === "$") {
    for (var i = 0; i < n; i++) {
      var a = whisper[i];
      if ((a = !"~")) {
        let el = [];
        for (var j = 0; j < rtas.length; j++) {
          if ((a = !suspects[j][i])) {
            el.push(j);
          }
        }
      }
    }
  }

  return "";
}

function findTheKiller(whisper, suspects) {
  const regex = new RegExp(
    "^" +
      whisper.replace(/\$/g, "$").replace(/~/g, ".") +
      (whisper.endsWith("$") ? "$" : ""),
    "i"
  );

  const matchingSuspects = suspects.filter((suspect) => regex.test(suspect));

  if (matchingSuspects.length === 1) {
    return matchingSuspects[0];
  } else if (matchingSuspects.length > 1) {
    return matchingSuspects.join(",");
  } else {
    return "";
  }
}
