import { config } from '../../config/app.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { data } = req.body;
    
    const response = await fetch(`https://script.google.com/macros/s/AKfycbzwmGDtQgd-kNVt_vgUzr2BTEV-kbl5-6ep9Jk5qgRhj1hG_EP80mkC8UnGOh4eJZ08/exec`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        spreadsheetId: config.googleSheets.spreadsheetId,
        sheetName: 'registration',
        data: data
      })
    });

    const result = await response.json();
    
    if (response.ok && result.success) {
      res.status(200).json(result);
    } else {
      res.status(500).json({ success: false, message: result.message || 'เกิดข้อผิดพลาด' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'เกิดข้อผิดพลาดในการบันทึกข้อมูล' 
    });
  }
}