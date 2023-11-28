import  express from 'express';
import cors from "cors"; 

const app = express();
const port = 3000;

app.use(cors());
app.get('/',(request,response)=>{
    response.json({
        data:{
            product_name:"sepatu olahraga",
            price: 2000000,
            Image_url:"https://images.unsplash.com/photo-1622611996550-55d5258b1c92?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        },
        meassage:"data succeesfuly retrieverd!"
    });

});
app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);


});