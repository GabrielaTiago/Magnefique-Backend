import app from "./app";

const PORT: number = Number(process.env.PORT) || 5000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`);
});
