import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.post('/users', 'UsersController.store')
Route.put('/users/:id', 'UsersController.update').middleware('auth')
Route.post('/forgot-password', 'PasswordController.forgotPassword')
Route.post('/reset-password', 'PasswordController.resetPassword')
Route.post('/sessions', 'SessionsController.store')
Route.delete('/sessions', 'SessionsController.destroy')
