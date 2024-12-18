import { Request, Response } from 'express';
import IfterList from './ifterList.model';
import { generateRamadanSchedule } from './ifterList.utils';
import axios from 'axios';

// Function to generate Ramadan schedule
// Generate the schedule by fetching prayer times
export const generateSchedule = async (req: Request, res: Response) => {
  try {
    const { startDate, latitude, longitude } = req.body;

    if (!startDate || !latitude || !longitude) {
      return res.status(400).json({ message: 'Start date, latitude, and longitude are required' });
    }

    // Fetch prayer times using Aladhan API
    const response = await axios.get(
      `https://api.aladhan.com/v1/timings?latitude=${latitude}&longitude=${longitude}&method=2`
    );
    const timings = response.data.data.timings;

    // Create schedule for Ramadan
    const schedule = generateRamadanSchedule(new Date(startDate), timings);

    // Insert generated schedule into the database
    const createdSchedules = await IfterList.insertMany(schedule);

    res.status(201).json({ message: 'Ramadan schedule created successfully', data: createdSchedules });
  } catch (error: any) {
    res.status(500).json({ message: 'Error generating schedule', error: error.message });
  }
};

// Function to update all fields including time and other data
export const updateInfo = async (req: Request, res: Response) => {
  try {
    const { ramajan, date, day, bnDate, iftarTime, sahriTime, name } = req.body;

    // Find the document and update all fields
    const updated = await IfterList.findOneAndUpdate(
      { ramajan }, // You can still use `ramajan` to identify the record to update
      { 
        date,        // Update date
        day,         // Update day
        bnDate,      // Update Bangla date
        iftarTime,   // Update iftar time
        sahriTime,   // Update sahri time
        name         // Update name
      },
      { new: true }  // Returns the updated document
    );

    if (!updated) {
      return res.status(404).json({ message: 'Ramajan not found' });
    }

    res.status(200).json({ message: 'All details updated successfully', data: updated });
  } catch (error: any) {
    res.status(500).json({ message: 'Error updating details', error: error.message });
  }
};


// Function to get Ramadan schedule by ramajan
export const getSchedule = async (req: Request, res: Response) => {
  try {
    const { ramajan } = req.params;

    // Find the schedule for a specific 'ramajan' number
    const schedule = await IfterList.findOne({ ramajan });

    if (!schedule) {
      return res.status(404).json({ message: 'Ramajan not found' });
    }

    res.status(200).json({ message: 'Schedule fetched successfully', data: schedule });
  } catch (error: any) {
    res.status(500).json({ message: 'Error fetching schedule', error: error.message });
  }
};

// Function to get all Ramadan schedules
export const getAllSchedules = async (req: Request, res: Response) => {
  try {
    // Fetch all Ramadan schedules
    const schedules = await IfterList.find();

    if (schedules.length === 0) {
      return res.status(404).json({ message: 'No schedules found' });
    }

    res.status(200).json({ message: 'Schedules fetched successfully', data: schedules });
  } catch (error: any) {
    res.status(500).json({ message: 'Error fetching schedules', error: error.message });
  }
};


export const updateSchedule = async (req: Request, res: Response) => {
  try {
    const { ramajan, startDate, latitude, longitude } = req.body;

    // Ensure 'ramajan', 'startDate', 'latitude' and 'longitude' are provided
    if (!ramajan || !startDate || !latitude || !longitude) {
      return res.status(400).json({ message: 'Ramajan, Start date, latitude, and longitude are required' });
    }

    // Convert ramajan to a number (in case it is sent as a string)
    const ramajanNumber = Number(ramajan);

    // Check if the conversion was successful
    if (isNaN(ramajanNumber)) {
      return res.status(400).json({ message: 'Ramajan must be a valid number' });
    }

    // Fetch prayer times using Aladhan API
    const response = await axios.get(
      `https://api.aladhan.com/v1/timings?latitude=${latitude}&longitude=${longitude}&method=2`
    );
    const timings = response.data.data.timings;

    // Generate the new Ramadan schedule
    const schedule = generateRamadanSchedule(new Date(startDate), timings);

    // Find the existing schedule by the given 'ramajan' number
    const updatedSchedule = await IfterList.findOneAndUpdate(
      { ramajan: ramajanNumber },  // Find based on 'ramajan' number
      { $set: schedule[0] },       // Update the schedule data
      { new: true }                // Return the updated document
    );

    if (!updatedSchedule) {
      return res.status(404).json({ message: 'Ramajan not found' });
    }

    res.status(200).json({ message: 'Schedule updated successfully', data: updatedSchedule });
  } catch (error: any) {
    console.error('Error updating schedule:', error);  // Log error for debugging
    res.status(500).json({ message: 'Error updating schedule', error: error.message });
  }
};
