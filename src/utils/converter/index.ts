/**
 * Converts a given timestamp to a formatted date string.
 *
 * @param {string} inputTimestamp - The timestamp to be converted.
 * @return {string} The formatted date string in the format "dd.mm.yyyy".
 * @example dateConverter("2022-01-01T00:00:00.000Z") => "01.01.2022"
 */

export const dateConverter = (inputTimestamp: string): string => {
  const date: Date = new Date(inputTimestamp);

  const day: string = String(date.getUTCDate()).padStart(2, "0");
  const month: string = String(date.getUTCMonth() + 1).padStart(2, "0");
  const year: string = String(date.getUTCFullYear());

  return `${day}.${month}.${year}`;
};

/**
 * Converts the given size in bytes to a string representation in megabytes.
 *
 * @param {number} size - The size in bytes.
 * @return {string} The size in megabytes as a string with two decimal places.
 * @example sizeConverter(1048576) => "1.00"
 */
export const sizeConverter = (size: number): string => {
  return (size / (1024 * 1024)).toFixed(2);
};

/**
 * Converts a duration in seconds to a formatted string in the format "HH:MM:SS".
 *
 * @param {number} duration - The duration in seconds.
 * @return {string} The formatted duration string.
 * @example durationConverter(3600) => "01:00:00"
 */
export const durationConverter = (duration: number): string => {
  const hours: number = Math.floor(duration / 3600);
  const minutes: number = Math.floor((duration - hours * 3600) / 60);
  const seconds: number = Math.floor(duration - hours * 3600 - minutes * 60);

  let formattedDuration = "";

  if (hours > 0) {
    formattedDuration += `${hours < 10 ? "0" + hours : hours}:`;
  }

  formattedDuration += `${minutes < 10 ? "0" + minutes : minutes}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;

  return formattedDuration;
};
