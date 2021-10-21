import app from "./app"
import signup from "./endpoints/signup"
import login from "./endpoints/login"

app.post("/users/signup", signup);
app.post("/users/login", login);