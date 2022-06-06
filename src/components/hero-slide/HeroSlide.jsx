import React, { useState, useEffect, useRef } from 'react';

import { useHistory } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';

import ConfigApi, { category, movieType } from '../../api/ConfigApi';
import ImagesApi from '../../api/ImagesApi';

import Button from '../button/Button';
import Modal, { ModalVideo } from '../modal/Modal';


import './hero-slide.scss';


const HeroSlide = () => {

    const [movies, setMovieItems] = useState(['']);

    /*Sincronizamos todas las peliculas , que pertenezcan a la primera pagina y haremos un try catch, donde esperamos la respuesta
    de la API, con el tipo de Peliculas populares, que pertenezcan a la pagina 1, es decir params, ahora esa respuesta la volcaremos en
    setMovieItems, y esa respuesta mediante el slice, la diviremos en 8 partes, es decir la cantidad de donde empieza y donde acaba*/

    useEffect(() => {
        const getMovies = async () => {
            const params = { page: 1 }
            {
                const response = await ConfigApi.getMoviesList(movieType.popular, { params });
                setMovieItems(response.results.slice(1, 9));
            }
        }
        getMovies();
    }, []);

    /*Crearemos el Video, cogiendo las propiedades de peliculas, el evento onClose, es muy imporante para cuando cierras
    el media el video no se siga reproduciendo en un segundo plano*/

    const Video = props => {

        const film = props.film;

        const iframe = useRef("");

        const close = () => iframe.current.setAttribute('src', '');

        return (
            <Modal id={`modal_${film.id}`}>
                <ModalVideo onClose={close}>
                    <iframe ref={iframe} width="100%" height="900px" title='Name'/>
                </ModalVideo>
            </Modal>
        )
    }

    /*Vale ahora devolvemos un return del hero slide, llamamos a la clase como en html y ahora con la propiedades del SWIPPER
hacemos que coga el curso,importante la linea 67 hace que el propio cursos manteniendolo podramos moverlo, esto esta
pensado para movil pero para PC sirve igual, decimos que queremos ver unicamente un slide es decir de 1en1 si no se puede
quedar en la mitad del slice de las peliculas.
Ahora con las peliculas, haremos un mapeo para ir uno por uno,mostrando cada pelicula en cada swiper,
sin estas propiedades aparecera un swiper sin contenido alguno, por lo tanto es obligatorio mapear el slide*/

    return (
        <div className="hero-slide">
            <Swiper
                grabCursor={true}
                slidesPerView={1}>
                {
                    movies.map((film, index) => (
                        <SwiperSlide key={index}>
                            {({ isActive }) =>
                            (
                                <HeroSlideItem film={film} className={`${isActive ? 'active' : ''}`} />
                            )}
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            {
                movies.map((film, index) => (
                    <Video key={index} film={film} />
                ))
            }
        </div>
    );
}

const HeroSlideItem = props => {

    //El enlace useHistory nos permite acceder al objeto de historial de React Router.

    let history = useHistory();

    //Volcamos las propiedades de las peliculas en film, y configuramos el background con las propiedades de la API, como el poster
    //Si no encuentra el backdrop, cogera el poster es decir siempre tendra un fondo 

    const film = props.film;

    const background = ImagesApi.original(film.backdrop_path ? film.backdrop_path : film.poster_path);

    //El componente modal proporciona una base sólida para crear cuadros de diálogo, popovers, lightboxes o cualquier otra cosa.
    
    const setModalSelected = async () => {
        const modal = document.querySelector(`#modal_${film.id}`);

        const media = await ConfigApi.getVideos(category.movie, film.id);

        //Decimos que si tiene algun media,cojeremos la url del video, y cogeremos el primer resultado,

        if (media.results.length > 0) {
            const video = 'https://www.youtube.com/embed/' + media.results[0].key;
            modal.querySelector('.modal_video > iframe').setAttribute('src', video);
        }

        modal.classList.toggle('active'); //Con esto aparecera el iframe con el media
    }

    /*Aqui devolveremos el html con todos los componentes anteriormente creados, llamaremos a film que tiene todas las propiedades
    titulo overview, poster e incluso un fondo y los btn de Boton.jsx y la configuracion de la API es decir todo se junta aqui*/

    return (
        <div
            className={`hero-slide_item ${props.className}`}
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="hero-slide_item_video container">
                <i className="bx bx-caret-left"></i>

                <div className="hero-slide_item_video_information">

                    <h2 className="title">{film.title}</h2>
                    <div className="overview">{film.overview}</div>
                    <div className="btns">
                        <Button onClick={() => history.push('movie/' + film.id)}>
                            <i className="bx bx-log-in-circle"></i>
                            Go to the movie
                        </Button>
                        <Button onClick={setModalSelected}>
                            <i className="bx bx-movie-play"></i>
                            Watch a video
                        </Button>
                    </div>
                </div>

                <div className="hero-slide_item_video_poster">
                    <img src={ImagesApi.original(film.poster_path)} alt="Se necesita alt para suprimir errores" />
                </div>
                <i className="bx bx-caret-right"></i>
            </div>
        </div>
    )
}
export default HeroSlide;
