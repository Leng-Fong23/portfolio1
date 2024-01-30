import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const CenteredCard = () => {
  return (
    <main className="min-h-screen flex  justify-center">
      <div className="flex space-x-3">
        <div className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="./cake2.png"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        </div>
        

        {/* Repeat the Card components for the other two cards */}
        {/* Card 2 */}
        <div className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="./cake2.png"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        </div>
       

        {/* Card 3 */}
        <div className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="./cake2.png"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        </div>
      </div>
    </main>
  );
  return(
    <div className="flex-1 text-center sm:text-justify lg:text-justify lg:text-left p-2 sm:p-4 lg:p-4 lg:pl-8 lg:pr-8 pt-3 sm:pt-4 lg:pt-4 font-[georgia] text-1.5rem text-black justify-center items-center mx-auto lg:text-center">
  <div id="achievment" className="box-border bg-cover bg-center bg-no-repeat w-full">
    <div className="overflow-hidden flex border-radius-40">
      <div className="font-['Georgia'] flex-1 text-center sm:text-justify lg:text-justify lg:text-left p-2 sm:p-4 lg:p-4 lg:pl-8 lg:pr-8 pt-3 sm:pt-4 lg:pt-4 font-[georgia] text-1rem text-black">
        <h1 className="font-['maintain'] text-[2.5rem] font-bold">Achievement</h1>
      </div>
    </div>
  </div>

  <div id="achievement" className="box-border bg-cover bg-center bg-no-repeat w-full">
    <div className="overflow-hidden  border-radius-40">
      <div className="lg:flex">
      <div className={`${styles.floatchild} lg:w-1/2`}>
        <div className="bg-[#F6F3E4] rounded-lg p-12">
        <div className="inline-block bg-[#beb3e5] transition-transform transform hover:scale-105 rounded-full p-4 mt-4">
        <Image src="/book.png" alt="Book" width="75" height='75'/>
        </div>
        <h2 className="font-['georgia'] text-1.6rem font-bold">Education</h2>
                <div className="list-none p-0 items-center">
            <div className={styles.li}>
            <img src="/scholar.png" alt="Bullet Point"  width="30" height='30'/>
            <p className="topica text-1.2rem pl-8 italic font-georgia block">
            2021-2024
            {'\n'}
            </p>
            </div>
          </div> 

            <div className="list-none p-0 items-center">
            <div className={styles.li}>
            <p className="text-base pl-2 block italic font-[georgia]">
            &nbsp;&nbsp;&nbsp;&nbsp;Recipient of the Jeffery Cheah continuing scholarship <br />
            </p>
             </div>
          </div>  

          <div className="list-none p-0 items-center">
            <div className={styles.li}>
            <img src="/scholar.png" alt="Bullet Point"  width="30" height='30'/>
            <p className="topica text-1.2rem pl-8 italic font-georgia block">
            2021 <br />
            </p>
             </div>
          </div> 

           <div className="list-none p-0 items-center">
            <div className={styles.li}>
            <p className="text-base pl-2 block italic font-[georgia]">
            &nbsp;&nbsp;&nbsp;&nbsp; Awareded of the Jeffery Cheah scholarship <br />
            </p>
             </div>
          </div>  

          <div className="list-none p-0 items-center">
            <div className={styles.li}>
            <img src="/scholar.png" alt="Bullet Point"  width="30" height='30'/>
            <p className="topica text-1.2rem pl-8 italic font-georgia block">
            2020 <br />
            </p>
             </div>
          </div>  

          <div className="list-none p-0 items-center">
            <div className={styles.li}>
            <p className="text-base pl-2 block italic font-[georgia]">
            &nbsp;&nbsp;&nbsp; &nbsp; Awarded Special Merit Scholarship <br />
            </p>
             </div>
          </div>

        </div>
      </div>
      <div className={`${styles.floatchild} lg:w-1/2`}>
        <div className="bg-[#F6F3E4] rounded-lg p-12">
        <div className={styles.iconContainera}>
        <Image src="/sport.png" alt="Book" width="75" height='75' className={styles.icon}/>
        </div>
        <h2 className="font-['georgia'] text-1.6rem font-bold">Sport</h2>
        <div className="list-none p-0 items-center">
            <div className={styles.li}>
            <img src="/gold medal.png" alt="Bullet Point"  width="30" height='30'/>
            <p className="topica text-1.2rem pl-8 italic font-georgia block">
            2019 <br />
            </p>
             </div>
          </div> 

           <div className="list-none p-0 items-center">
            <div className={styles.li}>
            <p className="text-base pl-2 block italic font-[georgia]">
            &nbsp;&nbsp;&nbsp;&nbsp; Champion on District Competition <br />
            </p>
             </div>
          </div>  

  
        <div className="list-none p-0 items-center">
            <div className={styles.li}>
            <img src="/slivermedal.png" alt="Bullet Point"  width="30" height='30'/>
            <p className="topica text-1.2rem pl-8 italic font-georgia block">
            2019 <br />
            </p>
             </div>
          </div> 

           <div className="list-none p-0 items-center">
            <div className={styles.li}>
            <p className="text-base pl-2 block italic font-[georgia]">
            &nbsp;&nbsp;&nbsp;&nbsp;First runner up on Basketball Competition U17 <br />
            </p>
             </div>
          </div>  

          <div className="list-none p-0 items-center">
            <div className={styles.li}>
            <img src="/slivermedal.png" alt="Bullet Point"  width="30" height='30'/>
            <p className="topica text-1.2rem pl-8 italic font-georgia block">
            2018 <br />
            </p>
             </div>
          </div>

          <div className="list-none p-0 items-center">
            <div className={styles.li}>
            <p className="text-base pl-2 block italic font-[georgia]">
            &nbsp;&nbsp;&nbsp;&nbsp;First runner up on Basketball Competition U17 <br />
            </p>
             </div>
          </div>  
        </div>
    </div>
      </div>
    </div>
  </div>
</div>
    
  );
};

export default CenteredCard;
