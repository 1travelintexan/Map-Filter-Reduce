//Here is a list of people in a database
const users = [
    {
        firstName: 'Joshua',
        lastName: 'george',
        age: 36,
        pets: true,
        address: {
            streetNumber: '123',
            streetName: 'Spain Ave',
            country: 'Spain',
            areaCode: 12345
        },
        primeUser: true,
        codingLanguages: [
            'Javascript', 'CSS', 'HTML'
        ]
    },
     {
        firstName: 'Marcos',
        age: 20,
        pets: false,
        address: {
            streetNumber: '123',
            streetName: 'Portugal Ave',
            country: 'Portugal',
            areaCode: 12345
        },
        primeUser: false,
        codingLanguages: [
            'Javascript', 'CSS', 'HTML', 'Typescript', 'Testing'
        ]
    },
     {
        firstName: 'fern',
        lastName: 'Brazil',
        age: 26,
        pets: false,
        address: {
            streetNumber: '123',
            streetName: 'Dutch Ave',
            country: 'Netherlands',
            areaCode: 12345
        },
        primeUser: true,
        codingLanguages: [
            'Javascript', 'CSS', 'HTML'
        ]
    },
     {
        firstName: 'Luise',
        lastName: 'Schone',
        age: 28,
        pets: true,
        address: {
            streetNumber: '123',
            streetName: 'Germany Ave',
            country: 'Germany',
            areaCode: 12345
        },
        primeUser: true,
        codingLanguages: [
            'Javascript', 'CSS', 'HTML', 'Python'
        ]
    },
     {
        firstName: 'Manish',
        lastName: 'God Mode',
        age: 136,
        pets: false,
        address: {
            streetNumber: '123',
            streetName: 'India Ave',
            country: 'India',
            areaCode: 12345
        },
        primeUser: true,
        codingLanguages: [
            'Javascript', 'CSS', 'HTML', 'Typescript', 'C##', 'English', 'Hindi'
        ]
    },
     {
        firstName: 'Hugo',
        lastName: 'Swiz',
        age: 30,
        pets: true,
        address: {
            streetNumber: '123',
            streetName: 'Switz Ave',
            country: 'Switzerland',
            areaCode: 12345
        },
        primeUser: true,
        codingLanguages: [
            'Javascript', 'CSS', 'HTML', 'Typescript'
        ]
    },
     {
        firstName: 'hauke',
        lastName: 'Gut',
        age: 31,
        pets: true,
        address: {
            streetNumber: '123',
            streetName: 'German Ave',
            country: 'Germany',
            areaCode: 12345
        },
        primeUser: true,
        codingLanguages: [
            'Javascript', 'CSS', 'HTML','Genau','Verklicht'
        ]
    }
]

//List all users with a new field called isFriend and set it equal to true to start

//show only the friends that are younger than 30

//find the average age of everyone

//show only the friends that know Typescipt

//show only the friends that live in either Spain or Portugal

//some friends names are not capital, make sure that all names start with a capital letter and then print them to the console

//What is the total number of Languages spoken?