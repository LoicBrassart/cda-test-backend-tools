import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { type Repository } from "typeorm";
import { RecipeInput } from "./types";
import { dataSource } from "../datasource";
import { Recipe } from "../entities/Recipe";

@Resolver(Recipe)
export class RecipeResolver {
  private readonly recipeRepository: Repository<Recipe>;

  constructor() {
    this.recipeRepository = dataSource.getRepository(Recipe);
  }

  @Query((_returns) => Recipe, { nullable: true })
  recipe(@Arg("recipeId", (_type) => Int) recipeId: number) {
    return this.recipeRepository.findOneBy({ id: recipeId });
  }

  @Query((_returns) => [Recipe])
  recipes(): Promise<Recipe[]> {
    return this.recipeRepository.find();
  }

  @Mutation((_returns) => Recipe)
  addRecipe(@Arg("recipe") recipeInput: RecipeInput): Promise<Recipe> {
    const recipe = this.recipeRepository.create({
      ...recipeInput,
    });
    return this.recipeRepository.save(recipe);
  }
}
