import React from "react";

// Helper to convert bullet lines into HTML unordered lists
function bulletsToHtml(text) {
  const lines = text.split("\n");
  let html = "";
  let inList = false;
  for (let line of lines) {
    // Matches lines starting with -, *, or • followed by a space
    if (/^\s*([-*•])\s+/.test(line)) {
      if (!inList) {
        html += "<ul>";
        inList = true;
      }
      // Remove bullet marker and wrap in <li>
      html += `<li>${line.replace(/^\s*([-*•])\s+/, "")}</li>`;
    } else {
      if (inList) {
        html += "</ul>";
        inList = false;
      }
      // Keep empty lines as <br> or normal text
      html += line.trim().length === 0 ? "<br/>" : `${line}<br/>`;
    }
  }
  if (inList) html += "</ul>";
  return html;
}

function parseMessage(text) {
  // Escape special HTML characters
  let safe = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Bold: *bold*
  safe = safe.replace(/\*(.*?)\*/g, '<b class="text-lg">$1</b>');

  // Italic: _italic_
  safe = safe.replace(/_(.*?)_/g, "<i>$1</i>");
  // Strikethrough: ~strike~
  safe = safe.replace(/~(.*?)~/g, "<s>$1</s>");

  // Now handle bullets and newlines
  safe = bulletsToHtml(safe);

  return safe;
}

export default function FormattedText({ text }) {
  return (
    <div
      className="formatted-content"
      style={{ wordBreak: "break-word" }}
      dangerouslySetInnerHTML={{ __html: parseMessage(text) }}
    />
  );
}