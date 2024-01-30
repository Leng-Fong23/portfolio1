import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, {useState, useEffect} from 'react'
import EmailLink from '../.next/components/EmailLink'
import About from './about';
import skill from './skill';




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
      {navItems.map((item, index) => (
        <li key={index} className="nav-item" style={{ marginRight: '20px' }}>
          <a
            onClick={() => handleNavClick(item.link || '')}
            // Apply a different style to the "Home" item
            className={item.title === 'Home' ? styles.homeText : ''}
          >
            {item.title.replace("'", "&apos;")}
          </a>
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
    { title: 'Home', link: '#home' },
    { title: 'Skill', link:'/resume' },
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
        
        <div id= "skill" className={styles.boxa}>
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
