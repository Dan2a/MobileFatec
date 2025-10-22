class DeleteCategoryService {
    async execute(id: any) {
        console.log(id);
        var msg = {
            message: "Registro excluido com sucesso",
        };

        return msg;
    }
}

export { DeleteCategoryService };
