import Calendar from 'date-bengali-revised';
import { format, addDays } from 'date-fns';

export const generateRamadanSchedule = (startDate: Date, timings: any) => {
  const schedule = [];

  // Loop through the month (Assuming 30 days for simplicity)
  for (let i = 0; i < 30; i++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);

    // Convert Gregorian Date to Bengali Date
    const cal = new Calendar();
    cal.fromDate(date); // Get Bengali date from JavaScript Date object
    const bnDate = cal.format('D MMMM, Y'); // Format as Bengali date (e.g., ১ পৌষ ১৪৩১)
    const bnDay = cal.format('dddd'); // Get Bengali day name (e.g., রবিবার)

    // Creating a daily schedule object
    schedule.push({
      ramajan: i + 1,
      date: date.toISOString(),
      day: bnDay, // Bengali day of the week
      bnDate: bnDate, // Bengali formatted date (e.g., ১ পৌষ ১৪৩১)
      name: [], // You can fill this as needed
      iftarTime: timings.Maghrib,
      sahriTime: timings.Fajr,
    });
  }

  return schedule;
};
