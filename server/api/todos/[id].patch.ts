export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event)
  const { name } = await readBody(event)

  const todo = await useDrizzle().update(tables.todos).set({
    name
  }).where(eq(tables.todos.id, Number(id))).returning().get()

  return todo
})
