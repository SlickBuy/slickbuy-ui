import { Typography, Button, Card, CardActionArea, CardActions, CardContent, CardMedia } from '@mui/material';

export default function Accent() {
    return (
        <Card sx={{ mb: 3}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="300"
                    width="500"
                    image="https://gymbeam.bg/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/g/o/gold_titulna.png"
                    alt="green iguana"
                    sx={{ objectFit: 'contain' }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Заглавие
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Кратко описание
                    </Typography>
                    <Typography variant="h6" color="text.primary">
                        18 лева
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="secondary">
                    Прочети повече
                </Button>
            </CardActions>
        </Card>
    )
}