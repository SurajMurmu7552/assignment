//enter your data here

const D: { [key: string]: number } = {
  "2020-01-05": 14,
  "2020-01-06": 2,
};

console.log("Input--D = ", D);

function solve(temp: {}, l: number, r: number, iteration: number): number {
  if (r >= 7) {
    r = 0;
  }

  if (!temp.hasOwnProperty(r)) {
    const x: number =
      (temp[`${l}`] + iteration * solve(temp, l, r + 1, iteration + 1)) /
      (2 + (iteration - 1));
    console.log(x);

    return Math.round(x);
  } else {
    const y: number =
      (temp[`${l}`] + iteration * temp[`${r}`]) / (2 + iteration - 1);
    console.log(temp[`${l}`], temp[`${r}`], y, iteration);
    return Math.round(y);
  }
}

function checkData(temp: {}): {} {
  const newData: {
    [key: string]: number;
  } = {};

  for (let i = 0; i < 7; i++) {
    if (!temp.hasOwnProperty(i)) {
      //solve equation

      temp[`${i}`] = solve(temp, i - 1, i + 1, 1);
    }

    switch (i) {
      case 0:
        newData["Sun"] = temp[i];
        break;
      case 1:
        newData["Mon"] = temp[i];
        break;
      case 2:
        newData["Tue"] = temp[i];
        break;
      case 3:
        newData["Wed"] = temp[i];
        break;
      case 4:
        newData["Thu"] = temp[i];
        break;
      case 5:
        newData["Fri"] = temp[i];
        break;
      case 6:
        newData["Sat"] = temp[i];
        break;
    }
  }
  return newData;
}

function solution(D: {}): void {
  const temp: { [key: string]: number } = {};

  for (let key in D) {
    let d: number = new Date(
      parseInt(key.split("-")[0]),
      parseInt(key.split("-")[1]) - 1,
      parseInt(key.split("-")[2])
    ).getDay();

    if (temp.hasOwnProperty(d)) {
      temp[`${d}`] += D[key];
    } else {
      temp[`${d}`] = D[key];
    }
  }
  const data: {} = checkData(temp);

  console.log("Output--D = ", data);
}

solution(D);
