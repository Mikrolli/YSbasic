import React, { useMemo, useState } from "react";
import ProductList from "../../mocks/ProductList";
import ProductsList from "./ProductsList";
import Select from "../../UI/select/Select";
import Input from "../../UI/input/Input";

const Product = () => {
  const [product, setProduct] = useState(ProductList);

  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const sortedProducts = useMemo(() => {
    if (selectedSort) {
      return [...product].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }
    return product;
  }, [selectedSort, product]);

  const sortedAndSearchedProducts = useMemo(() => {
    return sortedProducts.filter(prod => prod.name.includes(searchQuery))
  }, [searchQuery, sortedProducts])

  // Сортировка
  const sortProduct = (sort) => {
    setSelectedSort(sort);
  };

  return (
    <div className="bg-white">
      <div className="max-w-[1240px] mx-auto w-full px-4 py-12">
        <div className="">
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Поиск..."
          />
          <Select
            value={selectedSort}
            onChange={sortProduct}
            defaultValue="Сортировка"
            options={[
              { value: "name", name: "По названию" },
              { value: "brand", name: "По бренду" },
            ]}
          />
        </div>
        {product.length ? (
          <ProductsList product={sortedAndSearchedProducts} />
        ) : (
          <div>Нет слова нету</div>
        )}
      </div>
    </div>
  );
};

export default Product;
