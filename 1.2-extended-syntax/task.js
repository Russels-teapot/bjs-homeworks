"use strict"

function getResult(a,b,c) {
    let x = [];
    let D = Math.pow(b, 2) - 4 * a * c;
    if (D > 0) {
    x.push((Math.sqrt(D) - b) / 2 * a)
    x.push((-Math.sqrt(D) - b) / 2 * a)
    }
    if (D === 0)
        x.push(-b / (2*a));
    return x;
}

function getAverageMark(marks){
    if (marks.length === 0)
        return 0;
    if (marks.length > 5)
        console.log("Количество оценок больше пяти")
    let averageMark;
    let mark;
    let sumOfMarks = 0;
    let newMarks = marks.slice(0, 5)
    for (mark of newMarks) {
        sumOfMarks += mark
    }
    averageMark = sumOfMarks / newMarks.length
    return +averageMark.toFixed(2)

}

function askDrink(name,dateOfBirthday){
    let yearOfBirth = dateOfBirthday.getFullYear();
    let currentYear = new Date().getFullYear();
    let message;
    if ((currentYear - yearOfBirth) >= 18)
        message = `Не желаете ли олд-фэшн, ${name}?`;
    else
        message = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    return message

}