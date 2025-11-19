import React, {
  useEffect,
  useMemo,
  useState,
  useCallback,
  useRef,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
import ProductCard from "../components/ProductCard";
import Filters from "../components/Filters";
import Sort from "../components/Sort";
import RatingFilter from "../components/RatingFilter";
import SkeletonCard from "../components/SkeletonCard";
import CategoryChips from "../components/CategoryChips";

export default function Home() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.products);

  const [filters, setFilters] = useState({
    search: "",
    category: "all",
    minPrice: null,
    maxPrice: null,
  });

  const [ratingFilter, setRatingFilter] = useState(0);
  const [sortType, setSortType] = useState("none");
  const [visibleCount, setVisibleCount] = useState(8);

  const loadMoreRef = useRef(null);

  useEffect(() => {
    if (!items || items.length === 0) dispatch(fetchProducts());
  }, [dispatch, items]);

  const categories = useMemo(() => {
    const set = new Set();
    (items || []).forEach((p) => set.add(p.category));
    return Array.from(set);
  }, [items]);

  const onFilterChange = useCallback((f) => {
    setFilters((prev) => ({ ...prev, ...f }));
    setVisibleCount(8);
  }, []);

  const onRatingSelect = useCallback((value) => {
    setRatingFilter(value);
    setVisibleCount(8);
  }, []);

  const onSortChange = useCallback((value) => {
    setSortType(value);
    setVisibleCount(8);
  }, []);

  // ⭐ Apply search + category + price + rating filters
  const filtered = useMemo(() => {
    if (!items) return [];

    return items.filter((p) => {
      const q = filters.search.trim().toLowerCase();

      if (
        q &&
        !p.title.toLowerCase().includes(q) &&
        !p.description.toLowerCase().includes(q)
      )
        return false;

      if (filters.category !== "all" && p.category !== filters.category)
        return false;

      if (filters.minPrice !== null && p.price < filters.minPrice) return false;
      if (filters.maxPrice !== null && p.price > filters.maxPrice) return false;

      if (ratingFilter > 0 && p.rating.rate < ratingFilter) return false;

      return true;
    });
  }, [items, filters, ratingFilter]);

  // ⭐ Sorting Logic
  const sorted = useMemo(() => {
    if (sortType === "none") return filtered;

    const sortedData = [...filtered];

    switch (sortType) {
      case "priceLowHigh":
        sortedData.sort((a, b) => a.price - b.price);
        break;
      case "priceHighLow":
        sortedData.sort((a, b) => b.price - a.price);
        break;
      case "titleAZ":
        sortedData.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "titleZA":
        sortedData.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "ratingHigh":
        sortedData.sort((a, b) => b.rating.rate - a.rating.rate);
        break;
      default:
        break;
    }

    return sortedData;
  }, [filtered, sortType]);

  // ⭐ Infinite Scroll
  useEffect(() => {
    if (!loadMoreRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => prev + 8);
        }
      },
      { threshold: 1 }
    );

    observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, [sorted]);

  // ⭐ Skeleton Loading
  if (loading) {
    return (
      <div className="container product-grid">
        {Array(8)
          .fill(0)
          .map((_, i) => (
            <SkeletonCard key={i} />
          ))}
      </div>
    );
  }

  return (
    <div className="container">
      <h2 style={{ margin: "18px 0" }}>Products</h2>

      {/* Filters + Sorting + Chips Row */}
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
        <CategoryChips
          categories={categories}
          onSelect={(cat) => onFilterChange({ category: cat })}
        />
        <RatingFilter onRatingSelect={onRatingSelect} />
        <Sort onSortChange={onSortChange} />
      </div>

      {error && <h3 style={{ color: "red" }}>{error}</h3>}

      {!loading && sorted.length === 0 && (
        <div style={{ padding: 20 }}>No products match filters.</div>
      )}

      {/* ⭐ FIXED GRID CLASSNAME */}
      <div className="product-grid">
        {sorted.slice(0, visibleCount).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Infinite Scroll Trigger */}
      <div ref={loadMoreRef} style={{ height: 40 }}></div>
    </div>
  );
}
