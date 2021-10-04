import type { Request, Response } from "express";

export interface Handler<Res = any, Req = Request> {
  (req: Req, res: Response<Res>):
    | Response<any, Record<string, any>>
    | undefined
    | Promise<Response<any, Record<string, any>>>;
}
