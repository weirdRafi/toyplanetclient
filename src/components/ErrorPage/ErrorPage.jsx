import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const ErrorPage = () => {
    useTitle('Error')
    const { error } = useRouteError()
    return (
        <div>
            <img className='mx-auto w-1/3' src="/public/error.avif" alt="" />

            <p className='text-2xl text-center font-semibold md:text-3xl mb-8'>
                {error?.message}
            </p>
            <div className='text-center'>
                <Link
                    to='/'
                    className='px-8 py-3 font-semibold rounded bg-purple-500 text-white'
                >
                    Back to homepage
                </Link>
            </div>

        </div>
    );
};

export default ErrorPage;