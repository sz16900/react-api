import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Product() {
  const { id } = useParams();
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const [product, setProduct] = useState(null);
  let content = null;

  useEffect(() => {
    axios.get(url).then((response) => {
      setProduct(response.data);
    });
  }, [url]);

  if (product) {
    content = (
      <div>
        <h1 className="text-2xl font-bold mb-3">{product.name}</h1>
        <div>
          <img src={product.sprites.back_default} alt={product.name} />
        </div>
        <div className=" text-xl mb-3">
          Main Abilities:{' '}
          <span className="font-bold text-xl mb-3">
            {product.abilities[0].ability.name}
          </span>
        </div>
        <div>
          Lorem Ipsum Detal Mega Manga Chone Ipsum Lorem Ipsum Detal Mega Manga
          Chone Ipsum Lorem Ipsum Detal Mega Manga Chone Ipsum Lorem Ipsum Detal
          Mega Manga Chone Ipsum{' '}
        </div>
      </div>
    );
  }

  return <div>{content}</div>;
}

export default Product;

// "back_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"
