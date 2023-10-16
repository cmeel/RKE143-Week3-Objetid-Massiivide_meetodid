//let newStudent = {
    //firstName: 'Harry',
    //age: 11,
    //isWizard: true,
    //friends: ['Ron', 'Hermione', 'Hedwig']
    //introduce: function() {
       // console.log(`Greetings, my name is ${this.firstname}.`);
    //}
//}

//console.log(`${newStudent.firstName} has got ${newStudent.friends.length} friends.`);

let friends = [
    {
        firstName: 'Harry',
        age: 11,
        isWizard: true,
        friends: ['Ron', 'Hermione', 'Hedwig'],
        introduce: function() {
            console.log(`Greetings, my name is ${this.firstname}.`);
        }
    },
    {
        firstName: 'Ron',
        age: 11,
        isWizard: true,
        friends: ['Harry', 'Hermione', 'Hedwig'],
        introduce: function() {
            console.log(`Greetings, my name is ${this.firstname}.`);
        }
    },
    {
        firstName: 'Hermione',
        age: 11,
        isWizard: true,
        friends: ['Ron', 'Harry', 'Hedwig'],
        introduce: function() {
            console.log(`Greetings, my name is ${this.firstname}.`);
        }
    },
    {
        firstName: 'Hedwig',
        age: 'unknown',
        isWizard: false,
        friends: ['Ron', 'Hermione', 'Harry'],
        introduce: function() {
            console.log(`${this.firstName} says hoot-hoot.`);
        }
    }
]

//filter()
let students = friends.filter(friend => {
    if (friend.isWizard) {
       return friend;
    }
});

//map()
let studentsList = students.map(student => {
    return student.firstName;
});

//sort()
studentsList.sort((a, b) => {return a.localeCompare(b)});

console.log(studentsList);

