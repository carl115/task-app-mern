import { Form } from "./components/Form";
import { Header } from "./layouts/Header";
import { Main } from "./layouts/Main";

function App() {
  return (
    <div className="bg-zinc-800 h-screen overflow-hidden">
      <Header></Header>
      <Main></Main>
    </div>
  );
}

export default App;
