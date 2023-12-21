import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, {useState} from 'react'


  const handleNavClick = (link: string) => {
    const section = document.getElementById(link.substring(1)); // Removing '#' from link
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  


// Define the type for the navigation item
type NavItem = {
  title: string;
  link?: string;
};

// Navigation bar component
const Navbar: React.FC<{ items: NavItem[] }> = ({ items }) => {
  return (
    <nav className={styles.navbar}>
      <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
        {items.map((item, index) => (
          <li key={index} className="nav-item" style={{ marginRight: '20px' }}>
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Home: NextPage = () => {
  const navItems: NavItem[] = [
    { title: 'Home', link: '#home' },
    { title: 'Skill', link: '#skill' },
    { title: 'Achivement', link: '#achivement' },
    { title: 'Education', link: '#education' },
    { title: 'Extra-co', link: '#extra' },
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
              <a onClick={() => handleNavClick(item.link || '')}>{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>

        <main className={styles.main}>
    
          <div className={styles.gradient}>
            <div className={styles.img}>
            <Image src="/LF.png" alt="lengfong" width="500" height='500' className={styles.img}/>
          </div>
            </div>

        <div id= "home" className={styles.box}>
        <p className={styles.text}>
          <h1 className={styles.h1}>About Myself</h1>
        </p>
          <div className={styles.content}>
              <div className={styles.imga}>
                  <Image src="/Image.jpeg" alt="lengfong" width="200" height='100' className={styles.img}/> <br />
              </div>
              <div className={styles.text}>
                  <p>
                    Hi, I'm Leng Fong. I was born in Kelantan in the year of 2002. I'm currently in my final year at Sunway University, 
                  majoring in Information Technology(Computer Networking and Security).</p>
                </div>
            </div>
        </div>
        
        <div id= "skill" className={styles.boxa}>
        <p className={styles.text}>
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
        </p>
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
                <p>
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
                <p>
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
                <p>
               <p className={styles.topic}> Member of Sunway Student Volunteer <br /></p> 
              •	Join activities that have been organized by Sunway Student Volunteer
                </p>
              </div>
            <div className={styles.containerright}>
              <div className={styles.content}>
                <h2 className={styles.year}>2022</h2>
                <p>
                <p className={styles.topic}>  Vice Head of Department of Program & Committee Member of 30 Hours Famine in Sunway University.<br /></p> 
                •	Organize a DIY camp for 30 hours famine.<br />
                •	Communicate with other committee members and give ideas for the event.<br />
                </p>
              </div>
            </div>
            <div className={styles.containerleft}>
              <div className={styles.content}>
                <h2 className={styles.year}>2016 to 2019</h2>
                <p>
                <p className={styles.topic}> Sin Chew Student Reporter Cadet <br /></p> 
                  •	Organized 2 major camps. <br />
                  •	Learned how to work together in a huge team. <br />
                </p>
              </div>
            </div>
            <div className={styles.containerright}>
              <div className={styles.content}>
                <h2 className={styles.year}>2015-2019</h2>
                <p>
                <p className={styles.topic}> Volunteer of Buddhist Society, Kelantan.<br /></p> 
                •	Organized Buddhist camp for kids below 12 years old for thrice.<br />
                •	Organized talent competition and master of the ceremonies of the competition.<br />
                •	Organized Mid-autumn carnivals.<br />
                </p>
              </div>
            </div>
            <div className={styles.containerleft}>
              <div className={styles.content}>
                <h2 className={styles.year}>2015-2019</h2>
                <p>
                <p className={styles.topic}> President of Basketball Team & Committee Member, SMK Dato Mahmmud Paduka Raja (1)<br /></p> 
                •	Guided all the members in basketball team.<br />
                •	Responsible in running club meetings, appointing committee, and delegating tasks<br />
                </p>
              </div>
            </div>
            <div className={styles.containerright}>
              <div className={styles.content}>
                <h2 className={styles.year}>2015-2019</h2>
                <p>
                <p className={styles.topic}> Treasurer of Chinese Society Club & Committee Member, SMK Dato Mahmmud Paduka Raja (1)<br /></p> 
                •	Oversaw the financial administration of the Chinese Society Club.<br />
                •	As a photographer for all activities and the person who managed Facebook page of the club.<br />
                </p>
              </div>
            </div>
            <div className={styles.containerright}>
              <div className={styles.content}>
                <h2 className={styles.year}>2015-2019</h2>
                <p>
                <p className={styles.topic}>  Committee Member of Red Crescent, SMK Dato Mahmmud Paduka Raja (1)<br /></p> 
                •	Volunteer of rescue team for annual sport in Dato Mahmmud and SJK  (C) Yuk Cheng.<br />
                </p>
              </div>
            </div>
            </div>
        </div>
        </main>

        <div id= "contact" className={styles.boxa}>
        <div className={styles.text}>
        <h1 className={styles.h1}>Contact</h1>
              <div className={styles.contenta}>
                <p>Call me: <a href="tel:+60146673724">+60146673724</a></p>
              </div>
              <div className={styles.contenta}>
                <p>Email: <a href="email:tlengfong@gmail.com">tlengfong@gmail.com</a></p>
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
