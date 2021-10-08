import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";
import { getAllUsers, getFilteredUsers, getOrderedUsers, getUsersPagination, getUsers } from "./endPoints";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/users/all", getAllUsers);

app.get("/users/search/name", getFilteredUsers);

app.get("/users/all/order", getOrderedUsers);

app.get("/users/page", getUsersPagination);

app.get("/users/search", getUsers);

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

export default app