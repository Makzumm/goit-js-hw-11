export default class FetchImage {
    constructor() {
        this.page = 1;
        this._searchQuery = '';
    }

    getImage(element) {

        const API_KEY = '36626377-ec15308a2cdcc9d1051736749';
        const params = new URLSearchParams({
            key: `${API_KEY}`,
            q: `${element}`,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: 'true',
        })

        const url = `https://pixabay.com/api/?${params}`;

        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch');
                }
                return response.json();
            })
            .then(data => data)
            .catch(error => {
                console.error('Error in fetching data:', error)
                return null
            })
    }

    get fetchedData() {
        return this._searchQuery;
    }

    set fetchedData(string) {
        this._searchQuery = string;
    }

}