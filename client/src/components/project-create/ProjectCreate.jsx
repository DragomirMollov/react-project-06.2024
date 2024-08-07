import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useCreateProject } from "../../hooks/useProjects";
import { useState } from "react";
import styles from './ProjectCreate.module.css';

const initialValues = {
    title: '',
    years: '',
    details: '',
};

export default function ProjectCreate() {
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const createProject = useCreateProject();

    const createHandler = async (values) => {
        try {
            const { _id: projectId } = await createProject(values);

            navigate(`/projects/${projectId}/details`);
        } catch (error) {
            setError(error.message);
            
        }
    };

    const {
        values,
        changeHandler,
        submitHandler,
    } = useForm(initialValues, createHandler);

    return (
        <section id="create" className="auth">
            <form id="create-content" onSubmit={submitHandler}>
                <div className="container">

                    <h1>Create project</h1>
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
                        type="number"
                        id="years"
                        name="years"
                        value={values.years}
                        onChange={changeHandler}
                        min="1"
                        placeholder="1"
                    />

                    <label htmlFor="details">Details:</label>
                    <textarea
                        name="details"
                        value={values.details}
                        onChange={changeHandler}
                        id="details"
                    ></textarea>
                    <input className="btn submit" type="submit" value="Create project" />
                </div>
            </form>
        </section>
    );
};