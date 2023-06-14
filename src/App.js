import React,{useEffect, useState} from "react";
import './App.css';
import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";
import FeaturedMovie from "./components/FeaturedMovie";
import Header from "./components/Header/header";

export default ()=> {

    const [movieList, setMovieList] = useState([]);
    const [featuredData, setFeaturedData] = useState([]);
    const [greyHeader, setGreyHeader] = useState(false)
    useEffect(()=>{
        //Pegando Lista do Tmdb
        const loadAll = async () => {
            let list = await Tmdb.getHomeList();
            setMovieList(list);
             //Pegando o Featured
            let originals = list.filter(i=>i.slug === 'originals');
            let randomChosen = Math.floor(Math.random( ) * (originals[0].items.results.length - 1)); 
            let chosen =  originals[0].items.results[randomChosen];
            let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
            setFeaturedData(chosenInfo);
        }
       
        loadAll();
    },[]);
    //Efeito do header 
    useEffect (()=>{
        const scrollListener = () => {
            if(window.scrollY > 10){
                setGreyHeader(true);
            }else {
                setGreyHeader(false);
            }
        }
        window.addEventListener('scroll', scrollListener);
        return()=>{
            window.removeEventListener('scroll', scrollListener);
        }
    },[]);
    return(
        <div className="page">
            
            <Header grey={greyHeader}/>

            {featuredData &&
                <FeaturedMovie item={featuredData}/>
            }

             <section className="lists">
                {movieList.map((item,key)=>(
                    <MovieRow key={key} title={item.title} items={item.items}/>
                ))}
             </section>   
             <footer>
                Feito por Guilherme Francisco<br/>
                Direitos de imagens Netflix e Prime Video <br/>
                Dados pegos no site Themovie.org
             </footer>
             {movieList.length <= 0 &&
                <div className="loading">
                    <img src="https://1.bp.blogspot.com/-ev9Kk2Q3KLQ/XTduGMxqg-I/AAAAAAADDQI/BDJhADeOK9kRaA8pkjYR_Zly7X4IYnCvQCLcBGAs/s1600/LO3.gif" alt="Carregando"/>
                </div>
             }
        </div>
    )
}