import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useEditProjects, useGetOneProjects } from "../../hooks/useProjects";

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
        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={submitHandler}>
                <div className="container">
                    <h1>Edit project</h1>
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
                    <input className="btn submit" type="submit" value="Edit project" />
                </div>
            </form>
        </section>
    );
}; 