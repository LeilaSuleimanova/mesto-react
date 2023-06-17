class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
        this._authorization = options.headers.authorization;
    }

    _returnRes(res) { return res.ok ? res.json() : Promise.reject }

    getData() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: {
                authorization: this._authorization
            }
        })

            .then(this._returnRes)
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: {
                authorization: this._authorization
            }
        })
            .then(this._returnRes)
    }

    setUserData(data) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.info
            })
        })
            .then(this._returnRes)
    }

    setAvatar(data) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.avatar
            })
        })
            .then(this._returnRes)
    }

    addNewCard(data) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: data.title,
                link: data.link
            })
        })
            .then(this._returnRes)
    }

    addlike(id) {
        return fetch(`${this._baseUrl}/cards/${id}/likes`, {
            method: 'PUT',
            headers: {
                authorization: this._authorization
            }
        })
            .then(this._returnRes)
    }

    deleteLike(id) {
        return fetch(`${this._baseUrl}/cards/${id}/likes`, {
            method: 'DELETE',
            headers: {
                authorization: this._authorization
            }
        })
            .then(this._returnRes)
    }

    deleteCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            method: 'DELETE',
            headers: {
                authorization: this._authorization
            }
        })
            .then(this._returnRes)
    }

}

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-66',
    headers: {
        authorization: 'fb04fe28-7bc0-4cbf-bc40-2c92feffd1a0',
        'Content-Type': 'application/json'
    }
});

export default api;