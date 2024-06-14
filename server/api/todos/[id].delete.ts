export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event)

  const deleteTodo = await useDrizzle().delete(tables.todos).where(and(
    eq(tables.todos.id, Number(id))
  )).returning().get()

  if (!deleteTodo) {
    throw createError({
      statusCode: 404,
      message: "Todo not found"
    })
  }

  return deleteTodo
})
