import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { v4 as uuid } from "uuid";
import { Product } from "./Product"; 

@Entity("categories")
class Category {
    @PrimaryColumn()
    readonly id!: string;

    @Column({ unique: true }) // Regra de negócio: não pode haver duas categorias com mesmo nome
    name: string;

    @Column()
    description: string;

    @OneToMany(() => Product, product => product.category) // Relacionamento: Uma Categoria para Muitos Produtos
    products: Product[];

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

export { Category };