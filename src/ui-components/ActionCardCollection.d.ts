/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ActionCardProps } from "./ActionCard";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ActionCardCollectionOverridesProps = {
    ActionCardCollection?: PrimitiveOverrideProps<CollectionProps>;
    ActionCard?: ActionCardProps;
} & EscapeHatchProps;
export declare type ActionCardCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => ActionCardProps;
} & {
    overrides?: ActionCardCollectionOverridesProps | undefined | null;
}>;
export default function ActionCardCollection(props: ActionCardCollectionProps): React.ReactElement;
