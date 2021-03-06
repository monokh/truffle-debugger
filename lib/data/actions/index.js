export const SCOPE = "SCOPE";
export function scope(context, id, pointer, parentId = null) {
  return {
    type: SCOPE,
    context, id, pointer, parentId
  }
}

export const DECLARE = "DECLARE_VARIABLE";
export function declare(context, node) {
  return {
    type: DECLARE,
    context, node
  }
}

export const ASSIGN = "ASSIGN";
export function assign(context, assignments) {
  return {
    type: ASSIGN,
    context, assignments
  };
}
