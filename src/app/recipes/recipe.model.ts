export class Recipe {
  public name: string;
  public description: string;
  public imagPath: string;

  constructor (name: string, description: string, imageath: string) {
    this.name = name;
    this.description = description;
    this.imagPath = imageath;
  }
}
