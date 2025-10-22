import { Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { ListUserController } from "./controllers/user/ListUserController";
import { DeleteUserController } from "./controllers/user/DeleteUserController";
import { UpdateUserController } from "./controllers/user/UpdateUserController";
import { CreateClientController } from "./controllers/client/CreateClientController";
import { ListClientController } from "./controllers/client/ListClientController";
import { DeleteClientController } from "./controllers/client/DeleteClientController";
import { UpdateClientController } from "./controllers/client/UpdateClientController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import { ListProductController } from "./controllers/product/ListProductController";
import { DeleteProductController } from "./controllers/product/DeleteProductController";
import { UpdateProductController } from "./controllers/product/UpdateProductController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { DeleteCategoryController } from "./controllers/category/DeleteCategoryController";
import { UpdateCategoryController } from "./controllers/category/updateCategoryController";
import { CreateSalesController } from "./controllers/sale/CreateSalesController";
import { ListSalesController } from "./controllers/sale/ListSalesController";
import { DeleteSalesController } from "./controllers/sale/DeleteSalesController";
import { UpdateSalesController } from "./controllers/sale/UpdateSalesController";
import { AuthenticateUserController } from "./controllers/authenticated/AuthenticateUserController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

// ... (todas as suas instanciações de 'new ...Controller()' ficam aqui) ...
// User Controllers
const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const deleteUserController = new DeleteUserController();
const updateUserController = new UpdateUserController();
// ... (Client, Product, Category, Sales controllers) ...
const createClientController = new CreateClientController();
const listClientController = new ListClientController();
const deleteClientController = new DeleteClientController();
const updateClientController = new UpdateClientController();
const createProductController = new CreateProductController();
const listProductController = new ListProductController();
const deleteProductController = new DeleteProductController();
const updateProductController = new UpdateProductController();
const createCategoryController = new CreateCategoryController();
const listCategoryController = new ListCategoryController();
const deleteCategoryController = new DeleteCategoryController();
const updateCategoryController = new UpdateCategoryController();
const createSalesController = new CreateSalesController();
const listSalesController = new ListSalesController();
const deleteSalesController = new DeleteSalesController();
const updateSalesController = new UpdateSalesController();
const authenticateUserController = new AuthenticateUserController();

const router = Router();

// --- ROTAS PÚBLICAS ---
// (Não precisam de autenticação)
router.post("/login", authenticateUserController.handle);
router.post("/users", createUserController.handle); // Permitir cadastro de usuário

// --- ROTAS PRIVADAS ---
// (Tudo abaixo desta linha exigirá um token JWT)
router.use(ensureAuthenticated);

// User Routes (Privadas)
router.get("/users", listUserController.handle);
router.delete("/users/:id", deleteUserController.handle);
router.put("/users/:id", updateUserController.handle);

// Client Routes
router.post("/clients", createClientController.handle);
router.get("/clients", listClientController.handle);
router.delete("/clients/:id", deleteClientController.handle);
router.put("/clients/:id", updateClientController.handle);

// Product Routes
router.post("/products", createProductController.handle);
router.get("/products", listProductController.handle);
router.delete("/products/:id", deleteProductController.handle);
router.put("/products/:id", updateProductController.handle);

// Category Routes
router.post("/categories", createCategoryController.handle);
router.get("/categories", listCategoryController.handle);
router.delete("/categories/:id", deleteCategoryController.handle);
router.put("/categories/:id", updateCategoryController.handle);

// Sales Routes
router.post("/sales", createSalesController.handle);
router.get("/sales", listSalesController.handle);
router.delete("/sales/:id", deleteSalesController.handle);
router.put("/sales/:id", updateSalesController.handle);

export { router };