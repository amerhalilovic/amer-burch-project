const express = require('express')
const router = express.Router();

const eventController = require("./controllers/eventsController")
const dogController = require("./controllers/dogsController")
const itemController= require("./controllers/itemController")
const storyController = require("./controllers/storyController")

router.get("/events", eventController.getEvents)
router.post("/event", eventController.createEvent)

router.get("/dogs", dogController.getDogs)
router.post("/dog", dogController.createDog)


router.get("/items", itemController.getItems)
router.post("/item", itemController.createItem)


router.get("/stories", storyController.getStories)
router.post("/story", storyController.createStory)
router.delete("/story/:id",storyController.deleteStory)
router.put("/story/:id",storyController.updateStory)

module.exports = router;