export class DeleteProductService {
    async execute(id: any) {
        console.log(id);

        return {
            message: "Registro excluido com sucesso",
        };
    }
}
