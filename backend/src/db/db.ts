import { connect } from "mongoose"

async function connectDB() {
    const conn = await connect('mongodb://127.0.0.1/mongodb')

    return conn
}
   
export default connectDB