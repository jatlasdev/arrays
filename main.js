let namebox = document.getElementById('namebox')
let addbox = document.getElementById('addbox')
let add = document.getElementById('add')
let create = document.getElementById('create')
let people = [
    {
        name: "joe",
        age: "17"
    },
    {
        name: "jess",
        age: "20"
    },
    {
        name: "brett",
        age: "5"
    }
]

class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

create.addEventListener('click', function (){
    for(let i=0; i<people.length; i++) {
        let box = document.createElement('div')
        box.setAttribute('class', 'box')
        
        let namespace = document.createElement('h1')
        let agespace = document.createElement('h2')
        namespace.setAttribute('class', 'names')
        namebox.append(box)
        namespace.innerHTML=`Name: ${people[i].name}`
        agespace.innerHTML=`Age: ${people[i].age}`
        box.append(namespace)
        box.append(agespace)
    }
})

add.addEventListener('click', function() {
    const newPerson = new Person()
    let newname = document.getElementById('na')
    let newage = document.getElementById('ag')
    newPerson.name = newname.value
    newPerson.age = newage.value
    if(!newname.value || !newage.value){
        return
    } else {
        people.push(newPerson)
        for(let i=0; i<people.length; i++) {
            document.querySelectorAll('.names').forEach(function(name) {
                if(name.innerHTML == (people[i].name)) {
                    console.log('error checking values')
                } else {
                    let box = document.createElement('div')
                    box.setAttribute('class', 'box')
                    let namespace = document.createElement('h1')
                    namespace.setAttribute('class', 'names')
                    let agespace = document.createElement('h2')
                    addbox.append(box)
                    namespace.innerHTML=`Name: ${people[i].name}`
                    agespace.innerHTML=`Age: ${people[i].age}`
                    box.append(namespace)
                    box.append(agespace)
                    }
                })
        
    }
}
    
})
