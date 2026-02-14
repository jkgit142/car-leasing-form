# Changelog

## [v1.1.0] - 2024-02-09

### Added
- ฟิลด์ใหม่: ลักษณะการจ้าง (dropdown: ข้าราชการ, พนักงานข้าราชการ, พนักงานประกันสังคม, ลูกจ้างประจำ)
- ฟิลด์ใหม่: ตำแหน่งงาน (text input)
- PDPA consent checkbox (required)
- รถยนต์ DECO 6 รุ่น: Superace, S45, Susu, Hannah, G-5 lite, Tanzo

### Changed
- เปลี่ยนชื่อฟิลด์: "ชื่อ-สกุล" → "ชื่อสกุล"
- เปลี่ยนชื่อฟิลด์: "เบอร์โทร" → "เบอร์ติดต่อ"
- เบอร์ติดต่อและอีเมลเป็น optional (ไม่บังคับกรอก)
- เรียงลำดับฟิลด์ใหม่: ชื่อสกุล → ลักษณะการจ้าง → ตำแหน่งงาน → สังกัด → จังหวัด → เบอร์ติดต่อ → อีเมล → รุ่นรถ → ระยะเวลา
- อัพเดท Google Sheets header columns (12 columns)

### Technical
- อัพเดท Google Apps Script รองรับฟิลด์ใหม่
- เพิ่ม state management สำหรับ PDPA consent
- ปรับปรุง form validation

## [v1.0.0-POC1] - 2024-01-29

### Added
- Thai language car leasing form
- Car model selection with brand grouping
- Form validation with custom messages
- Google Apps Script backend integration
- Google Sheets database storage
- Success/error messaging system
- Responsive design for mobile/desktop
- Running number system
- Separate date/time columns

### Technical Stack
- Frontend: React + Next.js
- Backend: Google Apps Script
- Database: Google Sheets
- Hosting: assajan.net (manual FTP)

### Known Issues
- Manual deployment process
- No user authentication
- Basic error handling
