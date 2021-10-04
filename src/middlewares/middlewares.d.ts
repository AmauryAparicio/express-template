import type { NextFunction, Request, Response } from "express";

export interface middleware {
  (req: Request, res: Response, next: NextFunction):
    | Response<any, Record<string, any>>
    | undefined
    | Promise<Response<any, Record<string, any>> | undefined>;
}
