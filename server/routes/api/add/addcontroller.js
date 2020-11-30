const Plan = require('../../../models/plan');
const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors());

//make plan
exports.createPlan = async (req, res) => {
    let existing = null;
    try {
        existing = await Plan.findByPlanname(req.body.planname);
    } catch (e) {
        res.status(500).json({ message: e.message });
        return;
    }
    if (existing) {
        res.status(401).json({ message: 'plan exist' });
        return;
    }

    let plan = null;
    try {
        plan = await Plan.createPlan(req.body.planname, req.body.foodname, req.body.username);
    } catch (e) {
        res.status(500).json({ message: e.message });
        return;
    }

    res.status(200).json({ planname: req.body.planname, foodname: req.body.foodname, group:[req.body.username]});
};

//join plan
exports.joinPlan = async (req, res) => {
    let existing = null;
    try {
        existing = await Plan.findByPlanname(req.body.planname);
    } catch (e) {
        res.status(500).json({ message: e.message });
        return;
    }
    if (!existing) {
        res.status(401).json({ message: 'plan not exist' });
        return;
    }
    let plan = null;
    try {
        plan = await Plan.joinPlan(req.body.planname, req.body.username);
    } catch (e) {
        res.status(500).json({ message: e.message });
        return;
    }
    res.status(200).json(plan);
}

//show plan list
exports.showPlan = async (req, res) => {
    const planList= await Plan.find();
    res.status(200).send(planList);
}