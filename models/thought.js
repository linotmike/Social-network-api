const {Schema ,model, Types} = require('mongoose');

const reactionSchema = new Schema ({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
      },
      reactionBody: {
        type: String,
        required: true,
        maxlength: 280
      },
      username: {
        type: String,
        required: true
      },
      createdAt: {
        type: Date,
        default: Date.now
      }



})
const thoughtSchema = new Schema ({
    thoughtText:{
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    username: {
        type: String,
        required: true
    },
    reactions: [reactionSchema],
})
thoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length
})
thoughtSchema.set('toJSON', { getters: true });
reactionSchema.set('toJSON', { getters: true });

const Thought = model("thought",thoughtSchema)
module.exports = Thought

