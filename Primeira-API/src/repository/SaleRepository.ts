import { EntityRepository, Repository } from "typeorm";
import { Sale } from "../entity/Sale";

@EntityRepository(Sale)
export class SaleRepository extends Repository<Sale> {}