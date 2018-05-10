import * as React from 'react';

import { IProduct, Product } from '../components/Product';

export interface IProductList {
    products: IProduct[];
}

export default class ProductList extends React.Component<any, IProductList> {
    constructor(props: IProductList) {
        super(props);
        this.state = {
            products: []
        };
    }

    public componentDidMount() {
        this.setState({
            products: [
                { id: 1, name: 'This is a testing hello', description: 'Functional testing hello for stuff' },
                { id: 2, name: 'This is a testing hello', description: 'Functional testing hello for stuff' },
                { id: 3, name: 'This is a testing hello', description: 'Functional testing hello for stuff' },
                { id: 4, name: 'This is a testing hello', description: 'Functional testing hello for stuff' },
                { id: 5, name: 'This is a testing hello', description: 'Functional testing hello for stuff' },
                { id: 6, name: 'This is a testing hello', description: 'Functional testing hello for stuff' },
                { id: 7, name: 'This is a testing hello', description: 'Functional testing hello for stuff' }
            ]
        })
    }

    public render() {
        const products = this.state.products;
        return (
            <div>
                {products.map((p: IProduct) => {
                    return (
                        <div key={p.id}>
                            <Product
                                id={p.id}
                                name={p.name}
                                description={p.description}
                            />
                        </div>
                    )
                })}
            </div>
        );
    }
}
