### Exercício 1:
* letra a)
A resposta que vamos ter é um objeto com as informações principais do ator ou atriz com a ID buscada.

* letra b)
const getActorByName = async (name: string) : Promise<any> => {
    try {
        const result = await connection.raw(`
            SELECT * FROM Actor WHERE name = "${name}";
        `);
        console.log(result[0][0]);
        return result[0][0];
    } catch (error:any) {
        console.log(error.sqlMessage || error.message);
    };
};

getActorByName("Camila Pitanga");

* letra c)
const countActorsByGender = async (gender: string): Promise<any> => {
    try {
        const result = await connection.raw(`
            SELECT COUNT(*) as total FROM Actor WHERE gender = "${gender}";
        `);
        const total = result[0][0].total;
        return total;
    } catch (error:any) {
        console.log(error.sqlMessage || error.message);
    };
};

### Exercício 2:
* letra a)
const updateSalary = async (
    id: number,
    salary: number
): Promise<void> => {
    try {
        await connection("Actor")
            .update({ salary: salary })
            .where("id", id);
        console.log(`Salario alterado com sucesso`);
    } catch (error:any) {
        throw new Error(error.sqlMessage || error.message);
    };
};

* letra b)
const deleteActor = async (id: number) : Promise<void> => {
    try {
        await connection("Actor")
        .where("id", id)
        .del();
        console.log(`Ator removido`);
    } catch (error: any) {
        throw new Error(error.sqlMessage || error.message);
    };
};

* letra c)
const averageByGender = async (gender: string): Promise<any> => {
    try {
        const result = await connection("Actor")
        .avg("salary as average")
        .where("gender", gender);
        console.log(result[0].average);
    } catch (error) {
        console.log(error.sqlMessage || error.message);
    };
};

### Exercício 3:
* letra a)
app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        res.end()
    } catch (error: any) {
        console.log(error.message)
        res.status(400).send("Error")
    }
})

* letra b)
app.get("/actor", async (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const gender = req.query.gender as string;
        const count: number = await countActorsByGender(gender);
        if ( !count ) {
            errorCode = 422;
            throw new Error("Gênero informado é inválido");
        };
        res.status(200).send({ gender: gender, count: count});
    } catch (error:any) {
        res.status(errorCode).send({ message: error.message });
    };
});

### Exercício 4:
* letra a)
app.put("/actor", async (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        await updateSalary(
            Number(req.body.id),
            Number(req.body.salary)
        );
        const actor = await getActorById(req.body.id);
        if (!actor) {
            errorCode = 400;
            throw new Error("Ator não encontrado")
        };
        res.status(200).send("Salário alterado com sucesso");
    } catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message);
    };
});

* letra b) 
app.delete("/actor/:id", async (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const id = req.params.id
        if (!id) {
            errorCode = 400;
            throw new Error("Ator não encontrado")
        };
        res.status(200).send("Ator deletado com sucesso!");
    } catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message);
    };
});