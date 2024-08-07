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

export const update = (projectData, projectId) => request.put(`${BASE_URL}/${projectId}`, projectData);

export const deleteOne = (projectId) => request.del(`${BASE_URL}/${projectId}`);

const projectsAPI = {
    getAll,
    getOne,
    create,
    update,
    deleteOne,
};

export default projectsAPI;
