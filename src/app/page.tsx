"use client";
import { Container, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import ProductList from "./components/product-list";
import Accent from "./components/accent";
import fetchService from "@/api/fetch-service";
import { useEffect, useState } from "react";

export default function Home() {
  var items = [
    {
      img: "/slider1.png",
    },
    {
      img: "/slider2.png",
    },
  ];
  const [products, setProducts] = useState([]);
  const fetctProducts = async () => {
    try {
      const response = await fetchService.get("/product/products");
      setProducts(response);
    } catch (error) {
      console.error("GET Error:", error);
    }
  };
  useEffect(() => {
    fetctProducts();
  }, []);
  return (
    <main>
      {/* <Carousel>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel> */}
      <Container fixed>
        <Typography gutterBottom variant="h5" component="h3">
          Нашите последни продукти
        </Typography>
        {!!products.length && <ProductList products={products} />}
        {/* <Typography gutterBottom variant="h5" component="h3">
          Последни новини
        </Typography>
        <Accent /> */}
      </Container>
    </main>
  );
}

function Item(props: any) {
  return <img src={props.item.img} />;
}
