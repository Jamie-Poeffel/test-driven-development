export function formatDuration(seconds: number): string {
  let hours = 0;
  let minutes = 0;
  let secs = 0;

  if (seconds < 0) {
    throw new Error("No Negative time possible");
  }

  if (seconds === 0) {
    return "0s";
  }

  if (seconds >= 3600) {
    hours = Math.floor(seconds / 3600);
  }
  if (seconds - (hours * 3600) >= 60) {
    minutes = Math.floor((seconds - (hours * 3600)) / 60);
  }
  if (seconds - ((minutes * 60) - (hours * 3600)) > 0) {
    secs = (seconds - (minutes * 60)) - (hours * 3600);
  }

  let result = "";
  if (hours > 0) {
    result += `${String(hours)}h`;
  }
  if (minutes > 0) {
    result += `${String(minutes)}m`;
  }
  if (secs > 0) {
    result += `${String(secs)}s`;
  }

  return result;
}
