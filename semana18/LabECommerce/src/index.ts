import app from "./app";
import { createUser } from "./endpoints/createUser"
import { createProduct } from "./endpoints/createProduct"
import { getAllUsers } from "./endpoints/getAllUsers"
import { getAllProducts } from "./endpoints/getAllProducts";
import { createTrip } from "./endpoints/createTrip";


app.post("/create/user", createUser);
app.post("/create/product", createProduct)
app.post("/create/trip", createTrip)

app.get("/users", getAllUsers);
app.get("/products", getAllProducts)