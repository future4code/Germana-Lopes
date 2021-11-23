import { verifyAge } from "../src/functions/verifyAge"
import { Casino, LOCATION, NACIONALITY, User } from "../src/model/Casino"


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


    test("Testing for american user in Brazil and 18+", () => {

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

    test("Testing for array of american allowed to be 0", () => {

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


});