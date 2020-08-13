export interface IProjectGitub {
  user: string;
  repository: string;
}

export interface IProjectGithubContent {
  commits: IGithubCommit[];
  workflows: IGithubWorkflow[];
}

export interface IGithubCommit {
  author: IGithubCommitAuthor;
  message: string;
  date: Date;
  url: string;
}

export interface IGithubCommitAuthor {
  name: string;
  email: string;
  photoUrl: string;
  url: string;
}

export interface IGithubWorkflow {
  name: string;
  badge: string;
  url: string;
}