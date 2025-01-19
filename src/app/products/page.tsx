'use client'
import fetchService from "@/api/fetch-service";
import ProductList from "@/app/components/product-list";
import BasicSelect from "@/app/components/select";
import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {
        try {
            const response = await fetchService.get('/category/get-all');
            setCategories(response);
        } catch (error) {
            console.error('GET Error:', error);
        }
    }
    const fetctProducts = async () => {
        try {
            const response = await fetchService.get('/product/get-all');
            setProducts(response);
        } catch (error) {
            console.error('GET Error:', error);
        }
    }
    useEffect(() => {
        fetctProducts();
        fetchCategories();
    }, []);

    return (
        <Container fixed>
            <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={9} sm={3}>
                    {!!categories.length && <BasicSelect options={categories} title="Категория"/>}
                </Grid>
            </Grid>
            {!!products.length && <ProductList products={products} />}
        </Container>
    );
}