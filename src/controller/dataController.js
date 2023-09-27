const DataModel = require("../model/DataModel")
exports.Intensity = async (req,res)=>{
    try{
        let data = await DataModel.aggregate([
        {$project:{_id:0,end_year:0,sector:0,topic:0,insight:0,url:0,country:0,city:0,start_year:0,impact:0,added:0,relevance:0,pestle:0,source:0,likelihood:0,title:0,published:0}},

        ])
        res.status(200).json({status:"Success",data:data})
    }catch (e) {
    res.status(200).json({status:"fail",message:"Something went wrong"})
    }
}
//Likelihood
exports.Likelihood = async (req,res)=>{
    try{
        let data = await DataModel.aggregate([
            {$project:{_id:0,intensity:0,end_year:0,sector:0,topic:0,insight:0,url:0,country:0,city:0,start_year:0,impact:0,added:0,relevance:0,pestle:0,source:0,title:0,published:0}},

        ])
        res.status(200).json({status:"Success",data:data})
    }catch (e) {
        res.status(200).json({status:"fail",message:"Something went wrong"})
    }
}
//Relevance
exports.Relevance = async (req, res) => {
    try {
        let data = await DataModel.aggregate([
            {
                $project: {
                    _id: 0,
                    likelihood: 0,
                    intensity: 0,
                    end_year: 0,
                    sector: 0,
                    topic: 0,
                    insight: 0,
                    url: 0,
                    country: 0,
                    city: 0,
                    start_year: 0,
                    impact: 0,
                    added: 0,
                    pestle: 0,
                    source: 0,
                    title: 0,
                    published: 0
                }
            },
            {
                $group: {
                    _id: "$region",
                    relevance: { $sum: 1 } // Count documents for each region
                }
            }
        ]);
        res.status(200).json({ status: "Success", data: data });
    } catch (e) {
        res.status(200).json({ status: "fail", message: "Something went wrong" });
    }
}
//Year
exports.Year = async (req,res)=>{
    try{
        let data = await DataModel.aggregate([
            {$project:{_id:0,likelihood:0,intensity:0,relevance:0,sector:0,topic:0,insight:0,url:0,region:0,impact:0,added:0,pestle:0,source:0,title:0,published:0}}
        ])
        res.status(200).json({status:"Success",data:data})
    }catch (e) {
        res.status(200).json({status:"fail",message:"Something went wrong"})
    }
}
//Country
exports.Country = async (req,res)=>{
    try{
        let data = await DataModel.aggregate([
            {$project:{_id:0,region:0,likelihood:0,end_year:0,start_year:0,intensity:0,sector:0,topic:0,insight:0,url:0,city:0,impact:0,added:0,pestle:0,source:0,title:0,published:0}},
        ])
        res.status(200).json({status:"Success",data:data})
    }catch (e) {
        res.status(200).json({status:"fail",message:"Something went wrong"})
    }
}
//Topics
exports.Topics = async (req,res)=>{
    try{
        let data = await DataModel.aggregate([
            {$project:{_id:0,
                    region:0,
                    likelihood:0,
                    country:0,
                    end_year:0,
                    start_year:0,
                    intensity:0,
                    relevance:0,sector:0,insight:0,url:0,city:0,impact:0,added:0,pestle:0,source:0,title:0,published:0}},
            {$group:{_id:"$topic"}}
        ])
        res.status(200).json({status:"Success",data:data})
    }catch (e) {
        res.status(200).json({status:"fail",message:"Something went wrong"})
    }
}
//Region
exports.Region = async (req,res)=>{
    try{
        let data = await DataModel.aggregate([
            {$project:{_id:0,
                    likelihood:0,
                    country:0,
                    topic:0,
                    end_year:0,
                    start_year:0,
                    intensity:0,
                    sector:0,
                    insight:0,
                    url:0,
                    city:0,
                    impact:0,
                    added:0,
                    pestle:0,
                    source:0,
                    title:0,
                    published:0}},
        ])
        res.status(200).json({status:"Success",data:data})
    }catch (e) {
        res.status(200).json({status:"fail",message:"Something went wrong"})
    }
}
