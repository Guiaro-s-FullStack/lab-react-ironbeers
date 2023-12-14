import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

    const firtsImg = " https://capitaobarley.com.br/wp-content/uploads/2021/11/destaque-cerva-artesanal-presente.jpg"
    const firtsP = "Explore the rich diversity of beers available in your local community. Browse through an extensive list, ranging from classics to the most innovative, all just a few steps away. Utilize our smart filters to discover the perfect beer for every occasion."

    const secondImg = 'https://maringapost.com.br/wp-content/uploads/2017/11/xA-Cerveja-Artesanal.jpg.pagespeed.ic_.RKx-ULqz2A.jpg'
    const secondP = "Immerse yourself in the richness of the beer world, exploring a universe of flavors waiting to be discovered. Every click is a new adventure – guaranteed pleasure for true beer enthusiasts!"

    const thirdImg = "https://proxy.organicadigital.com/img-3dfbf8d9e554169e.png?thumb=701x"
    const thirdP = `Be the curator of the next great beer discovery! With "Add a New Beer," you have the power to shape the experience for fellow enthusiasts and contribute to the diversity of our beer universe. Share your favorite beers, celebrate the passion for beer, and inspire others to explore new flavors. After all, the beer community is always ready to welcome innovations! `
    return (
        <div>
            <Link to="/beers" className='home-container'>
                <div className='img-container'>
                    <img className="home-img" src={firtsImg} />
                </div>
                <div className='text-container'>
                    <h2>All Beers</h2>
                    <p>{firtsP}</p>
                </div>
            </Link>
            <Link to="/random-beer" className='home-container'>
                <div className='img-container'>
                    <img className="home-img" src={secondImg} />

                </div>
                <div className='text-container'>
                    <h2>Random Beer</h2>
                    <p>{secondP}</p>
                </div>
            </Link>
            <Link to="new-beer" className='home-container'>
                <div className='img-container'>
                    <img className="home-img" src={thirdImg} />
                </div>


                <div className='text-container'>
                    <h2>Random Beer</h2>
                    <p>{thirdP}</p>
                </div>
            </Link>
        </div>
    )
}

export default Home