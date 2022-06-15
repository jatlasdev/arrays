let display = document.getElementById('display')
let submit = document.getElementById('submit')
let people = []

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

function isUnique(array, person) {
    const isNameExists = array.some(item => item.name === person.name)
    if (!isNameExists) array.push(person)
    return array
}


submit.addEventListener('click', function() {
    let inName = document.getElementById('inName')
    let inAge = document.getElementById('inAge')
    const newPerson = new Person()
    newPerson.name = inName.value
    newPerson.age = inAge.value
    if(!inName.value || !inAge.value) {
        alert('Missing')
    } else {
        const newPeopleList = isUnique(people, newPerson)
        display.innerHTML = ""
        newPeopleList.map(person => {
            let box = document.createElement('div')
                box.setAttribute('class', 'box')
                let namespace = document.createElement('h1')
                namespace.setAttribute('class', 'names')
                let agespace = document.createElement('h2')
                display.append(box)
                namespace.innerHTML=`Name: ${person.name}`
                agespace.innerHTML=`Age: ${person.age}`
                box.append(namespace)
                box.append(agespace)
                inName.value=""
                inAge.value=""
        })
        
    }
})
