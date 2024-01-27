const books = ['Война и мир', 'Преступление и наказание', 'Ромео и Джульета', 'Берсерк', 'У', 'у']
let filtering = books.filter((i) => i.toLowerCase().includes('у'))
console.log(filtering)


let users = [
    {name: 'Ринат', date: '2006-05-21'},
    {name: 'Жоомарт', date: '2003-07-11'},
    {name: 'Аяна', date: '2000-01-08'},
    {name: 'Эмир', date: '2006-04-29'},
    {name: 'Аалам', date: '2006-05-21'},
]

users.forEach((item) => {
    console.log('Пользователь' + " " + item.name + " " + 'родился' + item.date)
})

const formatName = () => {
    const surname = prompt('Введите фамилию')
    const firstName = prompt('Введите имя')
    const nameFather = prompt('Введите отчество')

    const firstName2 = firstName[0]
    const firstLastName = nameFather[0]
    const fullName = surname + ' ' + firstName2 + '.' + firstLastName + '.';
    return fullName
}
const result = formatName()
console.log(result)





