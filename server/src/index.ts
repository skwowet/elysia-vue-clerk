import { Elysia } from "elysia";
import { cors } from '@elysiajs/cors'
import { clerkPlugin } from "elysia-clerk";

const app = new Elysia();

app.use(cors({
  origin: ({ headers }) => headers.get('Origin') === "http://localhost:5173",
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}))

app.use(clerkPlugin()).get("/private", async ({ clerk, store, set }) => {
  console.log("clerk", clerk);
  console.log("store", store);

  if (!store.auth?.userId) {
    set.status = 403;
    return "Unauthorized";
  }

  const user = await clerk.users.getUser(store.auth.userId);

  return { user };
});

app.get("/", () => "Hello Elysia");

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
