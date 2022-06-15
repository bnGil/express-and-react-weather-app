import { useState } from "react";
import InputSearch from "./components/inputSearch/InputSearch";
import API from "./api/API";

function App() {
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onHandleSearch = async (cityStr) => {
    setLoading(true);
    try {
      setCity(cityStr);
      const { data } = await API.get(`/${cityStr}`);
      setTemp(data.current.temp_c);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="weather-app">
      <h1>Weather APP</h1>
      <InputSearch onHandleSearch={onHandleSearch} />
      <h2>{error ? error : `The weather in ${city} is ${temp} \u2103`}</h2>
    </div>
  );
}

export default App;
