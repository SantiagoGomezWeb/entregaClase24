import mongoose from 'mongoose';

const url = 'mongoose.connect("mongodb+srv://santiagodanielgomez:AhMbwxyx24izrjse@e-commerce.wnmhhjz.mongodb.net/?retryWrites=true&w=majority'

const connectToDB = () => {
    try {
        mongoose.connect(url)
        console.log('connected to DB e-commerce')
    } catch (error) {
        console.log(error);
    }
};

export default connectToDB

