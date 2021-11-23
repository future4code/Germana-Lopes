import { performAttackInvertedDependences } from "../src/functions/performAttack";
import { Character } from "../src/model/character";

// Testes do exercício 4
describe("Testing mock for performAttack function", () => {
    test("Testing with complete and right inputs - should return true ", () => {
        expect.assertions(1);
        const validatorMock = jest.fn(() => {
            return true;
        });

        try {
            const input1 = {
                name: "Kitana",
                life: 1500,
                strength: 300,
                defense: 80,
            };
            const input2 = {
                name: "SubZero",
                life: 900,
                strength: 200,
                defense: 50,
            };

            const result = performAttackInvertedDependences(
                input1,
                input2,
                validatorMock
            );
            expect(result).toBe(undefined);
        } catch (error) {
            console.log(error.message);
        }
    });

    test("Testing function with blank character name - should return 'Invalid Character' error", () => {
        expect.assertions(1);
        const validatorMock = jest.fn(() => {
            return false;
        });

        try {
            const input1 = {
                name: "Kitana",
                life: 1500,
                strength: 300,
                defense: 60,
            };
            const input2 = {
                name: "",
                life: 1100,
                strength: 90,
                defense: 50,
            };

            const result = performAttackInvertedDependences(
                input1,
                input2,
                validatorMock
            );
        } catch (error) {
            expect(error.message).toEqual("Invalid Character");
        }
    });

    // Testes do exercício 5

    test("Testing function with an attack on defender - should perform attack", () => {
        expect.assertions(4);
        const validatorMock = jest.fn(() => {
            return true;
        });

        const attacker: Character = {
            name: "Kitana",
            life: 1500,
            defense: 500,
            strength: 800,
        };

        const defender: Character = {
            name: "SubZero",
            life: 1200,
            defense: 600,
            strength: 200,
        };

        performAttackInvertedDependences(attacker, defender, validatorMock as any);

        expect(defender.life).toEqual(1000);
        expect(validatorMock).toHaveBeenCalled();
        expect(validatorMock).toHaveBeenCalledTimes(2);
        expect(validatorMock).toHaveReturnedTimes(2);
    });

    test("Testing character with an negative value for strenght - should return 'Invalid Character' error", () => {
        
        const validatorMock = jest.fn((character) => {
            return character.name !== ""
        });

        const attacker: Character = {
            name: "Kitana",
            life: 1500,
            defense: 200,
            strength: -600,
        };

        const defender: Character = {
            name: "SubZero",
            life: 1500,
            defense: 400,
            strength: 800,
        };

        try {
            performAttackInvertedDependences(attacker, defender, validatorMock as any);
        } catch (error) {
            expect(error.message).toBe("Invalid Character");
            expect(validatorMock).toHaveBeenCalled();
            expect(validatorMock).toHaveBeenCalledTimes(1);
            expect(validatorMock).toHaveReturnedTimes(1);
        }
    });

})