// lib/google-sheets.ts
interface ContactData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service: string;
  message: string;
  ipAddress: string;
}

export async function addToGoogleSheets(data: ContactData): Promise<boolean> {
  try {
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_APPS_SCRIPT_URL;
    const SECRET_KEY = process.env.GOOGLE_SHEETS_SECRET_KEY;

    if (!GOOGLE_SCRIPT_URL || !SECRET_KEY) {
      console.error('Google Sheets configuration missing');
      return false;
    }

    const payload = {
      secretKey: SECRET_KEY,
      name: data.name,
      email: data.email,
      company: data.company || '',
      phone: data.phone || '',
      service: data.service,
      message: data.message,
      ipAddress: data.ipAddress,
    };

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      redirect: 'follow',
    });

    const result = await response.json();

    if (!result.success) {
      console.error('Google Sheets error:', result.error);
      return false;
    }

    console.log('Added to Google Sheets, row:', result.row);
    return true;
  } catch (error) {
    console.error('Failed to add to Google Sheets:', error);
    return false;
  }
}