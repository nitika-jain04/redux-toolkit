import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "First Book",
    price: 6,
    description: "The first book I ever wrote",
  },
  {
    id: "p2",
    title: "Second Book",
    price: 14,
    description: "The second book I ever wrote",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((prod) => (
          <ProductItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            price={prod.price}
            description={prod.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
