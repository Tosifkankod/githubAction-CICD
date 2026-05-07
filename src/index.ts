import express from 'express';

const app = express();
const PORT = process.env.PORT ?? 8000;

app.get("/", (req, res) => {
    return res.json({
        status: "ok"
    })
})


app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`);
})