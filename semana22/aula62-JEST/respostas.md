### Exercícios do dia 08/11 => Testes e JEST!

#### Exercício 1:
* letra a) 
interface User {
	name: string
	balance: number
}

* letra b) 

function performPurchase(user: User, value: number): User | undefined {
	if(user.balance >= value) {
		return {
			...user,
			balance: user.balance - value		
		}
	}
	return undefined
}


#### Exercício 2:
* letra a)
describe("Testing purchase function", () => {

    test("Testing user.balance greater than value", () => {

        const user: User = {
            name: "Tints",
            balance: 420
        };

        const result = performPurchase(user, 100);

        expect(result).toEqual({
            ...user,
            balance: 320
        });

    })
});

* letra b)
test("Testing user.balance equal to value", () => {

        const user: User = {
            name: "Tints",
            balance: 420
        };

        const result = performPurchase(user, 420);

        expect(result).toEqual({
            ...user,
            balance: 0
        });

    })

* letra c)
test("Testing user.balance less than value", () => {

        const user: User = {
            name: "Tints",
            balance: 420
        };

        const result = performPurchase(user, 520);

        expect(result).toEqual(undefined);

    })


#### Exercício 3:
* letra b)
function verifyAge(casino: Casino, users: User[]): Result {
    const allowed: User[] = [];
    const unallowed: User[] = [];
  
    for (const user of users) {
      if (casino.location === LOCATION.EUA) {
        if (user.age >= 21) {
          allowed.push(user);
        } else {
          unallowed.push(user);
        }
      } else if (casino.location === LOCATION.BRAZIL) {
        if (user.age >= 18) {
          allowed.push(user);
        } else {
          unallowed.push(user);
        }
        break;
      }
    }
  
    return {
      brazilians: {
        allowed: allowed
          .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
          .map((user) => user.name),
        unallowed: unallowed
          .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
          .map((user) => user.name),
      },
      americans: {
        allowed: allowed
          .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
          .map((user) => user.name),
        unallowed: unallowed
          .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
          .map((user) => user.name),
      },
    };
  }

* letra c)
Com certeza o mais difícil de fazer foi decidir onde e como colocar o filter, e depois o map. Também levei um tempo tentando entender como montar a questão de separar entre allowed e unallowed.


#### Exercício 4:
* letra a)
describe("Testing verifyAge function", () => {
    test("Testing for brazilian user in Brazil and 18+", () => {

        const user: User[] = [{
            name: "Aline",
            age: 33,
            nacionality: NACIONALITY.BRAZILIAN
        }];

        const casino: Casino = {
            name: "CASINO",
            location: LOCATION.BRAZIL
        };

        const result: Result = verifyAge(casino, user);

        expect(result.brazilians.allowed).toEqual(["Aline"]);

    });

* letra b)
test("Testing for american user in Brazil and 18+", () =>{

        const user: User[] = [{
            name: "Towelie",
            age: 19,
            nacionality: NACIONALITY.AMERICAN
        }];

        const casino: Casino = {
            name: "CASINO",
            location: LOCATION.BRAZIL
        };

        const result = verifyAge(casino, user);

        expect(result.americans.allowed).toEqual(["Towelie"]);
        
    });

* letra c)
 test("Testing for 2 americans and 2 brazilians in EUA and everybody is 19 years old", () => {

        const user: User[] = [
            {
                name: "Towelie",
                age: 19,
                nacionality: NACIONALITY.AMERICAN
            },
            {
                name: "Angelina Jolie",
                age: 19,
                nacionality: NACIONALITY.AMERICAN
            },
            {
                name: "Quiboa",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },
            {
                name: "PampaCat",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            }
        ];

        const casino: Casino = {
            name: "CASINO",
            location: LOCATION.EUA
        };

        const result = verifyAge(casino, user);

        expect(result.americans.unallowed).toEqual(["Towelie", "Angelina Jolie"]);

        expect(result.brazilians.unallowed).toStrictEqual(["Quiboa", "PampaCat"]);

    });


letra d) 
test("Testing for 2 americans who are 21 and 2 brazilians who are 19 in EUA", () => {

        const user: User[] = [
            {
                name: "Towelie",
                age: 21,
                nacionality: NACIONALITY.AMERICAN
            },
            {
                name: "Angelina Jolie",
                age: 21,
                nacionality: NACIONALITY.AMERICAN
            },
            {
                name: "Quiboa",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },
            {
                name: "PampaCat",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            }
        ];

        const casino: Casino = {
            name: "CASINO",
            location: LOCATION.EUA
        };

        const result = verifyAge(casino, user);

        expect(result.americans.allowed).toEqual(["Towelie", "Angelina Jolie"]);

        expect(result.brazilians.unallowed).toStrictEqual(["Quiboa", "PampaCat"]);

    });


#### Exercício 5:
* letra a)
 test("Testing for lenght of array to be between 0 and 2", () => {

        const user: User[] = [{
            name: "Aline",
            age: 33,
            nacionality: NACIONALITY.BRAZILIAN
        }];

        const casino: Casino = {
            name: "CASINO",
            location: LOCATION.BRAZIL
        };

        const result: Result = verifyAge(casino, user);

        expect(result.brazilians.allowed.length).toBeGreaterThan(0);

        expect(result.brazilians.allowed.length).toBeLessThan(2);

    });

letra b) 
  test("Testing for array of american allowed to be 0", () =>{

        const user: User[] = [{
            name: "Towelie",
            age: 19,
            nacionality: NACIONALITY.AMERICAN
        }];

        const casino: Casino = {
            name: "CASINO",
            location: LOCATION.BRAZIL
        };

        const result: Result = verifyAge(casino, user);

        expect(result.americans.unallowed.length).toBe(0);

    });

* letra c) 
test("Testing for 2 americans and 2 brazilians who are 19 and returning the name of one ", () => {

        const user: User[] = [
            {
                name: "Towelie",
                age: 19,
                nacionality: NACIONALITY.AMERICAN
            },
            {
                name: "Angelina Jolie",
                age: 19,
                nacionality: NACIONALITY.AMERICAN
            },
            {
                name: "Quiboa",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },
            {
                name: "PampaCat",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            }
        ];

        const casino: Casino = {
            name: "CASINO",
            location: LOCATION.EUA
        };

        const result = verifyAge(casino, user);

        expect(result.americans.unallowed).toContain("Towelie");

    });

* letra d)
test("Testing for 2 americans who are 21 and 2 brazilians who are 19 in EUA and different array responses", () => {

        const user: User[] = [
            {
                name: "Towelie",
                age: 21,
                nacionality: NACIONALITY.AMERICAN
            },
            {
                name: "Angelina Jolie",
                age: 21,
                nacionality: NACIONALITY.AMERICAN
            },
            {
                name: "Quiboa",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },
            {
                name: "PampaCat",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            }
        ];

        const casino: Casino = {
            name: "CASINO",
            location: LOCATION.EUA
        };

        const result = verifyAge(casino, user);

        expect(result.americans.unallowed.length).toBeLessThan(1);

        expect(result.americans.allowed.length).toBe(2);

        expect(result.brazilians.unallowed.length).toBeGreaterThan(1);
        
    });


