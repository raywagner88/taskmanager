export default defineEventHandler(async (event) => {
  const { name } = await readBody(event)

  const todo = await useDrizzle().insert(tables.todos).values({
    name,
    createdAt: new Date()
  }).returning().get()

  return todo
})
