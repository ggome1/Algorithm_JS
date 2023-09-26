function solution(name, yearning, photo) {
    var answer = [];
    var personMap = {};

    name.forEach((personName, index) => {
        personMap[personName] = yearning[index];
    });

    photo.forEach((photoNumber) => {
        let sum = 0;
        photoNumber.forEach((existPerson) => {
            if (name.indexOf(existPerson) != -1)
                sum += personMap[existPerson];
        });
        answer.push(sum);
    });
    return answer;
}