import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const {
      firstName, lastName, dateOfBirth, ssn, phone, email,
      address, city, state, zipCode,
      employer, jobTitle, employmentLength, annualIncome,
      vehicleMake, vehicleModel, vehicleYear, vehiclePrice, downPayment, leaseTerm,
      monthlyRent, otherIncome, monthlyDebts,
      reference1Name, reference1Phone, reference2Name, reference2Phone
    } = req.body;

    const query = `
      INSERT INTO car_lease_applications (
        first_name, last_name, date_of_birth, ssn, phone, email,
        address, city, state, zip_code,
        employer, job_title, employment_length, annual_income,
        vehicle_make, vehicle_model, vehicle_year, vehicle_price, down_payment, lease_term,
        monthly_rent, other_income, monthly_debts,
        reference1_name, reference1_phone, reference2_name, reference2_phone,
        created_at
      ) VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, NOW()
      ) RETURNING id
    `;

    const values = [
      firstName, lastName, dateOfBirth, ssn, phone, email,
      address, city, state, zipCode,
      employer, jobTitle, employmentLength, annualIncome,
      vehicleMake, vehicleModel, vehicleYear, vehiclePrice, downPayment, leaseTerm,
      monthlyRent, otherIncome, monthlyDebts,
      reference1Name, reference1Phone, reference2Name, reference2Phone
    ];

    const result = await pool.query(query, values);
    
    res.status(200).json({ 
      success: true, 
      message: 'บันทึกข้อมูลเรียบร้อยแล้ว',
      id: result.rows[0].id 
    });
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'เกิดข้อผิดพลาดในการบันทึกข้อมูล' 
    });
  }
}