import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { CarProvider } from './context/CartProvider.tsx'
import { ProductsProvider } from './context/ProductsProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProductsProvider>
      <CarProvider>
        <App />
      </CarProvider>
    </ProductsProvider>
  </React.StrictMode>,
)
