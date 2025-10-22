import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Client } from "./Client";
import { Product } from "./Product";

@Entity("sales")
class Sale {
    @PrimaryColumn()
    readonly id!: string;

    @Column("decimal", { precision: 10, scale: 2 })
    value: number;

    @Column("decimal", { precision: 10, scale: 2 })
    discount: number;

    @Column()
    productId: string;

    @Column()
    clientId: string;

    @ManyToOne(() => Product, product => product.sales)
    @JoinColumn({ name: "productId" })
    product: Product;

    @ManyToOne(() => Client, client => client.sales)
    @JoinColumn({ name: "clientId" })
    client: Client;

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

export { Sale };