import { User } from "../../redux/types/user";
import { IMessage } from "../../redux/types/chat";

export interface IMemberCard {
  member: User;
}

export interface IMessageProps {
  message: IMessage;
}

export enum ConnectionResult {
  ERROR = "error",
  SUCCESS = "success",
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

export interface ITimerCard {
  timeType: string;
  value: number;
}