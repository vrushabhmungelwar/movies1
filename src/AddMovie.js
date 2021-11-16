import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useHistory} from "react-router-dom";


export function AddMovie({ movies, setMovies }) {
  const history = useHistory();

  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");

  const addMovie = () => {
    const newMovie = {
      name,
      poster,
      rating,
      summary,
      trailer,
    };
    console.log(newMovie);
    setMovies([...movies, newMovie]);
    history.push("/movies");
  };

  return (
    <div className="add-movie-form">
      <TextField
        value={name}
        onChange={(event) => setName(event.target.value)}
        label="Name"
        variant="standard"
      />
      <TextField
        value={poster}
        onChange={(event) => setPoster(event.target.value)}
        label="Poster"
        variant="standard"
      />
      <TextField
        value={rating}
        onChange={(event) => setRating(event.target.value)}
        label="Rating"
        variant="standard"
      />
      <TextField
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
        label="Summary"
        variant="standard"
      />
      <TextField
        value={trailer}
        onChange={(event) => setTrailer(event.target.value)}
        label="Trailer"
        variant="standard"
      />
      <Button onClick={addMovie} variant="outlined">
        Add movie
      </Button>
    </div>
  );
}
