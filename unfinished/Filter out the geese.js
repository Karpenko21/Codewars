/*
/!*function gooseFilter (birds) {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(!geese)
}*!/

function gooseFilter (birds) {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

    return birds.map((g, index, geese) => {
        for (let i = 0; i < geese.lengtn; i++) {

        }
            } );
}*/

/*
function gooseFilter (birds) {
    let newArray = []
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    for (let i = 0; i < birds.length; i++) {
        for (let j = 0; j < geese.length; j++) {
            if (birds[i] !== geese[j]) {

            }
        }
    }
    return newArray;
}*/

function gooseFilter (birds) {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    let newArray = birds.filter(b => {
        for (let i = 0; i < geese.length; i++){
            b !== geese[i]
        }
        }
    )
    return newArray;
}
