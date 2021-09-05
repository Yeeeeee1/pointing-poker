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
