// Google Apps Script สำหรับเขียนข้อมูลลง Google Sheets
// คัดลอกโค้ดนี้ไปใส่ใน Google Apps Script

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
      sheet.getRange(1, 1, 1, 8).setValues([['ลำดับ', 'วันที่', 'ชื่อ-สกุล', 'เบอร์โทร', 'สังกัด', 'จังหวัด', 'รุ่นรถ', 'ระยะเวลา']]);
      console.log('Header added');
    }
    
    // หา running number
    const lastRow = sheet.getLastRow();
    const runningNo = lastRow > 0 ? lastRow : 1;
    console.log('Running number:', runningNo, 'Last row:', lastRow);
    
    // เพิ่มข้อมูลใหม่
    const rowData = [
      runningNo,
      params.timestamp || new Date().toLocaleString('th-TH'),
      params.fullName || '',
      params.phone || '',
      params.department || '',
      params.province || '',
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