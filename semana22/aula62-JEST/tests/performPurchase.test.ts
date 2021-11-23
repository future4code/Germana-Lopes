import { performPurchase } from "../src/functions/performPurchase";
import { User } from "../src/model/User";


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

    test("Testing user.balance less than value", () => {

        const user: User = {
            name: "Tints",
            balance: 420
        };

        const result = performPurchase(user, 520);

        expect(result).toEqual(undefined);

    })
});



