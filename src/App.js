import "./App.css";
import useFetch from "./useFetch";

function App() {
  const {
    data: joke,
    loading,
    error,
    refetch,
  } = useFetch("https://v2.jokeapi.dev/joke/Any");
  var jsxToRend = "";

  if (loading) jsxToRend = <h2>Loaging ...</h2>;

  if (error) console.warn(error);

  if (joke?.joke) {
    jsxToRend = (
      <div>
        <h2>{joke.joke}</h2>
        <Button refect={refetch} />
      </div>
    );
  } else {
    jsxToRend = (
      <div>
        <h2>{joke?.setup}</h2>
        <h3>{joke?.delivery}</h3>
        <Button refect={refetch} />
      </div>
    );
  }

  return <div className="App">{jsxToRend} </div>;
}

const Button = (props) => {
  return <button onClick={props.refect}> Refect </button>;
};

export default App;
