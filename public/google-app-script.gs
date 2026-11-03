/**
 * Google Apps Script — Sloan Tyche Contact Form → Mailbox
 *
 * SETUP (5 minutes):
 * 1. Go to https://script.google.com → New Project
 * 2. Paste this entire file, replace RECIPIENT below with your inbox
 * 3. (Optional) Create a Google Sheet to log enquiries and put its ID in SHEET_ID
 * 4. Deploy → New deployment → Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy the Web App URL ending in /exec
 * 6. Set it as NEXT_PUBLIC_GOOGLE_SCRIPT_URL in your environment — done.
 */

var RECIPIENT = "info@sloantyche.com";
var SHEET_ID = ""; // optional: paste a Google Sheet ID to log every enquiry

function doPost(e) {
  var d = e.parameter;

  MailApp.sendEmail(
    RECIPIENT,
    "New SAP Enquiry — " + (d.name || "Website Visitor"),
    "Name: " + (d.name || "-") +
    "\nCompany: " + (d.company || "-") +
    "\nEmail: " + (d.email || "-") +
    "\nPhone: " + (d.phone || "-") +
    "\nSAP Module: " + (d.sap_module || "-") +
    "\n\nProject Details:\n" + (d.project_details || "-")
  );

  if (SHEET_ID) {
    SpreadsheetApp.openById(SHEET_ID).getActiveSheet().appendRow([
      new Date(), d.name, d.company, d.email, d.phone, d.sap_module, d.project_details
    ]);
  }

  return ContentService
    .createTextOutput(JSON.stringify({ result: "success" }))
    .setMimeType(ContentService.MimeType.JSON);
}
