/* eslint-disable antfu/top-level-function */
/* eslint-disable style/indent */
import requester from './requester';

const BASE_URL = 'http://localhost:3030/data/comments';

const create = (projectId, text) => requester.post(BASE_URL, { projectId, text });

const getAll = (projectId) => {
    const params = new URLSearchParams({
        where: `projectId="${projectId}"`,
        load: `author=_ownerId:users`,
    });
    return requester.get(`${BASE_URL}?${params.toString()}`);
};

const update = (projectId, text) => requester.put(BASE_URL, { projectId, text });

const commentsAPI = {
    create,
    getAll,
    update,
};

export default commentsAPI;
