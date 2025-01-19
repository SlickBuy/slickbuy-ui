import { Grid } from '@mui/material';
import ProductCard from '../product-card';
import { useEffect } from 'react';

export default function ProductList({ products = {} }: any): any {
    return (
        <Grid container spacing={2} sx={{ mb: 5 }}>
            {
                !!products.length && products.map((product: any, index: number) => {
                    return <Grid item xs={6} md={3} key={index}>
                        <ProductCard product={product} />
                    </Grid>
                })
            }
        </Grid>
    )
}