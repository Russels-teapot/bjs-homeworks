function getSolutions (a, b, c) {
    let D = Math.pow(b, 2) - 4 * a * c;
    let result;
    if (D < 0)
        result = {
            D,
            roots: []
        }
    if (D === 0) {
        let x1 = -b / (2 * a);
        result =  {
        D,
        roots: [x1]
        }
}
    if (D > 0) {
        let x1 = (-b - Math.sqrt(D)) / (2 * a);
        let x2 = (-b + Math.sqrt(D)) / (2 * a);
        result =  {
        D,
        roots: [x1, x2]
        }
}
    return result
}

function showSolutionsMessage (a, b, c) {
    let result = getSolutions (a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`)
    console.log("Значение дискриминанта: " + result.D);
    if (result.D < 0)
        console.log ("Уравнение не имеет вещественных корней");
    if (result.D === 0)
        console.log("Уравнение имеет один корень X₁ = " + result.roots);
    if (result.D > 0)
        console.log ("Уравнение имеет два корня. X₁ = " + result.roots[0] +", X₂ = " + result.roots[1])
}

function getAverageMark (marks) {
    let sumOfMarks = 0;
    for (let mark of marks) {
        sumOfMarks += mark
    }
    if (marks.length === 0)
        return 0;
    else return sumOfMarks/marks.length
};

function getAverageScore (data) {
    let averageScore = {};
    for (let subj in data) {
        averageScore[subj] = Math.round(getAverageMark(data[subj]));
    }
    let totalMarks = Object.values(averageScore);
    let sumOfAvgMarks = 0
    for (mark of totalMarks) {
        sumOfAvgMarks += mark
    };
    averageScore.average = Math.round(getAverageMark(Object.values(averageScore)));
    if (Object.values(data).length === 0) {
        return 0}
    else return averageScore;
};

function getDecodedValue(secret) {
    secret === 001 ? (secret = "Родриго") : (secret = "Эмильо")
    return secret
}

function getPersonData(secretData) {
    let decodedData = {};
    return decodedData = {
        firstName: getDecodedValue(secretData["aaa"]),
        lastName: getDecodedValue(secretData["bbb"])
    }
}