import { Request, Response } from 'express';

class ListClientController {
    async handle(request: Request, response: Response) {
        const clients = [
            {
                id: 1,
                name: "Daniel",
                cpf: "12345678900",
                email: "daniel@email.com",
                adress: "Rua das Flores, 123",
                zipcode: "12345-678",
                number: 123,
                city: "São Paulo",
                state: "SP"
            },
            {
                id: 2,
                name: "Maria",
                cpf: "98765432100",
                email: "maria@email.com",
                adress: "Av. Brasil, 456",
                zipcode: "87654-321",
                number: 456,
                city: "Rio de Janeiro",
                state: "RJ"
            }
    ]
        return response.json(clients);
    }
}
export { ListClientController };