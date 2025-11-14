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
      {<ProductTable init_table_prop={initialProducts} />}
      {/* <ProductTable products={initialProducts} /> */}
    </>
  );
}

export default App;
