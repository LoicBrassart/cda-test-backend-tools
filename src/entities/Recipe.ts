import { Field, ID, ObjectType } from "type-graphql";
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
@ObjectType()
export class Recipe {
  @Field((_type) => ID)
  @PrimaryGeneratedColumn()
  readonly id!: number;

  @Field()
  @Column()
  title!: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  description?: string;
}
