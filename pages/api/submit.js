import { config } from '../../config/app.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const formData = req.body;
    
    // สร้าง array ของข้อมูลตามลำดับ column ใน Google Sheets
    const rowData = [
      '', // เลขที่ (running no) - จะถูกสร้างใน Google Apps Script
      new Date().toLocaleString('th-TH'), // วันที่ส่ง
      formData.fullName,
      formData.phone,
      formData.department,
      formData.province,
      formData.carModel,
      formData.duration
    ];

    // ส่งข้อมูลไป Google Sheets ผ่าน Google Apps Script Web App
    const response = await fetch(`https://script.google.com/macros/s/AKfycbzwmGDtQgd-kNVt_vgUzr2BTEV-kbl5-6ep9Jk5qgRhj1hG_EP80mkC8UnGOh4eJZ08/exec`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        spreadsheetId: config.googleSheets.spreadsheetId,
        sheetName: config.googleSheets.sheetName,
        data: rowData
      })
    });

    if (response.ok) {
      res.status(200).json({ 
        success: true, 
        message: config.form.successMessage 
      });
    } else {
      throw new Error('Failed to save to Google Sheets');
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      success: false, 
      message: config.form.errorMessage 
    });
  }
}