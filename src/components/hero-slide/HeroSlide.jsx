import React, { useState, useEffect, useRef } from 'react';
//Devuelve un valor con estado y una función para actualizarlo.
//La función pasada a useEffect se ejecutará después de que el renderizado es confirmado en la pantalla.
//En esencia, useRef es como una “caja” que puedes mantener en una variable mutable en su propiedad .current.

import { Swiper, SwiperSlide } from 'swiper/react';

import Button from '../button/Boton';
import Modal, { ModalContent } from '../modal/Modal';

import tmdbApi, { category, movieType } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

import './hero-slide.scss';
import { useHistory } from 'react-router';


const HeroSlide = () => {

    //Creamos los items de las peliculas es decir el conjunto y estableceremos que peliculas aparecera, con un estado vacio en ambos claro 
    const [movies, setMovieItems] = useState(['']);

    /*Sincronizamos todas las peliculas , que pertenezcan a la primera pagina y haremos un try catch, donde esperamos la respuesta
    de la API, con el tipo de Peliculas populares, que pertenezcan a la pagina 1, es decir params, ahora esa respuesta la volcaremos en
    setMovieItems, y esa respuesta mediante el slice, la diviremos en 8 partes, es decir la cantidad de donde empieza y donde acaba*/
    useEffect(() => {
        const getMovies = async () => {
            const params = {page: 1}
            try {
                const response = await tmdbApi.getMoviesList(movieType.popular, {params});
                setMovieItems(response.results.slice(0, 8));
                console.log(response); //Verifico que obtiene respuesta, en caso negativo salta al catch para ver el error
            } catch {
                console.log('error');
            }
        }
        getMovies();
    }, []);


    /*Crearemos el Trailer, cogiendo las propiedades de peliculas, el evento onClose, es muy imporante para cuando cierras
    el trailer el video no se siga reproduciendo en un segundo plano*/
    const Trailer = props => {
        const film = props.film;
    
        const iframeRef = useRef(null);
    
        const onClose = () => iframeRef.current.setAttribute('src', '');
    
        return (
            <Modal id={`modal_${film.id}`}>
                <ModalContent onClose={onClose}>
                    <iframe ref={iframeRef} width="100%" height="500px" title="trailer"></iframe>
                </ModalContent>
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
                slidesPerView={1}
            >
    
                {
                    movies.map((film, index) => (
                        <SwiperSlide key={index}>
                            {({ isActive }) => (
                                <HeroSlideItem film={film} className={`${isActive ? 'active' : ''}`} />
                            )}
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            {
                movies.map((film, index) => <Trailer key={index} film={film}/>)
            }
        </div>
    );
}
/*La linea 65 sirve para poder llegar a ver el trailer asociado a esa pelicula, por eso del Trailer modal,
 tiene que mapear cada pelicula con su trailer y lo hacemos mediante la key */
 
const HeroSlideItem = props => {

    //El enlace useHistory nos permite acceder al objeto de historial de React Router.
    let history = useHistory();

    //Volcamos las propiedades de las peliculas en film, y configuramos el background con las propiedades de la API, como el poster
    //Si no encuentra el backdrop, cogera el poster es decir siempre tendra un fondo 
    const film = props.film;

    const background = apiConfig.originalImage(film.backdrop_path ? film.backdrop_path : film.poster_path);

    //El componente modal proporciona una base sólida para crear cuadros de diálogo, popovers, lightboxes o cualquier otra cosa.
    const setModalSelected = async () => {
        const modal = document.querySelector(`#modal_${film.id}`);

        const trailer = await tmdbApi.getVideos(category.movie, film.id);

        //Decimos que si tiene algun trailer,cojeremos la url del video, y cogeremos el primer resultado,
        //Normalmente el resultado 0, suele ser el trailer pero no es 100% seguro y eso lo volcamos al iframe
        if (trailer.results.length > 0) {
            const video = 'https://www.youtube.com/embed/' + trailer.results[0].key;
            modal.querySelector('.modal__content > iframe').setAttribute('src', video);
        }

        modal.classList.toggle('active'); //Con esto aparecera el iframe con el trailer
    }

    /*Aqui devolveremos el html con todos los componentes anteriormente creados, llamaremos a film que tiene todas las propiedades
    titulo overview, poster e incluso un fondo y los btn de Boton.jsx y la configuracion de la API es decir todo se junta aqui*/

    return (
        <div
            className={`hero-slide__item ${props.className}`}
            style={{backgroundImage: `url(${background})`}}
        >
            <div className="hero-slide__item__content container">
                <div className="hero-slide__item__content__info">
                    <h2 className="title">{film.title}</h2>
                    <div className="overview">{film.overview}</div>
                    <div className="btns">
                        <Button onClick={() => history.push('/movie/' + film.id)}>
                            Watch now
                        </Button>
                        <Button onClick={setModalSelected}>
                            Watch trailer
                        </Button>
                    </div>
                </div>
                <div className="hero-slide__item__content__poster">
                    <img src={apiConfig.originalImage(film.poster_path)} alt="" />
                </div>
            </div>
        </div>
    )
}



export default HeroSlide;
