-- สร้างตารางสำหรับเก็บข้อมูลใบสมัครเช่ารถยนต์
CREATE TABLE car_lease_applications (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  date_of_birth DATE NOT NULL,
  ssn VARCHAR(20) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  email VARCHAR(255) NOT NULL,
  
  address TEXT NOT NULL,
  city VARCHAR(100) NOT NULL,
  state VARCHAR(100) NOT NULL,
  zip_code VARCHAR(10) NOT NULL,
  
  employer VARCHAR(255) NOT NULL,
  job_title VARCHAR(255) NOT NULL,
  employment_length VARCHAR(50) NOT NULL,
  annual_income DECIMAL(12,2) NOT NULL,
  
  vehicle_make VARCHAR(100) NOT NULL,
  vehicle_model VARCHAR(100) NOT NULL,
  vehicle_year INTEGER NOT NULL,
  vehicle_price DECIMAL(12,2) NOT NULL,
  down_payment DECIMAL(12,2) NOT NULL,
  lease_term INTEGER NOT NULL,
  
  monthly_rent DECIMAL(12,2),
  other_income DECIMAL(12,2),
  monthly_debts DECIMAL(12,2),
  
  reference1_name VARCHAR(255),
  reference1_phone VARCHAR(20),
  reference2_name VARCHAR(255),
  reference2_phone VARCHAR(20),
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- สร้าง index สำหรับการค้นหา
CREATE INDEX idx_car_lease_email ON car_lease_applications(email);
CREATE INDEX idx_car_lease_created_at ON car_lease_applications(created_at);