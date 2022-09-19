import { ValidationError } from "yup";
import { Response } from 'express';
import { getError } from "../../utils/services";


export function processError(res: Response, error: unknown): void {
    if (error instanceof ValidationError) {
        res.status(400).json({
            errors: error.errors,
        });
    } else {
        res.status(500).json({
            message: getError(error),
        });
    }
}
