String.prototype.isPalindrome = function() {
    strNorm = this.toLowerCase().replace(/\s/g, '');
    strRev = strNorm.split('').reverse().join('');
    if (strRev === strNorm)
        return true;
    else return false
}


function getAverageMark(marks) {
    let sumOfMarks = 0;
    for (let mark of marks) {
        sumOfMarks+=mark
    }
    let averageMark;
    if (marks.length === 0)
        return 0;
    else return averageMark = Math.round(sumOfMarks/marks.length)
}

function checkBirthday(birthday) {
    let now = Date.now();
    let date = new Date(birthday).getTime();
    let diff = now - date;
    let age = diff / 31557600000;
    if (age >= 18)
        return true;
    else return false
}
