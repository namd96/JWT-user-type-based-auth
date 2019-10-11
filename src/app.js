// to do
/* 
1. listen to an express server
2. Route /login/* : No auth
3. Route /fridge/* : policy guest or family
4. Route /cupboard/* : policy family
5. Route * : authenticator middleware
*/
app.use('/login',LoginRouter)
app.use(authenticator.validateMiddleware)
app.use('/fridge',GuestOrFamily)
app.use('/fridge',FridgeRouter)
