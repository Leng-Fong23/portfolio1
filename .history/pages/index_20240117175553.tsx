import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import React, {useState, useEffect} from 'react'
import EmailLink from '../.next/components/EmailLink'
import About from './about';
import skill from './skill/skill';
import Slideshow from './Slideshow';
// index.tsx
import { handleNavClick } from './utils'; 

<style jsx global>
  {`

@font-face{
  font-family:Maintain;
  src: url("/font/Maintain.otf")
  format("openType");
} 

@font-face{
  font-family:Overlay;
  src: url("/font/Overlay.otf")
  format("openType");
} 

@font-face{
  font-family:Yummy-Dinner;
  src: url("/font/Yummy\ Dinner.otf")
  format("openType");
} 

.font-maintain {
  font-family: Maintain;
}
.font-overlay {
  font-family: Overlay;
}
.font-yummy-dinner {
  font-family: Yummy-Dinner;
}

.container {
  background-color: white;
}

.p{
  font-size: 18px;
  padding: 10px;
}

.gradient {
  width: 100%;
  height: 60vh;
  top: 100%;
  background: linear-gradient(45deg, #eff7f6, #f2b5d4);
  background-size: 300% 300%; /* Increase size for animation */
  animation: gradientAnimation 10s ease infinite; /* Apply animation */
}

@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%; /* Initial position */
  }
  50% {
    background-position: 100% 59%; /* Move to the right */
  }
  100% {
    background-position: 0% 50%; /* Reset to initial position */
  }
}

/* The actual timeline (the vertical ruler) */

.content {
  padding: 20px 100px;
  background-color: #ffdfea;
  position: relative;
  border-radius: 40px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 50px;
  margin-right: 50px;
}

.contenta {
  padding: 20px 100px;
  background-color: #F6F3E4;
  position: relative;
  border-radius: 40px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 50px;
  margin-right: 50px;
}


.main {
  min-height: 100vh;
  padding: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.box {
  background: #F6F3E4;
  left: 0;
  position:relative;
  padding: 10px;
  align-items: center;
  justify-content: center;
}

.boxa {
  background: #ffdfea;
  width: 100%;
  height: auto;
  left: 0;
  position:relative;
  padding: 10px;
  align-items: center;
  justify-content: center;
}

.h1{
  font-family: Georgia;
  font-size: 22px ;
  font-weight: bold;
}

.text{
  flex: 1;
  text-align: center;
  text-align: justify;
  padding-left:200px;
  padding-right:200px;
  padding-top: 3%;
  font-family: Georgia;
  font-size: 16px ;
  color: black;
}

.topic{
  font-style:italic;
  font-family: Georgia;
  font-size: 16px ;
}

.year{
  font-family: Georgia;
  font-size: 20px ;
  font-weight:bold;
}

.imageandtext {
  display: flex; /* Use flexbox */
  align-items: center; /* Align items vertically */
}

/* In your styles.module.css or external CSS file */
.navbar {
  position:absolute;
  width:100%;
  overflow:auto;
  display: flex;
  background-color: #F6F3E4; /* Change this color as desired */
  color:black;
  padding: 10px;
  left: 0;
  justify-content: center;
  overflow: hidden;
  z-index: 1000;
}

.navbar:hover {
  background-color: #3498db;
}

.nav-item {
  margin-right: 20px;
  margin-left:20px;
  list-style: none;
  display: block;
  justify-content: center;
}

.nav-item li {
  padding: 10px;
  cursor: pointer;
  /* Default color for navigation items */
  color: #333;
  transition: color 0.3s ease; /* Smooth transition for color change */
}

/* Apply styles when hovering over the li elements */
.nav-item li:hover {
  color: #3498db; /* Color when hovered */
}

.link {
  text-decoration: none;
  color: white; /* Text color */
}

.link:hover {
  color: yellow; /* Text color on hover */
}

.dropdown {
  position: relative;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9; /* Dropdown background color */
  min-width: 120px;
  z-index: 1;
}

.dropdown-content a {
  color: black; /* Dropdown item text color */
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1; /* Dropdown item background color on hover */
}


.img{
  transition: transform 0.3s ease;
  transform: scale(1.1);
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
  padding-top: 3%;
}

.imga{
  max-width: 100%; /* Adjust the image size */
  height: auto; /* Maintain aspect ratio */
  margin-right: 10px;
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
}

.one-line-spacing {
  line-height: 1.5; 
  margin-left: 10px;
}


.footer {
  display: flex;
  flex: 1;
  padding: 2rem 0;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;
}

.footer a {
  display: flex;
  justify-content: center;
   
  flex-grow: 1;
}

.title a {
  color: #000000;
  text-decoration: none;
}

.title a:hover,
.title a:focus,
.title a:active {
  text-decoration: underline;
}

.title {
  margin-bottom: 20px;
  line-height: 1.15;
  font-size: 4rem;
}

.title,
.description {
  text-align: center;
}

.description {
  margin: 4rem 0;
  line-height: 1.5;
  font-size: 1.5rem;
}

.code {
  background: #fafafa;
  border-radius: 5px;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
}

.grid {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
}

.card {
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  max-width: 300px;
}

.card:hover,
.card:focus,
.card:active {
  color: #000000;
  border-color: #000000;
}

.card h2 {
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
}

.card p {
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.5;
}

.logo {
  height: 1em;
  margin-left: 0.5rem;
}

@media (max-width: 600px) {
  .grid {
    width: 100%;
    flex-direction: column;
  }
}

@media (prefers-color-scheme: dark) {
  .card,
  .footer {
    border-color: #222;
  }
  .code {
    background: #111;
  }
  .logo img {
    filter: invert(1);
  }
}

]}
imageClassName="object-cover w-full h-full"


  `}
