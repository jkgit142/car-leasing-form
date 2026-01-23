import { useState } from 'react';

export default function CarLeasingForm() {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    ssn: '',
    phone: '',
    email: '',
    
    // Address
    address: '',
    city: '',
    state: '',
    zipCode: '',
    
    // Employment
    employer: '',
    jobTitle: '',
    employmentLength: '',
    annualIncome: '',
    
    // Vehicle Information
    vehicleMake: '',
    vehicleModel: '',
    vehicleYear: '',
    vehiclePrice: '',
    downPayment: '',
    leaseTerm: '',
    
    // Financial
    monthlyRent: '',
    otherIncome: '',
    monthlyDebts: '',
    
    // References
    reference1Name: '',
    reference1Phone: '',
    reference2Name: '',
    reference2Phone: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('ส่งใบสมัครเรียบร้อยแล้ว!');
    // รีเซ็ตฟอร์ม
    setFormData({
      firstName: '', lastName: '', dateOfBirth: '', ssn: '', phone: '', email: '',
      address: '', city: '', state: '', zipCode: '',
      employer: '', jobTitle: '', employmentLength: '', annualIncome: '',
      vehicleMake: '', vehicleModel: '', vehicleYear: '', vehiclePrice: '', downPayment: '', leaseTerm: '',
      monthlyRent: '', otherIncome: '', monthlyDebts: '',
      reference1Name: '', reference1Phone: '', reference2Name: '', reference2Phone: ''
    });
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f8fffe 0%, #e8f7f5 100%)', fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px', background: 'white', padding: '30px', borderRadius: '15px', boxShadow: '0 8px 32px rgba(44, 163, 151, 0.1)' }}>
          <img src="/logo.png" alt="Company Logo" style={{ height: '60px', marginBottom: '20px' }} onError={(e) => { e.target.style.display = 'none' }} />
          <h1 style={{ color: '#007799', fontSize: '32px', fontWeight: '700', margin: '0', letterSpacing: '-0.5px' }}>ใบสมัครเช่ารถยนต์</h1>
          <p style={{ color: '#666', fontSize: '16px', margin: '10px 0 0 0' }}>กรอกใบสมัครให้เสร็จภายในไม่กี่นาที</p>
        </div>
        
        <form onSubmit={handleSubmit}>
          {/* Personal Information */}
          <section style={sectionStyle}>
            <h2 style={sectionHeaderStyle}>ข้อมูลส่วนตัว</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
              <input name="firstName" placeholder="ชื่อ *" value={formData.firstName} onChange={handleChange} required style={inputStyle} />
              <input name="lastName" placeholder="นามสกุล *" value={formData.lastName} onChange={handleChange} required style={inputStyle} />
              <input name="dateOfBirth" type="date" placeholder="วันเกิด *" value={formData.dateOfBirth} onChange={handleChange} required style={inputStyle} />
              <input name="ssn" placeholder="เลขบัตรประชาชน *" value={formData.ssn} onChange={handleChange} required style={inputStyle} />
              <input name="phone" type="tel" placeholder="เบอร์โทรศัพท์ *" value={formData.phone} onChange={handleChange} required style={inputStyle} />
              <input name="email" type="email" placeholder="อีเมล *" value={formData.email} onChange={handleChange} required style={inputStyle} />
            </div>
          </section>

          {/* Address */}
          <section style={sectionStyle}>
            <h2 style={sectionHeaderStyle}>ที่อยู่</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '20px', marginTop: '20px' }}>
              <input name="address" placeholder="ที่อยู่ *" value={formData.address} onChange={handleChange} required style={inputStyle} />
              <input name="city" placeholder="เมือง *" value={formData.city} onChange={handleChange} required style={inputStyle} />
              <input name="state" placeholder="จังหวัด *" value={formData.state} onChange={handleChange} required style={inputStyle} />
              <input name="zipCode" placeholder="รหัสไปรษณีย์ *" value={formData.zipCode} onChange={handleChange} required style={inputStyle} />
            </div>
          </section>

          {/* Employment */}
          <section style={sectionStyle}>
            <h2 style={sectionHeaderStyle}>ข้อมูลการทำงาน</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
              <input name="employer" placeholder="ชื่อบริษัท *" value={formData.employer} onChange={handleChange} required style={inputStyle} />
              <input name="jobTitle" placeholder="ตำแหน่งงาน *" value={formData.jobTitle} onChange={handleChange} required style={inputStyle} />
              <select name="employmentLength" value={formData.employmentLength} onChange={handleChange} required style={inputStyle}>
                <option value="">อายุงาน *</option>
                <option value="less-than-1">น้อยกว่า 1 ปี</option>
                <option value="1-2">1-2 ปี</option>
                <option value="2-5">2-5 ปี</option>
                <option value="5-plus">มากกว่า 5 ปี</option>
              </select>
              <input name="annualIncome" type="number" placeholder="รายได้ต่อปี *" value={formData.annualIncome} onChange={handleChange} required style={inputStyle} />
            </div>
          </section>

          {/* Vehicle Information */}
          <section style={sectionStyle}>
            <h2 style={sectionHeaderStyle}>ข้อมูลรถยนต์</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginTop: '20px' }}>
              <input name="vehicleMake" placeholder="ยี่ห้อรถ *" value={formData.vehicleMake} onChange={handleChange} required style={inputStyle} />
              <input name="vehicleModel" placeholder="รุ่นรถ *" value={formData.vehicleModel} onChange={handleChange} required style={inputStyle} />
              <input name="vehicleYear" type="number" placeholder="ปี *" value={formData.vehicleYear} onChange={handleChange} required style={inputStyle} />
              <input name="vehiclePrice" type="number" placeholder="ราคารถ *" value={formData.vehiclePrice} onChange={handleChange} required style={inputStyle} />
              <input name="downPayment" type="number" placeholder="เงินดาวน์ *" value={formData.downPayment} onChange={handleChange} required style={inputStyle} />
              <select name="leaseTerm" value={formData.leaseTerm} onChange={handleChange} required style={inputStyle}>
                <option value="">ระยะเวลาเช่า *</option>
                <option value="24">24 เดือน</option>
                <option value="36">36 เดือน</option>
                <option value="48">48 เดือน</option>
              </select>
            </div>
          </section>

          {/* Financial Information */}
          <section style={sectionStyle}>
            <h2 style={sectionHeaderStyle}>ข้อมูลทางการเงิน</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginTop: '20px' }}>
              <input name="monthlyRent" type="number" placeholder="ค่าเช่า/ผ่อนบ้านต่อเดือน" value={formData.monthlyRent} onChange={handleChange} style={inputStyle} />
              <input name="otherIncome" type="number" placeholder="รายได้อื่นต่อเดือน" value={formData.otherIncome} onChange={handleChange} style={inputStyle} />
              <input name="monthlyDebts" type="number" placeholder="หนี้สินต่อเดือน" value={formData.monthlyDebts} onChange={handleChange} style={inputStyle} />
            </div>
          </section>

          {/* References */}
          <section style={sectionStyle}>
            <h2 style={sectionHeaderStyle}>บุคคลอ้างอิง</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
              <input name="reference1Name" placeholder="ชื่อบุคคลอ้างอิง 1" value={formData.reference1Name} onChange={handleChange} style={inputStyle} />
              <input name="reference1Phone" type="tel" placeholder="เบอร์โทรบุคคลอ้างอิง 1" value={formData.reference1Phone} onChange={handleChange} style={inputStyle} />
              <input name="reference2Name" placeholder="ชื่อบุคคลอ้างอิง 2" value={formData.reference2Name} onChange={handleChange} style={inputStyle} />
              <input name="reference2Phone" type="tel" placeholder="เบอร์โทรบุคคลอ้างอิง 2" value={formData.reference2Phone} onChange={handleChange} style={inputStyle} />
            </div>
          </section>

          <button type="submit" style={{
            width: '100%',
            padding: '18px',
            background: 'linear-gradient(135deg, #2ca397 0%, #007799 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            fontSize: '18px',
            fontWeight: '600',
            cursor: 'pointer',
            marginTop: '30px',
            boxShadow: '0 4px 15px rgba(44, 163, 151, 0.3)',
            transition: 'all 0.3s ease',
            letterSpacing: '0.5px'
          }}>
ส่งใบสมัคร
          </button>
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  padding: '16px',
  border: '2px solid #e1f5f3',
  borderRadius: '8px',
  fontSize: '16px',
  width: '100%',
  boxSizing: 'border-box',
  transition: 'all 0.3s ease',
  backgroundColor: 'white'
};

const sectionStyle = {
  marginBottom: '35px',
  background: 'white',
  padding: '30px',
  borderRadius: '15px',
  boxShadow: '0 4px 20px rgba(0, 119, 153, 0.08)',
  border: '1px solid #f0f9f8'
};

const sectionHeaderStyle = {
  color: '#007799',
  fontSize: '20px',
  fontWeight: '600',
  marginBottom: '20px',
  paddingBottom: '10px',
  borderBottom: '3px solid #2ca397',
  display: 'inline-block'
};