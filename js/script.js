const worker = {
    name: '',
    surname: '',
    rate: '',
    days: '',
    role: '',
    getSalary: () => {
        let days = 0;
        return ({
            add: () => days++,
            remove: () => days--,
            getCount: () => this.rate * days
        })
    },
    getProfit: () => {},
    makeDiscount: () => {},
    accessInventory: ()=> {},
}

admin(worker){
    name: 'Vasya',
    surname: 'Vasin',
    rate: 100,
    days: 22,
    role: 'admin',
    addNewWorkers: () => {},
    getProfit: () => {
        return []
    },
    changeRate: () => {},
    makeDiscount: () => {
        return balance
    },
}

cashier(worker){
    name: 'Petya',
    surname: 'Petin',
    rate: 70,
    days: 20,
    role: 'cashier',
    getProfit: () => {
        return []
    },
    makeDiscount: () => {
        return balance
    },
}

consultant(worker){
    name: 'Fedya',
    surname: 'Fedin',
    rate: 65,
    days: 21,
    role: 'consultant',
    getProfit: () => {
        return null
    },
    sellInventory: () => {},
    makeDiscount: () => {
        return null
    },
}
