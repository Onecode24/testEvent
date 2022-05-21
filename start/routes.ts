/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import Database from '@ioc:Adonis/Lucid/Database'


Route.get('/', async () => {
  return { hello: 'world' }
})

Route.post('/newevent',async ({request}) =>{

  let req = request.body();
  let n =new Date();

  Database.insertQuery()
  await Database
  .table('events')
  .returning('id')
  .insert({
    eventName : req.eventName,
    description : req.description,
    prix : req.prix,
    lieu : req.lieu,
    date : req.date,
    heure : req.heure,
    'lien images' : req.liens ,
    contact : req.contact,
    created_at: n.toString()
  })

  return{
    event : "Evenement enregister"
  }

})

Route.get('/events', async ()=>{
  return Database
  .from('events')
  .select('*')
  .orderBy('prix')
  .as('last_login_ip')

})
