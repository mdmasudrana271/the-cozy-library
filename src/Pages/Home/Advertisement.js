import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Spinner from '../../components/Spinner/Spinner';

const Advertisement = () => {
    
    const { data: products, isLoading } = useQuery({
        queryKey: ["ads-products"],
        queryFn: async () => {
          const res = await fetch('http://localhost:5000/ads-products',{
            headers: {
              authorization: `Bearer ${localStorage.getItem('bookAccessToken')}`
          }
          });
          const data = await res.json();
          return data;
        },
      });
    
      if(isLoading){
        return <Spinner></Spinner>
      }

    return (
        <div>
            <h3>{products.length}</h3>
        </div>
    );
};

export default Advertisement;