const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3',
    apiKey: '4113f3ad734e747a5b463cde8c55de42',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;