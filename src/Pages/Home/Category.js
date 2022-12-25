import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';
import CategoryCard from './CategoryCard';

const Category = () => {

    const {data : categories, isLoading } = useQuery({
        queryKey: ['category'],
        queryFn: async ()=> {
            const res = await fetch('https://the-cozy-library-server.vercel.app/category')
            const data = await res.json()
            return data;
        }
    })

    if(isLoading){
        return <Spinner></Spinner>
    }
    return (
        <section className='text-center text-3xl font-semibold'>
            <h2>Product Category</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-10 w-11/12 mx-auto'>
            {
                    categories.map(category=> <Link key={category._id} to={`/category/${category._id}`}><CategoryCard category={category}></CategoryCard></Link>)
                }
            </div>
        </section>
    );
};

export default Category;