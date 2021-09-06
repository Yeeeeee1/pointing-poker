export interface IMemberCard {
  name: string;
  position?: string;
  logo?: string;
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

export interface IAuthPopup {
  closePopup: (isOpen: boolean) => void;
}

export interface IIssueProps {
  issue: IIssue;
}

export interface IMember {
  id: number;
  name: string;
  position?: string;
  logo?: string;
}

export interface IMembersListProps {
  members: IMember[];
}
