const stolovoya = {
    name: "foodGood",
    status: 5,
    menu: [
        breakfast= {
            text: 'завтрак хорош',
            completed: false
        },
        lunch= {
            text: 'обед вкусный',
            completed: true
        },
        supper= {
            text: 'ужин превосходный',
            completed: false
        },
    ],
    clients: 30,
    freeTables: 25,

statusClients: function () {
if (this.freeTables <= 0) {
    this.clients -= 1
} else {
    this.clients += 1
}
},
statusStolovaya: function () {
    if (this.clients < 10) {
        this.status -= 1
    } else {
        this.status += 1
    }
},
print: function (index) {
    if (this.menu[index].completed === false) {
        console.log(`[ ] ${this.menu[index].text}`);
    } else {
        console.log(`[x] ${this.menu[index].text}`); 
    }
},
complete: function (index) {
    stolovoya.menu[index].completed = true
},
menuCLients: function (index) {
    if (this.menu[index].completed === true) {
        this.clients += 5
    }
}

}
stolovoya.complete(0)
stolovoya.print(0)

