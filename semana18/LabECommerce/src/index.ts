import app from "./app";
import { createUser } from "./endpoints/createUser"
import { createProduct } from "./endpoints/createProduct"
import { getAllUsers } from "./endpoints/getAllUsers"
import { getAllProducts } from "./endpoints/getAllProducts";
import { createTrip } from "./endpoints/createTrip";
import { createPurchase } from "./endpoints/createPurchase";
import { getAllTrips } from "./endpoints/getAllTrips";
import { getAllPurchases } from "./endpoints/getAllPurchases";
import { getPurchaseByUserId } from "./endpoints/getPurchaseByUser";


app.post("/create/user", createUser);
app.post("/create/product", createProduct)

app.get("/users", getAllUsers);
app.get("/products", getAllProducts)

// Desafio 5:
app.post("/create/trip", createTrip)

// Desafio 6:
app.get("/trips", getAllTrips)

// Desafio 7:
app.post("/create/purchase", createPurchase)

// Desafios 8 e 9 feitos diretamente nos códigos

// Desafio 10:
app.get("/purchases", getAllPurchases)

// Desafio 11:
app.get("/purchases/:userid", getPurchaseByUserId)

// Desafio 12 feito diretamente no código