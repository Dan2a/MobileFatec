import { EntityRepository, Repository } from "typeorm";
import { Client } from "../entity/Client";

@EntityRepository(Client)
export class ClientRepository extends Repository<Client> {}