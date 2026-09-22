export const NOTIFY_EVENT = "atlas:notify";
export const ALFRED_EVENT = "atlas:alfred";

export function notify(message: string) {
  window.dispatchEvent(new CustomEvent<string>(NOTIFY_EVENT, { detail: message }));
}

export function openAlfred() {
  window.dispatchEvent(new Event(ALFRED_EVENT));
}
