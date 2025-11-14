import './App.css';
import ProductTable from './compoents/productTable_component';

function App() {
  const initialProducts = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Car' },
  ];

  return (
    <>
      <h3>
        Follow README.md file and finish the TODO part (and this line can be
        removed)
      </h3>
      {<ProductTable init_table_prop={initialProducts} />}
      {/* <ProductTable products={initialProducts} /> */}
    </>
  );
}

export default App;
