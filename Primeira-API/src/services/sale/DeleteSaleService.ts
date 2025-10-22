export class DeleteSaleService {
    async execute(id: any) {
        console.log(id);

        return {
            message: "Registro excluido com sucesso",
        };
    }
}
