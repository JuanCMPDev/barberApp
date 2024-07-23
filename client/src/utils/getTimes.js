import { add, isSameDay, setHours, setMinutes, startOfDay } from "date-fns";

export const getTimes = (date) => {
  if (!date.justDate) return [];

  const { justDate } = date;
  const now = new Date();
  const beginningDate = setHours(setMinutes(startOfDay(justDate), 0), 9);
  const end = setHours(setMinutes(startOfDay(justDate), 30), 18);

  let firstAvailableTime = beginningDate;

  if (isSameDay(justDate, now)) {
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    firstAvailableTime = add(startOfDay(justDate), {
      hours: currentHour,
      minutes: currentMinute < 30 ? 30 : Math.ceil(currentMinute / 30) * 30,
    });
    if (firstAvailableTime < beginningDate) {
      firstAvailableTime = beginningDate;
    }
  }

  const interval = 30;
  const times = [];

  for (let i = firstAvailableTime; i <= end; i = add(i, { minutes: interval })) {
    times.push(i);
  }

  return times;
};
