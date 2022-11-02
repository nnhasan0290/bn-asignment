import Head from "./components/Head/Head";
import HeroArea from "./components/HeroArea/Hero";
import MainBlog from "./components/MainBlog/MainBlog";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <Head/>
      <HeroArea />
      <MainBlog />
    </div>
  );
};

export default App;
