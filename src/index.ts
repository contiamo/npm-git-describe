import { gitDescribeSync } from 'git-describe';

/**
 * Get git semantic version following the same logic as https://github.com/mdomke/git-semver
 */
export const getSemanticVersion = () => {
  const {
    semver: { major, minor, patch },
    hash,
    distance,
    dirty,
    tag,
  } = gitDescribeSync();

  if (distance === 0) {
    return tag;
  }

  return `v${major}.${minor}.${patch + 1}-dev.${distance}+${hash}${
    dirty ? '.dirty' : ''
  }`;
};
