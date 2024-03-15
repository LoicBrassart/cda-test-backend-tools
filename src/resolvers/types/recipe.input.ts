import { Field, InputType } from "type-graphql";
import { type Recipe } from "../../entities/Recipe";

@InputType()
export class RecipeInput implements Partial<Recipe> {
  @Field()
  title!: string;

  @Field({ nullable: true })
  description!: string;
}
