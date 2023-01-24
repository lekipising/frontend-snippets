export const processDate = (date: string | number | Date) => {
    const dateObj = new Date(date);
    // generate date in format of March 21st, 2022 from date object
    const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    const day = dateObj.getDate();
    const monthIndex = dateObj.getMonth();
    const year = dateObj.getFullYear();
    // get HH:MM
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    return `${monthNames[monthIndex]} ${day}, ${year} at ${hours < 10 ? `0${hours}` : hours
        }${minutes < 10 ? `:0${minutes}` : `:${minutes}`}`;
};