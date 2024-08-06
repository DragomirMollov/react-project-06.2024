import { useParams } from "react-router-dom";
import { useGetOneProjects } from "../../hooks/useProjects";
import { useForm } from "../../hooks/useForm";
import { useAuthContext } from "../../contexts/AuthContext";
import { useCreateComment, useGetAllComents } from "../../hooks/useComments";
import { useState } from "react";

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

            // setComments(oldComments => [...oldComments, newComment]);
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
            <div className="info-section">

                <div className="eader">
                    <h1>{project.title}</h1>
                    <span className="years">Years: {project.years}</span>
                </div>

                <p className="text">{project.details}</p>

                {/* <!-- Bonus ( for Guests and Users ) --> */}
                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {comments.map(comment => (
                            <li key={comment._id} className="comment">
                                <p>{comment.author.email}: {comment.text}</p>
                            </li>
                        ))
                        }
                    </ul>

                    {comments.length === 0 && <p className="no-comment">No comments.</p>}
                </div>

                {isOwner && (
                    <div className="buttons">
                        <a href="#" className="button">Edit</a>
                        <a href="#" className="button">Delete</a>
                    </div>
                )}
            </div>

            {/* <!-- Bonus -->
            <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
            {isAuthenticated && (
                <article className="create-comment">
                    <label>Add new comment:</label>
                    <form className="form" onSubmit={submitHandler}>
                        <textarea
                            name="comment"
                            placeholder="Comment......"
                            onChange={changeHandler}
                            value={values.comment}
                        ></textarea>

                        <input className="btn submit" type="submit" value="Add Comment" />
                    </form>
                </article>
            )}


        </section>
    );
};