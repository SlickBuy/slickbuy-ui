import { Typography, Card, CardActionArea, CardContent, CardMedia, Button } from '@mui/material';

export default function ProductCard({ product }: any): any {
    return (
        <Button href={`/product/${product.id}`}>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="300"
                        width="500"
                        image="/protein.webp"
                        alt="green iguana"
                        sx={{ objectFit: 'contain' }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {product.productName} {product.brand}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {product.description}
                        </Typography>
                        <Typography variant="h6" color="text.primary">
                            {product.price} лв.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Button>

    )
}