import * as React from 'react';
import ProductList from '../containers/ProductList';

export default class Products extends React.Component <any, any> {

    public render () {
        return (
            <div>
                <h1>These are the products</h1>
                <ProductList />
            </div>
        );
    }
}
