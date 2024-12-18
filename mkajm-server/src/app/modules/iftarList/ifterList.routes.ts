import express from "express";
import {
  generateSchedule,
  getAllSchedules,
  getSchedule,
  updateInfo,
  updateSchedule,
} from "./ifterList.controller";

const router = express.Router();

// Route to generate the full Ramadan schedule
router.post("/generate", generateSchedule);

// Route to update iftar and sahri times
router.patch("/update-info", updateInfo);

// Route to get the schedule for a specific Ramajan
router.get("/:ramajan", getSchedule);

// Route to get all Ramadan schedules
router.get("/", getAllSchedules);

// Route to update an existing Ramadan schedule
router.patch("/update", updateSchedule); // New route for updating schedule
export default router;
