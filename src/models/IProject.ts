import { IProjectGithubContent, IProjectGitub } from './IGithub';

export interface IProject {
  id: string;
  name: string;
  tags: string[];
  languages: string[];
  isPrivate: boolean;
  hasAuthentication: boolean;
  isFullStack: boolean;
  github?: IProjectGitub;
  githubContent?: IProjectGithubContent;
}