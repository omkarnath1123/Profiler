// "https://www.linkedin.com/in/someone/" -> "linkedin.com/in/someone"
export const prettyUrl = (href) => href.replace(/^https:\/\/(www\.)?/, "").replace(/\/$/, "");
