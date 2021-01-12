declare module 'git-describe' {
  interface Version {
    dirty: boolean;
    raw: string;
    hash: string;
    distance: number;
    tag: string;
    semver: {
      major: number;
      minor: number;
      patch: number;
    };
    suffix: string;
    semverString: string;
  }

  export const gitDescribeSync: () => Version;
}
