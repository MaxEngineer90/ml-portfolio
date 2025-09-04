export type Repo = {
  name: string;
  html_url: string;
  description: string | null;
  homepage: string | null;
  pushed_at: string;
  updated_at: string;
  fork: boolean;
  archived: boolean;
  owner: { avatar_url: string };
};
