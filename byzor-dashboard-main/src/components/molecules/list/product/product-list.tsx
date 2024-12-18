"use client";
import React from "react";
// @ts-ignore
import { useGetAllProductsQuery } from "@/lib/store/api/productService";
import { getColumns } from "@/components/molecules/list/product/columns";
import { ProductType } from "@/lib/store/@types/product";
import DataTable from "@/components/atoms/data-table";
import { useAppSelector } from "@/lib/store/hooks";
import CardMaker from "@/components/molecules/card/card-maker";

function ProductList() {
  const user = useAppSelector((state) => state.app.currentUser);
  const { data: products } = useGetAllProductsQuery();

  // const user = {role: "store-owner"};
  const productType = "product";
  // const productType = "store";

  if (user?.role === "admin") {
    return (
      <div className="flex flex-col gap-2">
        {Array.isArray(products) && products.length > 0 ? (
          <DataTable
            columns={getColumns()}
            data={products as Array<ProductType>}
          />
        ) : (
          <p>No products available for admin.</p>
        )}
      </div>
    );
  } else {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product: ProductType, index) => (
            <CardMaker
              key={index}
              imageUrl="https://pin.it/6GL6NSuOk"
              title={product.name}
              description={product.description || "No description provided"}
              tags={['Feature 1', 'Feature 2']}
              ctaLabel="Edit"
              onCtaClick={() => console.log(product.name)}
              // secondaryCtaLabel="Learn More"
              productType={productType}
              content={
                <div>
                  <p>
                    <strong>Price:</strong> ${product.price}
                  </p>
                  <p>
                    <strong>Category:</strong> {"Product"}
                  </p>
                </div>
              }
            />
          ))
        ) : (
          <p>No products available for store owner.</p>
        )}
      </div>
    );
  }
}
export default ProductList;