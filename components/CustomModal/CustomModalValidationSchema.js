import * as Yup from "yup";
import { FORM_ERROR_MESSAGES } from "consts/FormErrorMessages";
import { priority } from "consts/priority";
import { status } from "consts/status";

export const ValidationSchema = Yup.object({
    // error submit validations
    title: Yup.string(FORM_ERROR_MESSAGES.string).required(
        FORM_ERROR_MESSAGES.required
    ),
    prio: Yup.string(FORM_ERROR_MESSAGES.string)
        .oneOf(
            [priority.L, priority.M, priority.H],
            FORM_ERROR_MESSAGES.invalidPrio
        )
        .required(FORM_ERROR_MESSAGES.required),
    status: Yup.string(FORM_ERROR_MESSAGES.string)
        .oneOf(
            [status.N, status.IP, status.D],
            FORM_ERROR_MESSAGES.invalidStatus
        )
        .required(FORM_ERROR_MESSAGES.required),
    description: Yup.string(FORM_ERROR_MESSAGES.string).required(
        FORM_ERROR_MESSAGES.required
    ),
});
