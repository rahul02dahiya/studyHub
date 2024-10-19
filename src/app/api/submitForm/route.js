// src/app/api/submitForm/route.js

import { google } from "googleapis";
import path from "path";

export async function POST(req) {
  try {
    // Parse the request body
    const body = await req.json();
    console.log(body)
    const { name, phone, parentsPhone, address, cart, total } = body;

    // Load service account credentials
    const keyFilePath = path.join(process.cwd(), '/credentials/study-hub-438918-b47eb0fe9263.json');
    const auth = new google.auth.GoogleAuth({
      keyFile: keyFilePath,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    // Create Google Sheets client
    const sheets = google.sheets({ version: "v4", auth });

    // Specify the Google Sheet ID and range
    const spreadsheetId = "13Z3XThWNWu3SXGp82AstJzltqfeIzNoBzbobs31861U";
    const range = "Sheet1!A2:F";

    // Append form data to the sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[name, phone, parentsPhone, address, cart, total]],
      },
    });

    // Return success response
    return new Response(JSON.stringify({ message: "Form data saved successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Error saving form data" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
