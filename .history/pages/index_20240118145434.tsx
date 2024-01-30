import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import React, {useState, useEffect} from 'react'
import EmailLink from '../.next/components/EmailLink'
import About from './about';
import Skill from './skill';
import Slideshow from './Slideshow';
import router from "next/router"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
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
.bg-beb3e5 {
  background-color: #beb3e5; /* Use the correct color code */
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
    <nav className="fixed w-full bg-[#f6f3e4] text-black  justify-center z-50 left-0">
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
    { title: 'Skill', link: './skill' }, // Assuming 'skill' is a separate page
    { title: 'Achivement', link: '#achivement' },
    { title: 'Contact', link: '#contact' },
  ];
  return (
          <div className="container mx-auto">
          <Head>
            <title>Portfolio</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/icon.png" />
          </Head>

          <nav className="fixed w-full flex bg-[#f6f3e4] text-black p-4 justify-center z-50 left-0">
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
    
         
            <div className="relative pt-4 ">
            <Image src="/main3.gif" alt="lengfong" width="500" height='500' className={styles.img}/>
            </div>
            <div className={styles.texta}>
      <div className="inline-block bg-beb3e5 rounded-full p-4 mt-4 font-georgia text-22 font-bold">About Myself</div>
        <table className= "p-2 text-left font-yummy-dinner text-2xl bg-cover bg-center w-full rounded-lg" style={{ backgroundImage: "url('/background2.png')" }}>
          <thead>
            <tr>
              <th className="w-1/3">
                <div className="customtableth">
                  <Image src="/lf (2).png" alt="lengfong" width={1000} height={1000} className="float-left p-4" />
                  <br />
                </div>
              </th>
              <th className="w-1/2">
                <div className="customtableth text-black text-left">
                  Hi, I am Leng Fong. I was born in Kelantan in the year of 2002. I am currently in my final year at Sunway University, majoring in Information Technology (Computer Networking and Security).
                </div>
                <div className="p-2 rounded-md">
                  <a href="https://drive.google.com/file/d/1GFbDEpIVxzbKQ3M6xlCxya20VVmTU_74/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                    <Image src="/pdf.png" alt="email" width={40} height={40} />
                  </a>
                </div>
              </th>
            </tr>
          </thead>
        </table>
      
    </div>



        </main>

        <div className={styles.texta}>
      <h1 className={styles.h1}>Baking as one of my hobby</h1>
      <div className={styles.content}>
        <table className={styles.customtable}>
          <tbody>
            <tr>
            <td className="customtabletd text-center text-black">
                Indulging in the sweetness of homemade joy. 🍰💖
              </td>
              <td className={styles.customtabletd}>
                <Image src="/cake1.png" alt="MBTI" width="500" height='500' className={styles.imgb} /> <br />
              </td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td className="customtabletd text-center text-black">
                <Image src="/cake2.png" alt="MBTI" width="500" height='500' className={styles.imgb} /> <br />
              </td>
              <td className="customtabletd text-center text-black">
              Baking love into every fluffy layer of this chiffon masterpiece. 💕
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  
    <div className={styles.texta}>
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
        <div className="inline-block bg-[#beb3e5] rounded-full p-4 mt-4">
        <Image src="/book.png" alt="Book" width="75" height='75'/>
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
        
     
    </div>
            <div className="flex justify-center">
          <div className="inline-block bg-[#F6F3E4] p-4 rounded-full w-70"> {/* Increase the width to 56 */}
            <Link href="./skill" target="_blank" rel="noopener noreferrer">
              <div className="inline-block bg-beb3e5 rounded-full p-4 font-georgia text-40 font-bold">Know More</div>
              <FontAwesomeIcon icon={faArrowRight} className="fi fi-rr-arrow-right  rounded-full p-1 text-sm" />
            </Link>
          </div>
        </div>



       
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