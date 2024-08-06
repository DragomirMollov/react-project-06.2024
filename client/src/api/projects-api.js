/* eslint-disable arrow-parens */
/* eslint-disable style/indent */
/* eslint-disable antfu/top-level-function */
import * as request from './requester';

const BASE_URL = 'http://localhost:3030/data/projects';

export const getAll = async () => {
    const result = await request.get(BASE_URL);

    const projects = Object.values(result);

    return projects;
};

export const getOne = (projectId) => request.get(`${BASE_URL}/${projectId}`);

export const create = (projectData) => request.post(`${BASE_URL}`, projectData);

const projectsAPI = {
    getAll,
    getOne,
    create,
};

export default projectsAPI;
