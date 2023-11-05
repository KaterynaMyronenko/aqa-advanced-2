const users = [
    { name: 'Mary', age: 35, email: 'mary@mail.com' },
    { name: 'Nick', age: 40, email: 'nick@mail.com' },
    { name: 'Jack', age: 47, email: 'jack@mail.com' }
]

for (const user of users) {
    const { name, age, email } = user
    console.log(name, age, email)
}
