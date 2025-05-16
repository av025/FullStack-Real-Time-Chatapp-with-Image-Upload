import express from "express";
import authRoutes from "./routes/auth.route.js"

const app = express(); 

const PORT = 5001; 

app.use("/api/auth", authRoutes);



app.get("/", (request,response) => {
    response.send("Hello World");
})

app.listen(PORT, () => {
    console.log(`Your Server was running on the localhost:${PORT}`);
})