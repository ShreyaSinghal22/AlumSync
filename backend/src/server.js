//http server bootstrap
import app from "./app.js";

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`AlumSync API running on port ${PORT}`);
});