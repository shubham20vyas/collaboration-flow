import mongoose from 'mongoose';

const gameScoreSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    score: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }
});

const GameScore = mongoose.model('GameScore', gameScoreSchema);
export default GameScore;