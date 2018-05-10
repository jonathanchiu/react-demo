import * as React from 'react';

export interface IProduct {
    id: number;
    name: string;
    description: string;
}

export const Product = (props: IProduct): JSX.Element => {
    return (
        <div>
            <h2>{props.id}</h2>
            <h2>{props.name}</h2>
            <h2>{props.description}</h2>
        </div>
    );
}
