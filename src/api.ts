const conta = {
    email: 'andreolive@live.com',
    password: '123456',
    name: 'Andre Cardoso',
    balance: 2000.00,
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})
