//for in loop to print index and values.

let e1: Array<string> = ['tata', 't', 'john', 'cena']

for (const key in e1) {
    console.log(key + " : : " + e1[key])
}

// 0 : : tata
// 1 : : t
// 2 : : john
// 3 : : cena
