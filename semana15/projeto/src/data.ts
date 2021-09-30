export type User = {
    name: string,
    cpf: string,
    birthDate: string
}

export type Account = {
    client: User,
    balance: number,
    extract: Transaction[]
}

export type Transaction = {
    value: number,
    date: string,
    description: string
}

export const accounts: Account[] = [
    {
        client: {
            name: "Germana Etges",
            cpf: "229.229.406-27",
            birthDate: "1982-10-17"
        },
        balance: 1000,
        extract: []
    },
    {
        client: {
            name: "Aline Vignoli",
            cpf: "303.303.406-27",
            birthDate: "1988-1-20"
        },
        balance: 2000,
        extract: []
    },
    {
        client: {
            name: "Hilton Tints",
            cpf: "134.989.406-23",
            birthDate: "1995-12-3"
        },
        balance: 3000,
        extract: []
    },
    {
        client: {
            name: "Quiboa Pomps",
            cpf: "345.989.406-13",
            birthDate: "2010-10-10"
        },
        balance: 3000,
        extract: []
    }

]