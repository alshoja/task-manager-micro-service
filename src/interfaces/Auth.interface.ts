import { JwtPayload } from "jsonwebtoken";

export interface AuthenticatedRequest extends Request {
    user?: string ;
}