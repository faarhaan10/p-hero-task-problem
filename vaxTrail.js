function vaxTrail(persons) {
    const result = {
        A: [],
        B: [],
        C: [],
        D: [],
    };

    const isAgeSatisfied = function (age, ageRangeStart, ageRangeEnd) {
        return age >= ageRangeStart && age <= ageRangeEnd;
    };

    const isEven = function (number) {
        return number % 2 === 0;
    };

    persons.forEach((person) => {
        if (person.temperature >= 100) {
            isEven(person.age)
                ? result.D.unshift(person)
                : result.D.push(person);
        } else if (isAgeSatisfied(person.age, 20, 30)) {
            isEven(person.age)
                ? result.A.unshift(person)
                : result.A.push(person);
        } else if (isAgeSatisfied(person.age, 31, 40)) {
            isEven(person.age)
                ? result.B.unshift(person)
                : result.B.push(person);
        } else if (isAgeSatisfied(person.age, 41, 50)) {
            isEven(person.age)
                ? result.C.unshift(person)
                : result.C.push(person);
        }
    });

    return result;
}

// Test Data
const data = [
    { name: 'sunil', age: 21, temperature: 98 },
    { name: 'Biplap', age: 22, temperature: 98 },
    { name: 'nasir', age: 32, temperature: 95 },
    { name: 'jahid', age: 35, temperature: 90 },
    { name: 'jabed', age: 41, temperature: 98 },
    { name: 'ahsan', age: 48, temperature: 102 },
];

const res = vaxTrail(data);
console.log(res);