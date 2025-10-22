import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { v4 as uuid } from "uuid";
import { Sale } from "./Sale";

@Entity("clients")
class Client {
    @PrimaryColumn()
    readonly id!: string;

    @Column()
    name: string;

    @Column({ unique: true })
    cpf: string;

    @Column()
    email: string;

    @Column()
    address: string;

    @Column()
    zipcode: string;

    @Column()
    number: number;

    @Column()
    city: string;

    @Column()
    state: string;

    @OneToMany(() => Sale, sale => sale.client)
    sales: Sale[];

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    update_at!: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { Client };