/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TemplateCreateFormInputValues = {
    HTML?: string;
};
export declare type TemplateCreateFormValidationValues = {
    HTML?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TemplateCreateFormOverridesProps = {
    TemplateCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    HTML?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TemplateCreateFormProps = React.PropsWithChildren<{
    overrides?: TemplateCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TemplateCreateFormInputValues) => TemplateCreateFormInputValues;
    onSuccess?: (fields: TemplateCreateFormInputValues) => void;
    onError?: (fields: TemplateCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TemplateCreateFormInputValues) => TemplateCreateFormInputValues;
    onValidate?: TemplateCreateFormValidationValues;
} & React.CSSProperties>;
export default function TemplateCreateForm(props: TemplateCreateFormProps): React.ReactElement;
