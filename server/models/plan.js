const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.connect('mongodb://localhost:27017/sparcs', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
})
.then(() => {
	console.log('Connected to MongoDB');
})
.catch((error) => {
	console.log(error);
});

const Plan = new Schema({
    planname: String,
    foodname: String,
    group: [String],
})

Plan.statics.findByPlanname = function(planname) {
    return this.findOne({'planname':planname}).exec();
}

Plan.statics.joinPlan = function(planname, username) {
    return this.update({'planname':planname},{$push:{group : username}});
}

Plan.statics.createPlan = function(planname, foodname, username){
    const plan = new this({
        planname : planname,
        foodname : foodname,
        group: [username],
    });
    return plan.save();
}

Plan.statics.showPlan = () => {
    return this.find();
}

module.exports = mongoose.model('Plan', Plan)