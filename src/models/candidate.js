import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const candidateModel = new Schema({
    id: { type: String },
    name: { type: String },
    username: { type: String },
    ocupation: { type: String },
    picture: { type: String },
    strengths: { type: Object },
    topConnections: { type: Object }
});

export default mongoose.model('candidate', candidateModel);
