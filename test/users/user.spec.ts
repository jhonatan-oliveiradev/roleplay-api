import test from 'japa'
import supertest from 'supertest'

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`

test.group('User', () => {
  test.only('it should be able to create a new user', async (assert) => {
    const userPayload = { email: 'test@test.com', username: 'test', password: 'test' }
    await supertest(BASE_URL).post('/users').send(userPayload).expect(201)
  })
})
