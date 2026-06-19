# Connecting Enquiry Forms to Google Sheets (Pure Frontend Approach)

Since this is a client-side React application (without a backend server), the most secure, reliable, and standard method to write form submissions directly to Google Sheets is using **Google Apps Script**.

By deploying a simple Apps Script as a web app, you will get a unique Web App URL. The React application can then send `POST` requests directly to this URL.

---

## Step-by-Step Setup Guide

### 1. Create a Google Sheet
1. Open [Google Sheets](https://sheets.google.com) and create a new blank spreadsheet.
2. Rename the spreadsheet to something recognizable, e.g., `PYRAMID FIBRE PLASTICS - Enquiries`.
3. Set the first row (headers) with the following column names:
   - **A1:** `Timestamp`
   - **B1:** `Name`
   - **C1:** `Company`
   - **D1:** `Mobile`
   - **E1:** `Email`
   - **F1:** `Product`
   - **G1:** `Quantity`
   - **H1:** `City`
   - **I1:** `State`
   - **J1:** `Message`

### 2. Open the Apps Script Editor
1. In your Google Sheet menu, go to **Extensions > Apps Script**.
2. Delete any default code in the editor (`Code.gs`) and paste the Google Apps Script code below.

### 3. Google Apps Script Code
```javascript
function doPost(e) {
  try {
    // Open the spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse incoming JSON post data
    var data = JSON.parse(e.postData.contents);
    
    // Append a new row with the form data
    sheet.appendRow([
      new Date().toLocaleString(), // Format timestamp locally
      data.name,
      data.company,
      data.mobile,
      data.email,
      data.product,
      data.quantity,
      data.city,
      data.state,
      data.message
    ]);
    
    // Return a success JSON response with CORS headers allowed
    return ContentService.createTextOutput(JSON.stringify({ "status": "success", "message": "Enquiry stored successfully." }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeader("Access-Control-Allow-Origin", "*");
      
  } catch (error) {
    // Return an error JSON response
    return ContentService.createTextOutput(JSON.stringify({ "status": "error", "message": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeader("Access-Control-Allow-Origin", "*");
  }
}

// Enable preflight request checks
function doOptions(e) {
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeader("Access-Control-Allow-Origin", "*")
    .setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
    .setHeader("Access-Control-Allow-Headers", "Content-Type");
}
```

### 4. Deploy the Script as a Web App
1. In the Apps Script editor, click on the **Save** icon (disk).
2. Click the **Deploy** button at the top-right and select **New deployment**.
3. Click the gear icon next to "Select type" and select **Web app**.
4. Configure the settings:
   - **Description:** `PYRAMID Enquiry Form API`
   - **Execute as:** `Me (your-email@gmail.com)`
   - **Who has access:** `Anyone` (This is crucial, as the frontend needs permission to post data anonymously).
5. Click **Deploy**.
6. Google might ask you to **Authorize Access**. Click "Authorize access", choose your Google account, click "Advanced" (bottom-left), then click "Go to Untitled project (unsafe)" or similar, and click "Allow".
7. Copy the **Web App URL** generated (it will look like `https://script.google.com/macros/s/.../exec`).

### 5. Link it to the React Application
1. Open the file `src/pages/Enquiry.jsx` or your config.
2. Put this URL in the configuration or in the `handleSubmit` endpoint.
3. For ease, you can create a `.env` file in the root directory:
   ```env
   VITE_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/YOUR_DEPLOYED_ID_HERE/exec
   ```
4. Or, we will make a centralized environment loader in the code that checks for `import.meta.env.VITE_GOOGLE_SHEETS_URL`. If the URL is empty or undefined, the application will fallback to saving data locally in `localStorage`, which simulates a successful submission.

---

## Local Development Fallback

If `VITE_GOOGLE_SHEETS_URL` is not provided, the form will:
- Print the enquiry payload to the browser Console.
- Save the enquiry into the browser's `localStorage` (key: `PYRAMID_enquiries`).
- Show a premium success dialogue letting the user know the simulation was successful. This enables testing out of the box!
