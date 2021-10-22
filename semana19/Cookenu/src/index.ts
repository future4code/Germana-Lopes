import app from "./app"
import signup from "./endpoints/signup"
import login from "./endpoints/login"
import getProfile from "./endpoints/getProfile";
import getUserProfileById from "./endpoints/getUserProfileById";
import createRecipe from "./endpoints/createRecipe";
import getRecipe from "./endpoints/getRecipe";


//Users
app.post("/users/signup", signup);
app.post("/users/login", login);

app.get("/users/profile", getProfile)
app.get("users/:id", getUserProfileById)

// Recipes
app.post("/recipe", createRecipe)

app.get("recipe/:id", getRecipe)