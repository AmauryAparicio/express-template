import type { NextFunction, Request, Response } from "express";
import { CustomRes } from "../controllers/controllers";

export interface middleware<
  Params = Record<string, string>,
  Body = Record<string, any>,
  Res = Record<string, any>
> {
  (
    req: Request<Params, CustomRes<Res>, Body>,
    res: Response<CustomRes<Res>>,
    next: NextFunction
  ):
    | Response<any, Record<string, any>>
    | void
    | Promise<Response<any, Record<string, any>> | undefined>;
}
