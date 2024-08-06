// import propertyImg from '../../assets/property.jpeg';
// import cryptoImg from '../../assets/crypto.jpeg';
// import netflixImg from '../../assets/netflix.jpeg';
// import twitchImg from '../../assets/twitch.jpeg';
import { useGetAllProjects } from '../../hooks/useProjects';
import ProjectItem from './ProjectItem';
import styles from './Project.module.css';

export default function Projects() {
    const [projects] = useGetAllProjects();

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
                <p className="text-center py-8">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia distinctio 
                    quibusdam est voluptatum, fugiat omnis deleniti officia quasi eum soluta. 
                    Animi, aperiam dolor. Tempora commodi laborum vel, et aperiam officia.
                </p>
                <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 ${styles.gridContainer}`}>
                    {projects.length > 0
                        ? projects.map(project => <ProjectItem key={project._id} {...project} />)
                        : <h3 className="no-articles">No projects yet</h3>
                    }
                </div>
            </div>
        </div>
    );
}


