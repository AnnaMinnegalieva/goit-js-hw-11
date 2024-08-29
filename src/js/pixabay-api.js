export default function searchImagesByQuery(query) {
    const URL = "https://pixabay.com/api/"; 
    const API_KEY = "45696629-91516db15d2f4b6ea4d0928dd";

    return fetch(`${URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`).then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      }).catch((error) => {
        iziToast.error({
          position: "topRight",
            message: `${error}`,
        });
      })
}