//functio scope
let subject = 'Create Video'

function createThink(subject) {
    subject = 'Study'
    return subject
}

function createThink2() {
    subject = 'Study'
    return subject
}

console.log(createThink(subject))
console.log(subject)

console.log(createThink2(subject))
console.log(subject)