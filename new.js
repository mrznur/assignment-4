function calculateTax(income, expenses) {
    if (income < 0 || expenses < 0 || expenses > income) {
        console.log("Invalid Input");
    } else {
        let leftoverMoney = income - expenses;
        let tax = 0.2 * leftoverMoney;
        return tax;
    }
};

function sendNotification(email) {
    if (email.indexOf('@') === -1) {
        return "Invalid Email";
    }

    let emailParts = email.split('@');
    let userName = emailParts[0];
    let emailDomain = emailParts[1];

    return userName + " sent you an email from " + emailDomain;
};

function checkDigitsInName(name) {
    if (typeof name !== 'string') {
        return "Invalid Input";
    }

    for (let index = 0; index < name.length; index++) {
        if (name[index] >= '0' && name[index] <= '9') {
            return true;
        }
    }

    return false;
};

function calculateFinalScore(obj) {
    if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
        return "Invalid Input";
    }

    let { testScore, schoolGrade, isFFamily } = obj;

    if (typeof testScore !== 'number' || testScore > 50 || typeof schoolGrade !== 'number' || schoolGrade > 30 || typeof isFFamily !== 'boolean') {
        return "Invalid Input";
    }

    let totalScore = testScore + schoolGrade;

    if (isFFamily) {
        totalScore += 20;
    }

    return totalScore >= 80;
};

function waitingTime(waitingTimes, serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
        return "Invalid Input";
    }

    let sumOfTimes = 0;
    for (let i = 0; i < waitingTimes.length; i++) {
        sumOfTimes += waitingTimes[i];
    }

    let avgWaitTime = Math.round(sumOfTimes / waitingTimes.length);
    let peopleLeft = serialNumber - waitingTimes.length - 1;

    if (peopleLeft <= 0) {
        return 0;
    }

    let totalWaitTime = avgWaitTime * peopleLeft;

    return totalWaitTime;
};