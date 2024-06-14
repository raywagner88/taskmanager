export default defineTask({
  meta: {
    name: "db:seed",
    description: "Run database seed task",
  },
  async run() {
    console.log("Running DB seed task...")
    const seed = [
      {
        email: "john@example.com",
        password: "password123",
        createdAt: new Date(),
      },
      {
        email: "jane@example.com",
        password: "password123",
        createdAt: new Date(),
      },
    ]
    await useDrizzle().insert(tables.users).values(seed);
    return { result: "success" }
  }
})
