/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Template } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TemplateUpdateFormInputValues = {
    HTML?: string;
};
export declare type TemplateUpdateFormValidationValues = {
    HTML?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TemplateUpdateFormOverridesProps = {
    TemplateUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    HTML?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TemplateUpdateFormProps = React.PropsWithChildren<{
    overrides?: TemplateUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    template?: Template;
    onSubmit?: (fields: TemplateUpdateFormInputValues) => TemplateUpdateFormInputValues;
    onSuccess?: (fields: TemplateUpdateFormInputValues) => void;
    onError?: (fields: TemplateUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TemplateUpdateFormInputValues) => TemplateUpdateFormInputValues;
    onValidate?: TemplateUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TemplateUpdateForm(props: TemplateUpdateFormProps): React.ReactElement;
