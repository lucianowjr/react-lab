import axios from "axios";

const api = axios.create({
	baseURL:
		"https://firestore.googleapis.com/v1/projects/api-rest-lab-a17db/databases/(default)/documents/books/",
});

export default api;
