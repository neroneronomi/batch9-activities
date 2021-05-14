var justiceLeague = [
    {name: "Superman", superpower: "Super strength"}, 
    {name: "Batman", superpower: "Super rich"},
    {name: "Wonder Woman", superpower: "Super lasso"}, 
    {name: "The Flash", superpower: "Super speed"}, 
    {name: "Green Lantern", superpower: "Super ring"}
]

for (let i = 0; i < justiceLeague.length; i++) {
    var leageList = document.getElementById("league")
    var newName = document.createElement("li");
    newName.textContent = justiceLeague[i].name + " - " + justiceLeague[i].superpower;
    leageList.append(newName);
 }



