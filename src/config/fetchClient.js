export default function apiCall(method, url="", body=null) {
    console.log(JSON.stringify(body))
    return fetch(`http://localhost:4000/bdIndicadores${url}`, {
        method,
        body: !!body ? JSON.stringify(body) : body,
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
}