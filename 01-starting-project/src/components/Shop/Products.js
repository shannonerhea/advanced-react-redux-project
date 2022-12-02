import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "Cat Dancer",
    description: "Best cat toy ever. Hours of feline fun",
  },
  {
    id: "p2",
    price: 3,
    title: "Bananas Fish",
    description: "Catnip filled fish shaped cat toy",
  },
  {
    id: "p3",
    price: 12,
    title: "Whisker Dish",
    description: "A whisker friendly wide shallow cat dish",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
