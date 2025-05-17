import { format, parseISO } from 'date-fns';

export function formatDateString(dateString) {
  const date = parseISO(dateString);
  return format(date, "MMMM do");
};
