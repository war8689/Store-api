
const Express = require('express')
const dotenv = require('dotenv').config()
const app = Express()
const notFound = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')
const port = process.env.PORT || 3000
const Routes = require('./routes/products')
const {connectDB} = require('./db/connect')

app.use(Express.json())
app.use('/api/v1/products',Routes)

app.get('/',(req,res)=>{
    return res.send(`<h1>Store</h1>
                     <br>
                     <p>
                        <a href="api/v1/products">Go to Products</a>
                    </p>`
                    )
})



app.use(notFound)
app.use(errorMiddleware)


 const start = async ()=>{
    try {    
          
            await connectDB(process.env.MONGO_URI)
            app.listen(port,()=> console.log(`Server started on ${port}`))
         
    } catch (error) {
        console.log(error);
        
    }

}


start()

