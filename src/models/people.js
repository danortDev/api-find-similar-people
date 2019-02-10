import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const peopleModel = new Schema({
    name: { type: String },
    username: { type: String }
});

export default mongoose.model('people', peopleModel);
