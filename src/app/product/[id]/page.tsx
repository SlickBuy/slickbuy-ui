"use client";

import React, { useEffect, useState } from "react";
import "../../App.css";
import { Container } from "@mui/material";
import Description from "../../components/product-detail/Description";
import fetchService from "@/api/fetch-service";
import { useParams } from "next/navigation";

interface Product {
  id: number;
  name: string;
  price: number;
}

// Define a type for the cart item
type CartItem = {
  quant: number;
  product: Product;
  id: number;
};

export default function ProductPage() {
  const params = useParams();

  const [quant, setQuant] = useState(0);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [product, setProduct] = useState<Product>({
    id: 0,
    name: "",
    price: 0,
  });

  const fetctProducts = async () => {
    try {
      const response = await fetchService.get(`/product/${params?.id}`);
      setProduct(response);
    } catch (error) {
      console.error("GET Error:", error);
    }
  };

  useEffect(() => {
    fetctProducts();
  }, []);

  const addQuant = () => {
    setQuant(quant + 1);
  };

  const removeQuant = () => {
    setQuant(quant - 1);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = () => {
    const existingItemIndex = cart.findIndex((item) => item.id === product.id);

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quant += quant;
      setCart(updatedCart);
    } else {
      const newCartItem: CartItem = {
        quant,
        product,
        id: product.id,
      };
      setCart((prevCart) => [...prevCart, newCartItem]);
    }
  };

  return (
    <Container component="section" maxWidth={"lg"}>
      <section className=" core">
        <div className="gallery image">
          <img src="/protein.webp" alt="product-1" />
        </div>
        <Description
          product={product}
          onQuant={quant}
          onAdd={addQuant}
          onRemove={removeQuant}
          onSetOrderedQuant={addToCart}
        />
      </section>
    </Container>
  );
}
