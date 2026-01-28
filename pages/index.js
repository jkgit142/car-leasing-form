import { useState, useEffect } from 'react';
import { config } from '../config/app.js';

export default function CarLeasingForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    department: '',
    province: '',
    selectedProduct: '',
    duration: ''
  });
  
  const [products, setProducts] = useState([]);
  const [groupedProducts, setGroupedProducts] = useState({});

  useEffect(() => {
    fetchProducts();
  }, []);
  
  const fetchProducts = async () => {
    const mockProducts = [
      {ID: 1, 'ยี่ห้อ': 'AION', 'รุ่น': 'V Luxury', 'ราคา': 899000},
      {ID: 2, 'ยี่ห้อ': 'AION', 'รุ่น': 'UT Premium', 'ราคา': 649000},
      {ID: 3, 'ยี่ห้อ': 'AION', 'รุ่น': 'UT Standard', 'ราคา': 549000},
      {ID: 4, 'ยี่ห้อ': 'BYD', 'รุ่น': 'SEALION7 Premium', 'ราคา': 1264900},
      {ID: 5, 'ยี่ห้อ': 'BYD', 'รุ่น': 'ATT03 Premium', 'ราคา': 799000},
      {ID: 6, 'ยี่ห้อ': 'BYD', 'รุ่น': 'DOLPHIN Extended', 'ราคา': 719900},
      {ID: 7, 'ยี่ห้อ': 'BYD', 'รุ่น': 'DOLPHIN Standard', 'ราคา': 599000},
      {ID: 8, 'ยี่ห้อ': 'DEEPAL', 'รุ่น': 'S05 Max', 'ราคา': 899000},
      {ID: 9, 'ยี่ห้อ': 'DEEPAL', 'รุ่น': 'S05 Plus', 'ราคา': 849000},
      {ID: 10, 'ยี่ห้อ': 'GEELY', 'รุ่น': 'EX5 Max', 'ราคา': 849000},
      {ID: 11, 'ยี่ห้อ': 'GEELY', 'รุ่น': 'V23 2WD Plus', 'ราคา': 689000},
      {ID: 12, 'ยี่ห้อ': 'GEELY', 'รุ่น': 'V23 2WD Play', 'ราคา': 634900},
      {ID: 13, 'ยี่ห้อ': 'GEELY', 'รุ่น': 'EX2 Pro', 'ราคา': 459990},
      {ID: 14, 'ยี่ห้อ': 'GEELY', 'รุ่น': 'EX2 Max', 'ราคา': 459990},
      {ID: 15, 'ยี่ห้อ': 'MG', 'รุ่น': 'MG S5D', 'ราคา': 679900},
      {ID: 16, 'ยี่ห้อ': 'MG', 'รุ่น': 'MG 4D Long range', 'ราคา': 649000},
      {ID: 17, 'ยี่ห้อ': 'MG', 'รุ่น': 'MIG3 Hybrid', 'ราคา': 619900},
      {ID: 18, 'ยี่ห้อ': 'MG', 'รุ่น': 'MG 4D', 'ราคา': 549000},
      {ID: 19, 'ยี่ห้อ': 'RIDDARA', 'รุ่น': 'RD6 63.9 kW 2WD', 'ราคา': 739000}
    ];
    
    setProducts(mockProducts);
    
    const grouped = mockProducts.reduce((acc, product) => {
      const brand = product['ยี่ห้อ'];
      if (!acc[brand]) acc[brand] = [];
      acc[brand].push(product);
      return acc;
    }, {});
    
    setGroupedProducts(grouped);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(`https://script.google.com/macros/s/AKfycbzwmGDtQgd-kNVt_vgUzr2BTEV-kbl5-6ep9Jk5qgRhj1hG_EP80mkC8UnGOh4eJZ08/exec`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          spreadsheetId: config.googleSheets.spreadsheetId,
          sheetName: 'registration',
          data: [
            '', // เลขที่
            new Date().toLocaleString('th-TH'), // วันที่ส่ง
            formData.fullName,
            formData.phone,
            formData.department,
            formData.province,
            formData.selectedProduct,
            formData.duration
          ]
        }),
      });
      
      const result = await response.json();
      
      if (result.success) {
        alert(`${config.app.name} says\n${result.message}`);
        setFormData({
          fullName: '',
          phone: '',
          department: '',
          province: '',
          selectedProduct: '',
          duration: ''
        });
      } else {
        alert(`${config.app.name} says\n${result.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert(`${config.app.name} says\n${config.form.errorMessage}`);
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f8fffe 0%, #e8f7f5 100%)', fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px', background: 'white', padding: '30px', borderRadius: '15px', boxShadow: '0 8px 32px rgba(44, 163, 151, 0.1)' }}>
          <img src="./images/logo_MAIN.png" alt="Company Logo" style={{ height: '60px', marginBottom: '20px' }} onError={(e) => { e.target.style.display = 'none' }} />
          <h1 style={{ color: '#007799', fontSize: '32px', fontWeight: '700', margin: '0', letterSpacing: '-0.5px' }}>ใบสมัครเช่ารถยนต์</h1>
          <p style={{ color: '#666', fontSize: '16px', margin: '10px 0 0 0' }}>กรอกใบสมัครให้เสร็จภายในไม่กี่นาที</p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <section style={sectionStyle}>
            <h2 style={sectionHeaderStyle}>ข้อมูลใบสมัคร</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px', marginTop: '20px' }}>
              <input name="fullName" placeholder="ชื่อ-สกุล *" value={formData.fullName} onChange={handleChange} required style={inputStyle} />
              <input name="phone" type="tel" placeholder="เบอร์โทรศัพท์ *" value={formData.phone} onChange={handleChange} required style={inputStyle} />
              <input name="department" placeholder="สังกัด *" value={formData.department} onChange={handleChange} required style={inputStyle} />
              <input name="province" placeholder="จังหวัด *" value={formData.province} onChange={handleChange} required style={inputStyle} />
              
              <div style={{ marginTop: '10px' }}>
                <label style={{ fontSize: '14px', color: '#007799', marginBottom: '10px', display: 'block' }}>เลือกรุ่นรถ *</label>
                {Object.keys(groupedProducts).length === 0 ? (
                  <div style={{ padding: '20px', textAlign: 'center', color: '#666' }}>กำลังโหลดข้อมูลสินค้า...</div>
                ) : (
                  Object.keys(groupedProducts).map(brand => (
                    <div key={brand} style={brandCardStyle}>
                      <div style={brandHeaderStyle}>
                        <img src={`./images/logo_${brand}.png`} alt={brand} style={logoStyle} onError={(e) => { e.target.style.display = 'none' }} />
                        <span style={{ fontSize: '18px', fontWeight: '600', color: '#007799' }}>{brand}</span>
                      </div>
                      {groupedProducts[brand].map(product => (
                        <label key={product.ID} style={productItemStyle}>
                          <input 
                            type="radio" 
                            name="selectedProduct" 
                            value={`${product['ยี่ห้อ']} ${product['รุ่น']}`}
                            onChange={handleChange}
                            style={{ marginRight: '10px' }}
                          />
                          <span style={{ flex: 1 }}>{product['รุ่น']}</span>
                          <span style={{ fontWeight: '600', color: '#2ca397' }}>฿{Number(product['ราคา']).toLocaleString()}</span>
                        </label>
                      ))}
                    </div>
                  ))
                )}
              </div>
              <select name="duration" value={formData.duration} onChange={handleChange} required style={inputStyle}>
                <option value="">ระยะเวลา *</option>
                <option value="5">5 ปี</option>
                <option value="10">10 ปี</option>
                <option value="15">15 ปี</option>
                <option value="20">20 ปี</option>
              </select>
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

const brandCardStyle = {
  background: 'white',
  border: '2px solid #e1f5f3',
  borderRadius: '12px',
  marginBottom: '15px',
  overflow: 'hidden'
};

const brandHeaderStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '15px 20px',
  background: 'linear-gradient(135deg, #f8fffe 0%, #e8f7f5 100%)',
  borderBottom: '1px solid #e1f5f3',
  gap: '15px'
};

const logoStyle = {
  width: '40px',
  height: '40px',
  objectFit: 'contain'
};

const productItemStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '12px 20px',
  cursor: 'pointer',
  borderBottom: '1px solid #f0f9f8',
  transition: 'background-color 0.2s ease'
};

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