import * as express from "express";
/* TypeScript */
const app = express.default();

app.get(
  "/",
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.send("hello typescript express!");
  }
);

export default app;