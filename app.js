//enter your data here
var D = {
    "2021-01-01": 42,
    "2022-01-02": 41,
    "2021-01-03": 16,
    "2020-07-04": 38,
    "2010-01-05": 28,
    "2019-06-06": -16,
    "2020-02-07": 20,
    "2024-03-08": -12,
    "2011-01-05": 28,
    "2016-06-06": -16,
    "2023-02-07": 20,
    "2029-03-08": -12
};
console.log("Input--D = ", D);
function solve(temp, l, r) {
    if (r >= 7) {
        r = 0;
    }
    if (!temp.hasOwnProperty(r)) {
        var x = (temp["" + l] + solve(temp, l, r + 1)) / 2;
        return Math.round(x);
    }
    else {
        var y = (temp["" + l] + 2 * temp["" + r]) / 3;
        return Math.round(y);
    }
}
function checkData(temp) {
    var newData = {};
    for (var i = 0; i < 7; i++) {
        if (!temp.hasOwnProperty(i)) {
            //solve equation
            if (temp.hasOwnProperty(i - 1) && temp.hasOwnProperty(i + 1)) {
                var l = i - 1;
                var r = i + 1 >= 7 ? 0 : i + 1;
                temp["" + i] = Math.round((temp["" + l] + temp["" + r]) / 2);
            }
            else {
                temp["" + i] = solve(temp, i - 1, i + 1);
            }
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
function solution(D) {
    var temp = {};
    for (var key in D) {
        var d = new Date(parseInt(key.split("-")[0]), parseInt(key.split("-")[1]) - 1, parseInt(key.split("-")[2])).getDay();
        if (temp.hasOwnProperty(d)) {
            temp["" + d] += D[key];
        }
        else {
            temp["" + d] = D[key];
        }
    }
    var data = checkData(temp);
    console.log("Output--D = ", data);
}
solution(D);
