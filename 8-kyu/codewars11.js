function findMultiples(integer, limit) {
    let list = [];
    let i = 1;
    while (i * integer <= limit) {
        list.push(i * integer);
        i++;
    }
    return list;
   }