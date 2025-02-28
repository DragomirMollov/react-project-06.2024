import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useEditProjects, useGetOneProjects } from "../../hooks/useProjects";
import styles from './ProjectEdit.module.css';

export default function ProjectEdit() {
    const { projectId } = useParams();
    const [project, setprojects] = useGetOneProjects(projectId);

    const [error, setError] = useState('');
    const navigate = useNavigate();
    const editproject = useEditProjects();

    const editHandler = async (values) => {
        try {
            await editproject(values, projectId);

            navigate(`/projects`);
        } catch (error) {
            setError(error.message);
        }
    };

    const {
        values,
        changeHandler,
        submitHandler,
    } = useForm(project, editHandler, true);

    return (
        <div className={styles.container}>
        <section className={styles.content}>
            <form  onSubmit={submitHandler}>
                <div className="container">
                    <h1 className={styles.title}>Edit project</h1>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={values.title}
                        onChange={changeHandler}
                        placeholder="Enter project title..."
                    />

                    <label htmlFor="years">Years:</label>
                    <input
                        type="text"
                        id="years"
                        name="years"
                        value={values.years}
                        onChange={changeHandler}
                        placeholder="1"
                    />

                    <label htmlFor="details">Details:</label>
                    <textarea
                        name="details"
                        value={values.details}
                        onChange={changeHandler}
                        id="details"
                    ></textarea>
                    <input className={styles.btnSubmit} type="submit" value="Edit project" />
                </div>
            </form>
        </section>
        </div>
    );
}; 