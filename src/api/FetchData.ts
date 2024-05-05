import { useMoviesStore } from "@/stores/movies";

async function fetchData(url: string): Promise<any> {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function fetchDateData(): Promise<any> {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  const apiUrl = `https://api.tvmaze.com/schedule/web?date=${formattedDate}`;
  const data = await fetchData(apiUrl);
  const store = useMoviesStore();
  store.saveFetchedMovies(data);
}

export async function fetchShowData(show: string) {
  const showUrl = "https://api.tvmaze.com/shows/" + show;
  const showData = await fetchData(showUrl);
  return showData;
}

export async function searchShows(query: string) {
  const searchUrl = `https://api.tvmaze.com/search/shows?q=${query}`;
  const searchData = await fetchData(searchUrl);
  return searchData;
}
