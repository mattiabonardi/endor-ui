/**
 * Create the id
 * @param baseId
 * @param propertyName
 * @param elementIndex
 * @returns
 */
export const assignId = (
  baseId: string,
  propertyName: string,
  elementIndex?: number
) => {
  let id = `${baseId}_${propertyName}`;
  if (elementIndex != undefined) {
    id += `_${elementIndex}`;
  }
  return id;
};
