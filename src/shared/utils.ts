/**
 * Get the path after the prefix.
 */
function getPathAfterPrefix(fullPath: string, prefix: string): string {
  // use regex to find the position of the prefix
  const prefixRegex = new RegExp(`^${prefix}/`);
  const match = fullPath.match(prefixRegex);
  // if prefix not found, return the original path
  if (!match) {
    return '';
  }

  // return the part after the prefix
  return fullPath.slice(match[0].length);
}

export { getPathAfterPrefix };
