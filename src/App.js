import img from "./assets/img/img.jpeg";
import "./App.css";
import { AlkoImage } from "./components/AlkoImage/AlkoImage";

import { Layout } from "./layout/Layout";

function App() {
  return (
    <Layout>
      <AlkoImage>
        <img src={img} alt="" />
      </AlkoImage>
    </Layout>
  );
}

export default App;
