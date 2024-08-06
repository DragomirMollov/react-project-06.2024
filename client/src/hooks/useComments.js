/* eslint-disable style/indent */
import { useEffect, useReducer } from 'react';
import commentsAPI from '../api/comment-api';

export function useCreateComment() {
    const createHandler = (projectId, comment) => commentsAPI.create(projectId, comment);

    return createHandler;
};

function commentsReducer(state, action) {
    switch (action.type) {
        case 'GET_ALL':
           return action.payload.slice();
        case 'ADD_COMMENT':
           return [...state, action.payload];
        default:
            return state;
    }
};

export function useGetAllComents(projectId) {
    const [comments, dispatch] = useReducer(commentsReducer, []);

    useEffect(() => {
        (async () => {
            const result = await commentsAPI.getAll(projectId);

            dispatch({ type: 'GET_ALL', payload: result });
        })();
    }, [projectId]);

    return [comments, dispatch];
};
