import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import CardPost from "./components/CardPost";

function App() {
  const [dataPost, setDataPost] = useState();

  const getDataPost = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      setDataPost(data);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log("dataPost", dataPost);

  useEffect(() => {
    getDataPost();
  }, []);

  return (
    <div className="App">
      <h1>Fake API</h1>
      <div className="containerCard">
        {dataPost?.map((post) => (
          <CardPost title={post.title} body={post.body} key={post.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
