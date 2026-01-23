# Car Leasing Form - ฟอร์มสมัครเช่ารถยนต์

ฟอร์มสมัครเช่ารถยนต์ภาษาไทย พร้อมระบบบันทึกข้อมูลลง PostgreSQL

## Features
- ฟอร์มภาษาไทยครบถ้วน
- บันทึกข้อมูลลง PostgreSQL database
- Responsive design
- Professional UI/UX

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

### 3. ตั้งค่า Database (Google Cloud SQL PostgreSQL)

#### สร้าง Cloud SQL instance:
1. ไปที่ Google Cloud Console
2. เปิด Cloud SQL
3. สร้าง PostgreSQL instance
4. สร้าง database ชื่อ `car_leasing_db`
5. รัน SQL script จากไฟล์ `database.sql`

#### ตั้งค่า connection:
```bash
# แก้ไขไฟล์ .env.local
DATABASE_URL=postgresql://postgres:your_password@your_host:5432/car_leasing_db
```

### 4. รันในเครื่อง
```bash
npm run dev
```

## การ Deploy แบบ Public

### Option 1: Vercel (แนะนำ)
1. Push code ไป GitHub
2. เชื่อมต่อ Vercel กับ GitHub repo
3. ตั้งค่า Environment Variables:
   - `DATABASE_URL`: PostgreSQL connection string
4. Deploy อัตโนมัติ

### Option 2: Google Cloud Run
```bash
# Build Docker image
docker build -t car-leasing-form .

# Deploy to Cloud Run
gcloud run deploy car-leasing-form --image gcr.io/PROJECT_ID/car-leasing-form --platform managed
```

### Option 3: Netlify
1. Build project: `npm run build`
2. Deploy folder `out/` to Netlify
3. ตั้งค่า Environment Variables

## Database Schema

ตารางหลัก: `car_lease_applications`
- ข้อมูลส่วนตัว (ชื่อ, เบอร์โทร, อีเมล)
- ที่อยู่
- ข้อมูลการทำงาน
- ข้อมูลรถยนต์
- ข้อมูลทางการเงิน
- บุคคลอ้างอิง

## Tech Stack
- Next.js 14
- React 18
- PostgreSQL
- Node.js
- CSS-in-JS

## การใช้งาน
1. เปิดเว็บไซต์
2. กรอกข้อมูลในฟอร์ม
3. กดส่งใบสมัคร
4. ข้อมูลจะถูกบันทึกลง database

## Support
หากมีปัญหาการใช้งาน กรุณาติดต่อผู้พัฒนา