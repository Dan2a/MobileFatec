class ListClientService {
    async execute() {
        const clients = [
            {
                id: 1,
                name: "Bruno",
                cpf: "11122233399",
                email: "bruno@gmail.com",
                address: "Rua Abc",
                zipcode: "12345-123",
                number: 532,
                city: "São Paulo",
                state: "São Paulo",
            },
            {
                id: 2,
                name: "Luiz",
                cpf: "12345678911",
                email: "luiz@gmail.com",
                address: "Rua Def",
                zipcode: "12121-333",
                number: 325,
                city: "Itaquaquistão",
                state: "São Paulo",
            },
        ];
        return clients;
    }
}
export { ListClientService };
