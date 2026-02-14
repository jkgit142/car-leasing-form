# Car Leasing Form - ฟอร์มสมัครเช่ารถยนต์

ฟอร์มสมัครเช่ารถยนต์ภาษาไทย พร้อมระบบบันทึกข้อมูลลง Google Sheets

## Features
- ฟอร์มภาษาไทยครบถ้วน (12 ฟิลด์)
- บันทึกข้อมูลลง Google Sheets ผ่าน Google Apps Script
- PDPA consent checkbox
- Responsive design
- Professional UI/UX
- รองรับรถยนต์ 7 ยี่ห้อ 25+ รุ่น

## การติดตั้งและใช้งาน

### 1. Clone repository
```bash
git clone https://github.com/jkgit142/car-leasing-form.git
cd car-leasing-form
```

### 2. ติดตั้ง dependencies
```bash
npm install
```

### 3. ตั้งค่า Google Apps Script

1. ไปที่ [Google Apps Script](https://script.google.com/)
2. สร้าง New Project
3. Copy โค้ดจาก `google-apps-script.js` ไปวาง
4. แก้ `spreadsheetId` ให้ตรงกับ Google Sheets ของคุณ
5. Deploy → New deployment → Web app
6. Execute as: Me
7. Who has access: Anyone
8. Copy Web app URL ไปใส่ใน `pages/index.js` (บรรทัด 86)

### 4. รันในเครื่อง
```bash
npm run dev
```

## การ Deploy

### Build Static Files
```bash
npm run build
```

ไฟล์ทั้งหมดจะอยู่ใน folder `out/`

### Deploy to Server
1. Upload ทั้ง folder `out/` ไปที่ server
2. ตั้งค่า path ให้ตรงกับ `basePath` ใน `next.config.js` (default: `/easyev`)
3. Upload logo files ไปที่ `/easyev/images/`

## Database Schema

ตารางหลัก: `car_lease_applications`
- ลำดับ (auto-generated)
- วันที่ส่ง (auto-generated)
- เวลาที่ส่ง (auto-generated)
- ชื่อสกุล
- ลักษณะการจ้าง (ข้าราชการ, พนักงานข้าราชการ, พนักงานประกันสังคม, ลูกจ้างประจำ)
- ตำแหน่งงาน
- สังกัด
- จังหวัด
- เบอร์ติดต่อ (optional)
- อีเมล (optional)
- รุ่นรถ
- ระยะเวลา

## รถยนต์ที่รองรับ

- **AION** (3 รุ่น): V Luxury, UT Premium, UT Standard
- **BYD** (4 รุ่น): SEALION7 Premium, ATT03 Premium, DOLPHIN Extended, DOLPHIN Standard
- **DEEPAL** (2 รุ่น): S05 Max, S05 Plus
- **GEELY** (4 รุ่น): EX5 Max, V23 2WD Plus, V23 2WD Play, EX2 Pro, EX2 Max
- **MG** (4 รุ่น): MG S5D, MG 4D Long range, MIG3 Hybrid, MG 4D
- **RIDDARA** (1 รุ่น): RD6 63.9 kW 2WD
- **DECO** (6 รุ่น): Superace, S45, Susu, Hannah, G-5 lite, Tanzo

## Tech Stack
- Next.js 14 (Static Export)
- React 18
- Google Apps Script
- Google Sheets
- CSS-in-JS

## การใช้งาน
1. เปิดเว็บไซต์
2. กรอกข้อมูลในฟอร์ม
3. กดส่งใบสมัคร
4. ข้อมูลจะถูกบันทึกลง database

## Support
หากมีปัญหาการใช้งาน กรุณาติดต่อผู้พัฒนา