// function to get elapsed time from timestamp
// format: 0s - 59s, 1m - 59m, 1h - 23h, 1d - 6d, 1w - 3w, 1m - 11m, 1y - 9y, 10y+
export function formatDuration(timestamp: string): string {
    const currentTime = new Date();
    const elapsedTime = currentTime.getTime() - new Date(timestamp).getTime();
    const seconds = Math.floor(elapsedTime / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(weeks / 4);
    const years = Math.floor(months / 12);

    if (seconds < 60) {
        return `${seconds}s`;
    } else if (minutes < 60) {
        return `${minutes}m`;
    } else if (hours < 24) {
        return `${hours}h`;
    } else if (days < 7) {
        return `${days}d`;
    } else if (weeks < 4) {
        return `${weeks}w`;
    } else if (months < 12) {
        return `${months}m`;
    } else if (years < 10) {
        return `${years}y`;
    } else {
        return "10y+";
    }
}