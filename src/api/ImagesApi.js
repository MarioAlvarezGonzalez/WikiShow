const ImagesApi = {
    original: (id) => (
    `https://image.tmdb.org/t/p/original/${id}`
    ),
    w500: (id) => (
    `https://image.tmdb.org/t/p/w500/${id}`
    )
}

export default ImagesApi;