</style>






const YourComponent: React.FC = () => {

  const handleNavClick = (link: string) => {
    const section = document.getElementById(link.substring(1)); // Removing '#' from link
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const [isPopOutVisible, setPopOutVisible] = useState(false);

  const handleImageClick = () => {
    setPopOutVisible(true);
  };

  const handlePopOutClose = () => {
    setPopOutVisible(false);
  };

  

  
  return (
    <div className="image-container">
      <img
        src="your-image-source.jpg"
        alt="Your Image"
        className="image-thumbnail"
        onClick={handleImageClick}
      />

      {isPopOutVisible && (
        <div className="image-pop-out" onClick={handlePopOutClose}>
          <img
            src="your-image-source.jpg"
            alt="Your Image"
            className="pop-out-image"
          />
        </div>
      )}
    </div>
  );
};


// Define the type for the navigation item
type NavItem = {
  title: string;
  link: string;
};





// Navigation bar component
// Update the Navbar component
const Navbar: React.FC<{ items: NavItem[] }> = ({ items }) => {
  return (
    <nav className={styles.navbar}>
      <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
        {items.map((item, index) => (
          <li key={index} className="nav-item" style={{ marginRight: '20px' }}>
            <Link href={item.link || ''}>
              <a className={item.title === 'Home' ? styles.homeText : ''}>
                {item.title.replace("'", "&apos;")}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};





interface navItems {
  title: string;
  link: string;
}

const Home: React.FC = () => {
  const navItems: NavItem[] = [
    { title: 'Home', link: '/' },
    { title: 'Skill', link: '/skill/skill' },
    { title: 'Achivement', link: '#achivement' },
    { title: 'Contact', link: '#contact' },
  ];
  return (
          <div className={styles.container}>
          <Head>
            <title>Portfolio</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/icon.png" />
          </Head>

          <nav className={styles.navbar}>
            <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
              {navItems.map((item, index) => (
                <li key={index} className="nav-item" style={{ marginRight: '20px' }}>
                  <a
                    onClick={() => handleNavClick(item.link || '')}
                    // Apply a different style to each title
                    className={
                      item.title === 'Home'
                        ? styles.homeText
                        : item.title === 'Skill'
                        ? styles.skillText
                        : item.title === 'Achivement'
                        ? styles.achivementText
                        : item.title === 'Contact'
                        ? styles.contactText
                        : ''
                    }
                  >
                    {item.title.replace("'", "&apos;")}
                  </a>
                </li>
              ))}
            </ul>
          </nav> 

      <main className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat mt-0">
    
         
            <div className={styles.img}>
            <Image src="/Hi-I-M-2--unscreen.gif" alt="lengfong" width="500" height='500' className={styles.img}/>
          
            </div>

            <div className={styles.texta}>
  <h1 className={styles.h1}>About Myself</h1>
  <div className={styles.content}>
    <table className={styles.customtable}>
      <thead>
        <tr>
          <th className="w-1/4">
            <div className={styles.customtableth}>
            <Image src="/5.png" alt="lengfong" width="1000" height="1000"  /> <br />
            </div>
          </th>
          <th className="w-1/2">
            <div className={styles.customtableth}>
            Hi, I am Leng Fong. I was born in Kelantan in the year of 2002. I am currently in my final year at Sunway University, majoring in Information Technology (Computer Networking and Security).
            </div>
          </th>
        </tr>
      </thead>
       
    </table>
  </div>
</div>



        </main>

        <div className={styles.texta}>
      <h1 className={styles.h1}>MBTI</h1>
      <div className={styles.content}>
        <table className={styles.customtable}>
          <thead>
            <tr>
              <th className={styles.customtableth}>I_Introvert
              </th>
              <th className={styles.customtableth}>S_Sensing
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.customtabletd}>
                <Image src="/Introvert_girl_box_character-removebg-preview.png" alt="MBTI" width="300" height='300' className={styles.imgb} /> <br />
              </td>
              <td className={styles.customtabletd}>
                <Image src="/sensing-removebg-preview.png" alt="MBTI" width="300" height='300' className={styles.imgb} /> <br />
              </td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th className={styles.customtableth}>F_Feeling</th>
              <th className={styles.customtableth}>J_Judging</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.customtabletd}>
                <Image src="/Premium_Vector___Girl_worry_and_stress_illustration-removebg-preview.png" alt="MBTI" width="300" height='300' className={styles.imgb} /> <br />
              </td>
              <td className={styles.customtabletd}>
                <Image src="/Download_depressed_person_sad_failure_no_inspiration_cute_cartoon_illustration_disappointed_for_free-removebg-preview.png" alt="MBTI" width="300" height='300' className={styles.imgb} /> <br />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  

    <main className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat mt-0">
        <div id="contact" className={styles.boxa}>
        <div className={styles.floatcontainer}>
        <div className={styles.text}>
              <h1 className={styles.h1}>Achivement</h1>
        </div>
      </div>
    </div>

    <div id="contact" className={styles.boxa}>
  
    <div className={styles.floatcontainer}>
      
      <div className={styles.floatchild}>
        <div className={styles.green}>
        <div className={styles.iconContainera}>
        <Image src="/book.png" alt="Book" width="75" height='75' className={styles.icon}/>
        </div>
        <h2 className={styles.year}>Education</h2>
                <div className={styles.ul}>
            <div className={styles.li}>
            <img src="/scholar.png" alt="Bullet Point"  width="30" height='30'/>
            <p className={styles.topica}>
            2021-2024
            {'\n'}
            </p>
            </div>
          </div> 

            <div className={styles.ul}>
            <div className={styles.li}>
            <p className={styles.topic}>
            &nbsp;&nbsp;&nbsp;&nbsp;Recipient of the Jeffery Cheah continuing scholarship <br />
            </p>
             </div>
          </div>  

          <div className={styles.ul}>
            <div className={styles.li}>
            <img src="/scholar.png" alt="Bullet Point"  width="30" height='30'/>
            <p className={styles.topica}>
            2021 <br />
            </p>
             </div>
          </div> 

           <div className={styles.ul}>
            <div className={styles.li}>
            <p className={styles.topic}>
            &nbsp;&nbsp;&nbsp;&nbsp; Awareded of the Jeffery Cheah scholarship <br />
            </p>
             </div>
          </div>  

          <div className={styles.ul}>
            <div className={styles.li}>
            <img src="/scholar.png" alt="Bullet Point"  width="30" height='30'/>
            <p className={styles.topica}>
            2020 <br />
            </p>
             </div>
          </div>  

          <div className={styles.ul}>
            <div className={styles.li}>
            <p className={styles.topic}>
            &nbsp;&nbsp;&nbsp; &nbsp; Awarded Special Merit Scholarship <br />
            </p>
             </div>
          </div>

        </div>
      </div>
      <div className={styles.floatchild}>
        <div className={styles.green}>
        <div className={styles.iconContainera}>
        <Image src="/sport.png" alt="Book" width="75" height='75' className={styles.icon}/>
        </div>
        <h2 className={styles.year}>Sport</h2>
        <div className={styles.ul}>
            <div className={styles.li}>
            <img src="/gold medal.png" alt="Bullet Point"  width="30" height='30'/>
            <p className={styles.topica}>
            2019 <br />
            </p>
             </div>
          </div> 

           <div className={styles.ul}>
            <div className={styles.li}>
            <p className={styles.topic}>
            &nbsp;&nbsp;&nbsp;&nbsp; Champion on District Competition <br />
            </p>
             </div>
          </div>  

  
        <div className={styles.ul}>
            <div className={styles.li}>
            <img src="/slivermedal.png" alt="Bullet Point"  width="30" height='30'/>
            <p className={styles.topica}>
            2019 <br />
            </p>
             </div>
          </div> 

           <div className={styles.ul}>
            <div className={styles.li}>
            <p className={styles.topic}>
            &nbsp;&nbsp;&nbsp;&nbsp;First runner up on Basketball Competition U17 <br />
            </p>
             </div>
          </div>  

          <div className={styles.ul}>
            <div className={styles.li}>
            <img src="/slivermedal.png" alt="Bullet Point"  width="30" height='30'/>
            <p className={styles.topica}>
            2018 <br />
            </p>
             </div>
          </div>

          <div className={styles.ul}>
            <div className={styles.li}>
            <p className={styles.topic}>
            &nbsp;&nbsp;&nbsp;&nbsp;First runner up on Basketball Competition U17 <br />
            </p>
             </div>
          </div>  
        </div>
    </div>
  </div>
</div>
        
        <div  className={styles.boxa}>
        <div className={styles.text}>
        <h1 className={styles.h1}>Skill</h1>
        <div className={styles.contenta}>
          •	Familiar with different operating system (OSes) like Windows, MacOS, and Linux. <br />
          •	Strong in analyse network traffic using Wireshark.<br />
          •	Strong on using different tools for detection.<br />
          •	Strong in programming (JAVA & Python), create and design website.<br />
          •	Familiar with database analysis, SQL, Oracle Apex.<br />
          •	Skilled in HTML, CSS and JavaScript.<br />
          •	Ability to communicate with different group of people, lead a team, follow instructions, and get a job done on time.<br />
          </div>
        </div>
        </div>
       
        <div id= "achivement" className={styles.box}>
        <div className={styles.text}>
        <h1 className={styles.h1}>Achivement</h1>
              <div className={styles.content}>
                <h2 className={styles.year}>2022-2024</h2>
                <p>
                  Recipient of the Jeffery Cheah continuing scholarship
                </p>
              </div>
            <div className={styles.containerright}>
              <div className={styles.content}>
                <h2 className={styles.year}>2021</h2>
                <p>
                  Awarded Jeffery Cheah Scholarship (3.8 and above overall average in FIST)
                </p>
              </div>
            </div>
            <div className={styles.containerleft}>
              <div className={styles.content}>
                <h2 className={styles.year}>2020</h2>
                <p>
                 Awarded Special Merit Scholarship (5As for SPM)
                </p>
              </div>
            </div>
            </div>
        </div>
          
        <div id= "education" className={styles.boxa}>
        <div className={styles.text}>
        <h1 className={styles.h1}>Education</h1>
              <div className={styles.contenta}>
                <h2 className={styles.year}>August 2021 to present</h2>
                <p className={styles.topic}>
                BSc (Hons) Information Technology (Computer Networking and Security) <br />
                Sunway University, Selangor <br />
                Expected to graduate in August 2024 <br />
                Major: Computer Networking and Security <br />
                CGPA of Year 1: 3.57 <br />
                CGPA until latest semester: 3.65 <br />
                </p>
              </div>
            <div className={styles.containerright}>
              <div className={styles.contenta}>
                <h2 className={styles.year}>September 2020 to July 2021</h2>
                <p className={styles.topic}>
                July 2021 <br />
                Foundation In Science and Technology <br />
                Sunway College, Selangor <br />
                Course taken: Introduction to Programming, Basic Computer Concept, ICT Application Skills <br />
                Results: 3.84 CGPA <br />
                </p>
              </div>
            </div>
            </div>
        </div>

        <div id= "extra" className={styles.box}>
        <div className={styles.text}>
        <h1 className={styles.h1}>Extracurricular activities</h1>
              <div className={styles.content}>
                <h2 className={styles.year}>2023</h2>
               <p className={styles.topic}> Member of Sunway Student Volunteer <br /></p> 
              •	Join activities that have been organized by Sunway Student Volunteer
              </div>
            <div className={styles.containerright}>
              <div className={styles.content}>
                <h2 className={styles.year}>2022</h2>
                <p className={styles.topic}>  Vice Head of Department of Program & Committee Member of 30 Hours Famine in Sunway University.<br /></p> 
                •	Organize a DIY camp for 30 hours famine.<br />
                •	Communicate with other committee members and give ideas for the event.<br />
              </div>
            </div>
            <div className={styles.containerleft}>
              <div className={styles.content}>
                <h2 className={styles.year}>2016 to 2019</h2>
                <p className={styles.topic}> Sin Chew Student Reporter Cadet <br /></p> 
                  •	Organized 2 major camps. <br />
                  •	Learned how to work together in a huge team. <br />
              </div>
            </div>
            <div className={styles.containerright}>
              <div className={styles.content}>
                <h2 className={styles.year}>2015-2019</h2>
                <p className={styles.topic}> Volunteer of Buddhist Society, Kelantan.<br /></p> 
                •	Organized Buddhist camp for kids below 12 years old for thrice.<br />
                •	Organized talent competition and master of the ceremonies of the competition.<br />
                •	Organized Mid-autumn carnivals.<br />
              </div>
            </div>
            <div className={styles.containerleft}>
              <div className={styles.content}>
                <h2 className={styles.year}>2015-2019</h2>
                <p className={styles.topic}> President of Basketball Team & Committee Member, SMK Dato Mahmmud Paduka Raja (1)<br /></p> 
                •	Guided all the members in basketball team.<br />
                •	Responsible in running club meetings, appointing committee, and delegating tasks<br />
              </div>
            </div>
            <div className={styles.containerright}>
              <div className={styles.content}>
                <h2 className={styles.year}>2015-2019</h2>
                <p className={styles.topic}> Treasurer of Chinese Society Club & Committee Member, SMK Dato Mahmmud Paduka Raja (1)<br /></p> 
                •	Oversaw the financial administration of the Chinese Society Club.<br />
                •	As a photographer for all activities and the person who managed Facebook page of the club.<br />
              </div>
            </div>
            <div className={styles.containerright}>
            <div className={styles.content}>
                <h2 className={styles.year}>2015-2019</h2>
                <p className={styles.topic}>  Committee Member of Red Crescent, SMK Dato Mahmmud Paduka Raja (1)<br /></p> 
                •	Volunteer of rescue team for annual sport in Dato Mahmmud and SJK  (C) Yuk Cheng.<br />
              </div>
            </div>
            </div>
        </div>

        <div className={`${styles.text} w-96 h-96`}>
        <h1 className={styles.h1}>Idol</h1>
        <div className={styles.contenta}>
          <Slideshow
            images={[
              '/BLACKPINK at Coachella 2023.jpeg',
              '/ed57e0e88964dcf4dee25e7d0ccaa7c1.jpg',
              '/bp.jpeg',
              // Add more image URLs as needed
            ]}
            imageClassName="object-cover w-full h-full" // Tailwind CSS classes for images
          />
        </div>
      </div>


          <div className={styles.text}>
          <h1 className={styles.h1}>Resume.pdf</h1>
          </div>
          <div className="flex items-center justify-center">
            <div style={{ backgroundColor: '#F3EEEA' }} className="p-2 rounded-md flex items-center w-500">
              <a href="https://drive.google.com/file/d/1GFbDEpIVxzbKQ3M6xlCxya20VVmTU_74/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                <Image src="/button.png" alt="email" width="40" height="40" className="flex items-center justify-center" />
              </a>
          </div>
        </div>


        

       

        </main>

       
              <div id="contact" className={styles.boxa}>
            <div className={styles.text}>
              <h1 className={styles.h1}>Find Me On</h1>
              <div className={styles.iconContainer}>
              <a href="https://www.facebook.com/thiew.lengfong.5?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
               <Image src="/email.b.gif" alt="email" width="40" height="40" className={styles.icon} />
              </a>
              </div>
              <div className={styles.iconContainer}>
              <a href="https://www.facebook.com/thiew.lengfong.5?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
               <Image src="/facebook.a.png" alt="email" width="40" height="40" className={styles.icon} />
              </a>
          </div>
          <div className={styles.iconContainer}>
          <a href="https://www.instagram.com/leng_fong?igsh=Zmt4cWExYmJ2a3J2&utm_source=qr" target="_blank" rel="noopener noreferrer">
                <Image src="/insta.a.png" alt="email" width="40" height="40" className={styles.icon} />
          </a>
          </div>
          <div className={styles.iconContainer}>
          <a href="tel:+1234567890">
                <Image src="/phone.a.gif" alt="phone" width="40" height="40" className={styles.icon} />
          </a>
          </div>
        </div>
      </div>


        

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </footer>
        </div>
    

    
    
  )
}
export default Home