const timeStampConvert = (time) => {
    // Create a new Date object from the timestamp
    const date = new Date(time);
    // Extract hours, minutes
    let hours = date.getHours();
    const minutes = date.getMinutes();

    // Determine AM or PM suffix
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert hours from 24-hour to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    // Add leading zeros to minutes and seconds if needed
    const minutesStr = minutes < 10 ? '0' + minutes : minutes;

    // Format the time string
    const timeStr = `${hours}:${minutesStr} ${ampm}`;

    return timeStr;
}
export default timeStampConvert