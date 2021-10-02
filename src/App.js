import React from "react";
import "./App.css";
import { AlkoImage } from "./components/alkoimage/AlkoImage";
import img from "./assets/img/img.jpeg";
import { Layout } from "./layout/Layout";
import { Context } from "./layout/context/Context";

function App() {
  return (
    <Context>
      <Layout>
        <AlkoImage>
          <img src={img} alt="" />
        </AlkoImage>
      </Layout>
    </Context>
  );
}

export default App;
