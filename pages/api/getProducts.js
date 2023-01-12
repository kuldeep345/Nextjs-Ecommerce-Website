import connectDb from "../../middleware/mongoose";
import Product from '../../models/Product'

const handler = async(req,res)=>{
    let products = await Product.find()
    
    const tshirt = {}

        for(let item of products){
            if(item.title in tshirt){
                console.log(tshirt)
                if(!tshirt[item.title].color.includes(item.color) && item.availableQty > 0){
                        tshirt[item.title].color.push(item.color)
                }
                if(!tshirt[item.title].size.includes(item.size) && item.availableQty > 0){
                    tshirt[item.title].size.push(item.size)
                }
            }
            else{
                tshirt[item.title] = JSON.parse(JSON.stringify(item))
                if(item.availableQty > 0){
                    tshirt[item.title].size = [item.size]
                    tshirt[item.title].color = [item.color]
                }
            }
        }

        res.status(200).send(tshirt)

}

export default connectDb(handler)