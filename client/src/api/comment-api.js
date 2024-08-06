/* eslint-disable antfu/top-level-function */
/* eslint-disable style/indent */
import requester from './requester';

const BASE_URL = 'http://localhost:3030/data/comments';

const create = (projectId, text) => requester.post(BASE_URL, { projectId, text });

const getAll = (projectId) => {
    const params = new URLSearchParams({
        where: `gameId="${projectId}"`,
        load: `author=_ownerId:users`,
    });
    return requester.get(`${BASE_URL}?${params.toString()}`);
};

const commentsAPI = {
    create,
    getAll,
};

export default commentsAPI;
