export class Pokemon {

    constructor(
      private Name: string,
      private Evolution_Stage: string,
      private Type1: string,
      private id?: string,
    ) { }
  
    public getId = (): string | undefined => this.id
    public getName = (): string => this.Name
    public getEvolution = (): string => this.Evolution_Stage
    public getType1 = (): string => this.Type1
  }