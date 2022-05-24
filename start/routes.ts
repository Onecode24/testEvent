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
import Event from 'App/Models/Event'
import {EventValidator , EventUpdate} from 'App/Validators/EventValidator'


Route.get('/', async () => {
  return { hello: 'world' }
})

Route.post('/newevent',async ({request}) =>{

  const eventInfo = await request.validate(EventValidator)

  await Event.create(eventInfo)

  return{
    event : "Evenement enregister"
  }

})

Route.get('/events', async ()=>{
  return Database
  .from('events')
  .select('*')
  .orderBy('date')
  .as('last_login_ip')

})

Route.get('/event/:id', async ({params})=>{
  return Database
  .from('events')
  .where('id',params.id)
})

Route.post('/event/:id', async ({request , params})=>{

  const updateInfo = await request.validate(EventUpdate);

  let a = await Database
  .from('events')
  .where('id',params.id)
  .update(updateInfo)

  if("1" == a.toString()){
      return {
        status : "Successfully update"
      }
  }else{
    return {
      status : "Event not exist"
    }
  }
})
