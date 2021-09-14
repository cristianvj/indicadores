export default function apiCall(method, url) {
    return fetch(`http://localhost:4000${url}`, {
        method
    }).then(response => response.json())
}