
import propertyImg from '../assets/property.jpeg';
import cryptoImg from '../assets/crypto.jpeg';
import netflixImg from '../assets/netflix.jpeg';
import twitchImg from '../assets/twitch.jpeg';
import ProjectItem from './ProjectItem';


export default function Projects() {
   return (
    <div id="projects" className="fixed w-full h-screen z-20 max-w-[1040px] m-auto md:pl-20 p-4 py-16">
    <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
    <p className="text-center py-8">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia distinctio 
       quibusdam est voluptatum, fugiat omnis deleniti officia quasi eum soluta. 
       Animi, aperiam dolor. Tempora commodi laborum vel, et aperiam officia.
    </p>
    <div className="grid sm:grid-cols-2 gap-12" >
        <ProjectItem img={cryptoImg} title='Crypto App' />
        <ProjectItem img={propertyImg} title='Property App' />
        <ProjectItem img={netflixImg} title='Netflix App' />
        <ProjectItem img={twitchImg} title='Twitch App' />
    </div>
</div>
   );
};

