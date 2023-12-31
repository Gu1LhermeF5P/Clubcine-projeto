import React from "react";
import './FeaturedMovie.css';

export default ({item})=>{
    let firstDate = new Date (item.first_air_date);
    let genres = [];
    for (let i  in item.genres) {
        genres.push(item.genres[i].name)
    }
    let description = item.overview;
    return(
       <section className="featured" style={{backgroundSize:'cover',backgroundPosition:'center',backgroundImage:`url(https://image.tmdb.org/t/p/original${item.backdrop_path})`}}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.original_name}</div>
                    <div className="featured--info">
                        <div className="featured--points">{item.vote_average} pontos</div>
                        <div className="featured--years">{firstDate.getFullYear()}</div>
                        <div className="featured--seasons">{item.number_of_seasons} temporadas{item.number_of_seasons !== 1 ? 's' : ''} </div>
                    </div>
                    <div className="featured--description">{description}</div>
                    <div className="featured--buttons">
                        <a href={`/wacth/${item.id}`} className="featured--wacth">► Assitir</a>
                        <a href={`/list/add${item.id}`}className="featured--mylistbutton">+ A Minha Lista</a>
                    </div>
                    <div className="featured--gernres"><stongs> Gêneros: {genres.join(', ')} </stongs></div>
                </div>
            </div>
       </section>
    )
}