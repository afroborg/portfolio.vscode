import { IProject } from '@/models/IProject';
import { getAsync } from './http-helpers';

export const getProjects = () => getAsync<IProject[]>('projects');

export const getProject = (id: string) => getAsync<IProject>('projects/' + id);

export const getProjectDetails = (id: string) => getAsync<IProject>(`projects/${id}/details`);