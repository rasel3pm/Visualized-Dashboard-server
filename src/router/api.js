const router = require("express").Router();
const dataController= require("../controller/dataController")
router.get("/Intensity",dataController.Intensity)
router.get("/Likelihood",dataController.Likelihood)
router.get("/Relevance",dataController.Relevance)
router.get("/Year",dataController.Year)
router.get("/Country",dataController.Country)
router.get("/Topics",dataController.Topics)
router.get("/Region",dataController.Region)

module.exports = router;
