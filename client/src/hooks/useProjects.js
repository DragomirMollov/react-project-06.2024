/* eslint-disable arrow-parens */
import { useEffect, useState } from 'react';
import projectsAPI from '../api/projects-api';

/* eslint-disable style/indent */
export function useGetAllProjects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await projectsAPI.getAll();

            setProjects(result);
        })();
    }, []);

    return [projects, setProjects];
};

export function useGetOneProjects(projectId) {
    const [project, setProject] = useState({});

    useEffect(() => {
        (async () => {
            const result = await projectsAPI.getOne(projectId);

            setProject(result);
        })();
    }, [projectId]);

    return [
        project,
        setProject,
    ];
};

export function useCreateProject() {
    const projectCreateHandler = (projectData) => projectsAPI.create(projectData);

    return projectCreateHandler;
};

export function useEditProjects() {
    const editProjectHandler = (projectData, projectId) => projectsAPI.update(projectData, projectId);

    return editProjectHandler;
};
