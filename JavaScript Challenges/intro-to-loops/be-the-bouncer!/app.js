const nightClubRegister = [
    {
        name: 'Tony',
        lastname: 'Stark',
        age: 25,
        gender: 'male'
    },
    {
        name: 'Harry',
        lastname: 'Potter',
        age: 16,
        gender: 'male'
    },
    {
        name: 'Hermione',
        lastname: 'Granger',
        age: 17,
        gender: 'female'
    },
    {
        name: 'Steve',
        lastname: 'Rogers',
        age: 62,
        gender: 'male'
    }
]

for (let i = 0; i < nightClubRegister.length; i++) {

if (nightClubRegister[i].age >= 18 && nightClubRegister[i].gender === "male") {
    console.log ("Welcome Mister " + nightClubRegister[i].name + "!");
}

if (nightClubRegister[i].age >= 18 && nightClubRegister[i].gender === "female") {
    console.log ("Welcome Miss " + nightClubRegister[i].name + "!");
}

if (nightClubRegister[i].age < 18 && nightClubRegister[i].gender === "male") {
    console.log ("You are still underage Mister " + nightClubRegister[i].name + "!");
}

if (nightClubRegister[i].age < 18 && nightClubRegister[i].gender === "female") {
    console.log ("You are still underage Miss " + nightClubRegister[i].name + "!");
}

}

