import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { v4 as uuid } from "uuid";
import { Category } from "./Category";
import { Sale } from "./Sale";

@Entity("products")
class Product {
    @PrimaryColumn()
    readonly id!: string;

    @Column({ unique: true })
    name: string;

    @Column()
    EAN: string;

    @Column("decimal", { precision: 10, scale: 2 })
    price: number;

    @Column()
    description: string;

    @Column()
    categoryId: string;

    @ManyToOne(() => Category, category => category.products)
    @JoinColumn({ name: "categoryId" })
    category: Category;

    @OneToMany(() => Sale, sale => sale.product)
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

export { Product };