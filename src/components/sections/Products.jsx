import React from "react"
import { Section, SectionTitle, ProductGrid, ProductCard } from "../styles"

const ProductsSection = () => (
  <Section id="products">
    <SectionTitle>Products</SectionTitle>
    <ProductGrid>
      <ProductCard href="#fra">Risk Assessment</ProductCard>
      <ProductCard href="#balance">Balance Training</ProductCard>
      <ProductCard href="#safety">Home Safety</ProductCard>
      <ProductCard href="#telehealth">Telehealth</ProductCard>
      <ProductCard href="#pulse">Pulse4Pulse</ProductCard>
    </ProductGrid>
  </Section>
)

export default ProductsSection
