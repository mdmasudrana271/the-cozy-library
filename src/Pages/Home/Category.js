import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';
import { AuthContext } from '../../context/AuthProvider';
import CategoryCard from './CategoryCard';

const Category = () => {
    
    const {setCategory} = useContext(AuthContext)

    const {data : categories, isLoading } = useQuery({
        queryKey: ['category'],
        queryFn: async ()=> {
            const res = await fetch('http://localhost:5000/category')
            const data = await res.json()
            setCategory(data)
            return data;
        }
    })

    if(isLoading){
        return <Spinner></Spinner>
    }
    return (
        <section className='text-center text-3xl font-semibold'>
            <h2>Product Category</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-10 mx-3'>
            {
                    categories.map(category=> <Link key={category._id} to={`/category/${category._id}`}><CategoryCard category={category}></CategoryCard></Link>)
                }
            </div>
        </section>
    );
};

export default Category;