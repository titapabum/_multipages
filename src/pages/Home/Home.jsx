import "./Home.css"; 

function Home() {
  return (
    <div className="home-container">
      <h1>Profile</h1>
      
      <div className="profile">
        <img 
          src="/../image/IMG.JPG" 
          alt="Profile of Titapa Bumrungna" 
          className="profile-image" 
        />
        <div className="profile-details">
          <h2>Titapa Bumrungna</h2>
          <p>
            <strong>ชื่อเล่น: </strong> กลอยใจ <strong>อายุ: </strong> 19 ปี
          </p>
          <p>
            <strong>ที่อยู่: </strong> กรุงเทพฯ, ประเทศไทย
          </p>
          <p>
            <strong>อาชีพ: </strong> นักศึกษา
          </p>
          <p>
            <strong>งานอดิเรก:</strong> ฟังเพลง, เขียนนิยาย, ดูหนัง
          </p>
        </div>
      </div>

      <div className="education">
        <h3>Education</h3>
        <ul>
          <li>ประถมศึกษา: โรงเรียนสารสาสน์วิเทศศึกษา</li>
          <li>มัธยมศึกษาตอนต้น: โรงเรียนสารสาสน์วิเทศศึกษา สายวิทย์-คณิต</li>
          <li>มัธยมศึกษาตอนปลาย: โรงเรียนสารสาสน์วิเทศศึกษา สายศิลป์-คอม</li>
          <li>
            ปริญญาตรี: มหาวิทยาลัยศรีปทุม คณะเทคโนโลยีสารสนเทศ
            สาขาวิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟต์แวร์
          </li>
        </ul>
      </div>

      <div className="skills">
        <h3>Skills</h3>
        <ul>
          <li>การเขียนโปรแกรมด้วย JavaScript, HTML และ CSS</li>
          <li>การพัฒนาเว็บด้วย React และ Node.js</li>
        </ul>
      </div>

      <div className="contact">
        <h3>Contact</h3>
        <p>
          <strong>Email: </strong>
          <a href="mailto:titapa4774@example.com" className="email-link">
            titapa4774@example.com
          </a>
        </p>
        <p>
          <strong>Instagram: </strong>
          <a
            href="https://www.instagram.com/kttp.x"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            @kttp.x
          </a>
        </p>
      </div>
    </div>
  );
}

export default Home;
