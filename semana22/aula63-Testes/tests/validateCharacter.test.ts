import { validateCharacter } from "../src/functions/validateCharacter"
import { Character } from "../src/model/character"

// testes do exercício 2
describe("Testing validateCharacter function", () => {
    test("Testing for character with empty name - should return false", () => {
        expect.assertions(1)

        const input: Character = {
            name: "",
            life: 1500,
            strength: 100,
            defense: 70
        }
        const output: boolean = validateCharacter(input)

        expect(output).toBe(false)
    })

    test("Testing for character with life = 0 - should return false", () => {
        expect.assertions(1)

        const input: Character = {
            name: "Kitana",
            life: 0,
            strength: 100,
            defense: 70
        }
        const output: boolean = validateCharacter(input)

        expect(output).toBe(false)
    })

    test("Testing for character with strength = 0 - should return false", () => {
        expect.assertions(1)

        const input: Character = {
            name: "Kitana",
            life: 1500,
            strength: 0,
            defense: 70
        }
        const output: boolean = validateCharacter(input)

        expect(output).toBe(false)
    })

    test("Testing for character with defense = 0 - should return false", () => {
        expect.assertions(1)

        const input: Character = {
            name: "Kitana",
            life: 1500,
            strength: 100,
            defense: 0
        }
        const output: boolean = validateCharacter(input)

        expect(output).toBe(false)
    })

    test("Testing for character with a negative number in defense - should return false", () => {
        expect.assertions(1)

        const input: Character = {
            name: "Kitana",
            life: 1500,
            strength: 100,
            defense: -70
        }
        const output: boolean = validateCharacter(input)

        expect(output).toBe(false)
    })

    test("Testing for character with complete and right inputs - should return true", () => {
        expect.assertions(1)

        const input: Character = {
            name: "Kitana",
            life: 1500,
            strength: 100,
            defense: 70
        }
        const output: boolean = validateCharacter(input)

        expect(output).toBe(true)
    })
})