import express from 'express';

const app = express();
const PORT = process.env.PORT ?? 8000;

// Middleware
app.use(express.json());

app.get("/", (req, res) => {
    return res.json({
        status: "ok",
        message: "Server is running 🚀"
    });
});

app.listen(PORT, () => {
    console.log(`✅ Server Started On PORT ${PORT}`);
});

// Graceful shutdown (optional but good practice)
process.on('SIGTERM', () => {
    console.log('SIGTERM signal received: closing HTTP server');
    process.exit(0);
});