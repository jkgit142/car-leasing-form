import { config } from '../../config/app.js';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // ดึงข้อมูลจาก Google Sheets ผ่าน Google Apps Script
    const response = await fetch(`https://script.google.com/macros/s/AKfycbzwmGDtQgd-kNVt_vgUzr2BTEV-kbl5-6ep9Jk5qgRhj1hG_EP80mkC8UnGOh4eJZ08/exec?action=getProducts&spreadsheetId=${config.googleSheets.spreadsheetId}&sheetName=products`);
    
    if (response.ok) {
      const data = await response.json();
      res.status(200).json(data);
    } else {
      throw new Error('Failed to fetch products');
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'เกิดข้อผิดพลาดในการดึงข้อมูลสินค้า' 
    });
  }
}