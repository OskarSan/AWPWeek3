import express, { Express } from "express";
import path from "path";
import router from "./src/index"
import morgan from "morgan";

const app: Express = express()
const port = 3000

app.use(express.json())
app.use(morgan("dev"))

app.use(express.static(path.join(__dirname, "../public")) )
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public", "site.html"));
  });

app.use("/",router)



app.listen(port, ()=>{
    console.log(`server running on port ${port}`)
})

