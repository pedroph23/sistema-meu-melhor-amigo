import {Entity, PrimaryGeneratedColumn, Column, OneToMany, PrimaryColumn, BaseEntity} from "typeorm";

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('name')
    name: string;


    public getName() {
        return this.name;
    }
}