import { User } from "../../redux/types/user";

export interface IMemberCard {
  member: User;
}

export interface IRoom {
  name: string;
  id: string;
  users: User[];
}

export interface IIssue {
  id: string;
  title: string;
  description: string;
}

export interface IIssuesListProps {
  issues: IIssue[];
}

export type UserAvatar = string | ArrayBuffer | null;
export type AuthFormData = Record<string, string>;
export type AuthFormErrors = Record<string, boolean>;

export type UserInfo = Record<string, UserAvatar | boolean>;

export interface IIssueProps {
  issue: IIssue;
}

export interface IMembersListProps {
  members: User[];
}
