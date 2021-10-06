import type { Request, RequestHandler, Response } from "express";

export interface CustomRes<T = Record<string, any> | string> {
  status: "error" | "success";
  err?: Array<string> | string;
  data?: T;
}

export type Handler<
  Params = Record<string, string>,
  Body = Record<string, any>,
  Res = Record<string, any>
> = RequestHandler<Params, CustomRes<Res>, Body>;
