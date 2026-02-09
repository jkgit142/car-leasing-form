// Google Apps Script สำหรับเขียนข้อมูลลง Google Sheets
// คัดลอกโค้ดนี้ไปใส่ใน Google Apps Script

// Function สำหรับ clear และ setup sheet ใหม่
function clearAndSetupSheet() {
  try {
    console.log('Starting clearAndSetupSheet function');
    
    const spreadsheetId = '1BiNsKA5IxFKqzvd3QxFI_aUsX-uDGf-xq7LxR62UPhA';
    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    let sheet = spreadsheet.getSheetByName('registration');
    
    // ถ้าไม่มี sheet ให้สร้างใหม่
    if (!sheet) {
      console.log('Creating new sheet');
      sheet = spreadsheet.insertSheet('registration');
    } else {
      console.log('Sheet exists, clearing content');
      // Clear ข้อมูลทั้งหมด
      sheet.clear();
    }
    
    // เขียน header ใหม่
    const headers = ['ลำดับ', 'วันที่ส่ง', 'เวลาที่ส่ง', 'ชื่อสกุล', 'ลักษณะการจ้าง', 'ตำแหน่งงาน', 'สังกัด', 'จังหวัด', 'เบอร์ติดต่อ', 'อีเมล', 'รุ่นรถ', 'ระยะเวลา'];
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    
    // จัดรูปแบบ header
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setBackground('#4CAF50');
    headerRange.setFontColor('white');
    headerRange.setFontWeight('bold');
    
    console.log('Sheet setup completed successfully');
    return 'SUCCESS: Sheet cleared and headers added';
    
  } catch (error) {
    console.error('Error in clearAndSetupSheet:', error);
    return 'ERROR: ' + error.toString();
  }
}

function doGet(e) {
  try {
    console.log('Starting doGet function');
    
    // รับ parameters จาก URL
    const params = e.parameter;
    console.log('Parameters received:', params);
    
    // เปิด Google Sheets
    const spreadsheetId = '1BiNsKA5IxFKqzvd3QxFI_aUsX-uDGf-xq7LxR62UPhA';
    console.log('Opening spreadsheet:', spreadsheetId);
    
    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    console.log('Spreadsheet opened successfully');
    
    let sheet = spreadsheet.getSheetByName('registration');
    console.log('Sheet found:', sheet ? 'Yes' : 'No');
    
    // ถ้าไม่มี sheet ให้สร้างใหม่
    if (!sheet) {
      console.log('Creating new sheet');
      sheet = spreadsheet.insertSheet('registration');
      // เพิ่ม header
      const headers = ['ลำดับ', 'วันที่ส่ง', 'เวลาที่ส่ง', 'ชื่อสกุล', 'ลักษณะการจ้าง', 'ตำแหน่งงาน', 'สังกัด', 'จังหวัด', 'เบอร์ติดต่อ', 'อีเมล', 'รุ่นรถ', 'ระยะเวลา'];
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      console.log('Header added');
    }
    
    // หา running number
    const lastRow = sheet.getLastRow();
    const runningNo = lastRow > 0 ? lastRow : 1;
    console.log('Running number:', runningNo, 'Last row:', lastRow);
    
    // แยกวันที่และเวลา
    const now = new Date();
    const dateStr = now.toLocaleDateString('th-TH');
    const timeStr = now.toLocaleTimeString('th-TH');
    
    console.log('Date:', dateStr, 'Time:', timeStr);
    console.log('Parameters details:');
    console.log('- fullName:', params.fullName);
    console.log('- employmentType:', params.employmentType);
    console.log('- position:', params.position);
    console.log('- department:', params.department);
    console.log('- province:', params.province);
    console.log('- phone:', params.phone);
    console.log('- email:', params.email);
    console.log('- selectedProduct:', params.selectedProduct);
    console.log('- duration:', params.duration);
    
    // เพิ่มข้อมูลใหม่
    const rowData = [
      runningNo,
      dateStr,
      timeStr,
      params.fullName || '',
      params.employmentType || '',
      params.position || '',
      params.department || '',
      params.province || '',
      params.phone || '',
      params.email || '',
      params.selectedProduct || '',
      (params.duration ? params.duration + ' ปี' : '')
    ];
    console.log('Row data to insert:', rowData);
    
    sheet.appendRow(rowData);
    console.log('Row added successfully');
    
    return ContentService.createTextOutput('SUCCESS');
    
  } catch (error) {
    console.error('Error occurred:', error);
    console.error('Error stack:', error.stack);
    return ContentService.createTextOutput('ERROR: ' + error.toString() + ' | Stack: ' + error.stack);
  }
}