import mongoose from 'mongooose'

const UserSchema = new mongoose.Schema({

    name:{ type:String , required:true },
    email:{type:String , required:true , unique:true},
    password:{type:String , required:true}

},{timeStamps:true})

export default mongoose.model("Product" , UserSchema)
