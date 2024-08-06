import { useParams } from "react-router-dom";
import { useGetOneProjects } from "../../hooks/useProjects";
import { useForm } from "../../hooks/useForm";
import { useAuthContext } from "../../contexts/AuthContext";
import { useCreateComment, useGetAllComents } from "../../hooks/useComments";
import { useState } from "react";

import style from './ProjectDetails.module.css';

const initialValues = {
    comment: '',
};

export default function Projectetails() {
    const [error, setError] = useState('');
    const { projectId } = useParams();
    const [comments, dispatch] = useGetAllComents(projectId);
    const createComment = useCreateComment();
    const { email, userId } = useAuthContext();
    const [project] = useGetOneProjects(projectId);
    const { isAuthenticated } = useAuthContext();
    const {
        values,
        changeHandler,
        submitHandler,
    } = useForm(initialValues, async ({ comment }) => {
        try {
            const newComment = await createComment(projectId, comment);
            dispatch({ type: 'ADD_COMMENT', payload: { ...newComment, author: { email } } });
        } catch (error) {
            setError(error.message);
        };
    });

    const isOwner = userId === project._ownerId;
    console.log(userId);

    return (
        <section>
            <h1>Project Details</h1>
            <div className={style.section}>
                <div className={style.header}>
                    <h1>{project.title}</h1>
                    <span className={style.years}>Years: {project.years}</span>
                </div>

                <p className={style.text}>{project.details}</p>

                <div className={style.detailsComments}>
                    <h2>Comments:</h2>
                    <ul>
                        {comments.map(comment => (
                            <li key={comment._id} className={style.comment}>
                                <p>{comment.author.email}: {comment.text}</p>
                            </li>
                        ))}
                    </ul>

                    {comments.length === 0 && <p className={style.noComment}>No comments.</p>}
                </div>

                {isOwner && (
                    <div className={style.buttons}>
                        <a href="#" className={style.button}>Edit</a>
                        <a href="#" className={style.button}>Delete</a>
                    </div>
                )}
            </div>

            {isAuthenticated && (
                <article className={style.createComment}>
                    <label>Add new comment:</label>
                    <form className={style.form} onSubmit={submitHandler}>
                        <textarea
                            name="comment"
                            placeholder="Comment......"
                            onChange={changeHandler}
                            value={values.comment}
                        ></textarea>

                        <input className={`${style.btn} ${style.submit}`} type="submit" value="Add Comment" />
                    </form>
                </article>
            )}
        </section>
    );
};
