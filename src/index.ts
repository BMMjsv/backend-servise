import Express, { Application } from "express";
import cors from "cors";
import { AppDataSource } from "./data-source";
import router from "./routes/productRoutes";
import swaggerUI from "swagger-ui-express";
import swaggerSpec from "./swagger/swagger";

const app: Application = Express();
const PORT = process.env.PORT ?? 3000;

// Middleware
app.use(cors());
app.use(Express.json());

// Rutas
app.use("/api/", router); // Rutas de productos

// Documentación swagger
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// Inicialización de la base de datos y el servidor
AppDataSource.initialize()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
      console.log(`Endpoints:`);
      console.log(`API de productos: http://localhost:${PORT}/api/products`);
      console.log(`Documentación Swagger en http://localhost:${PORT}/api-docs`);
    });
  })
  .catch((error) => console.log(error));
