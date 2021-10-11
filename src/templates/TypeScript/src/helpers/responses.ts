/**
 * Returns an object that will fill the body of the response
 * @param data The body you will send
 * @returns the response objet to put in the json method of ther res
 */

export const createSuccessResponse = <T>(
  data: T
): { status: "success"; data: T } => ({
  status: "success",
  data,
});

/**
 * Returns an object that will fill the body of the response
 * @param err The error you will send to the response
 * @returns the response objet to put in the json method of ther res
 */

export const createErrorResponse = (
  err: any
): { status: "error"; err: Array<string> | string } => ({
  status: "error",
  err:
    err instanceof Error
      ? err.message
      : typeof err === "string"
      ? err
      : "Error desconocido...",
});

export default { createSuccessResponse, createErrorResponse };
