import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { items } from "./Data";

const DataFilter = ({ setData }) => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("0");

  useEffect(() => {
    let element = items;
    if (selectedCategory) {
      element = element.filter(
        (product) => product.category === selectedCategory
      );
    }
    if (selectedPriceRange) {
      element = element.filter(
        (product) => Number(product.price) >= Number(selectedPriceRange)
      );
    }
    setData(element);
    // eslint-disable-next-line
  }, [selectedPriceRange, selectedCategory]);

  const filterByCategory = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
  };

  const filterByPrice = (e) => {
    const price = e.target.value;
    setSelectedPriceRange(price);
  };

  const clearFilters = () => {
    setSelectedCategory("");
    setSelectedPriceRange("0");
  };

  return (
    <>
      {location.pathname === "/" && (
        <div className="filter-container">
          <div className="filter-bar">
            <div className="filter-options">
              <label htmlFor="categoryFilter" className="filter-label">
                Shop by Category:
                <select
                  id="categoryFilter"
                  value={selectedCategory}
                  onChange={filterByCategory}
                >
                  <option value="">Select Category</option>
                  <option value="mobiles">Mobiles</option>
                  <option value="laptops">Laptops</option>
                  <option value="tablets">Tablets</option>
                </select>
              </label>
              <label htmlFor="priceFilter" className="filter-label">
                Shop by Price:
                <select
                  id="priceFilter"
                  value={selectedPriceRange}
                  onChange={filterByPrice}
                >
                  <option value="0">Select Price Range</option>
                  <option value="29999">{">"}=29999</option>
                  <option value="49999">{">="}49999</option>
                  <option value="69999">{">="}69999</option>
                  <option value="89999">{">="}89999</option>
                </select>
              </label>
            </div>
            <button className="clear-btn" onClick={clearFilters}>
              Clear Filters
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default DataFilter;
