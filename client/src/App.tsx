import { Footer, Layout, Navbar, TaskInput, TaskList } from "./components";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <main>
      <Navbar />
      <ToastContainer />
      <Layout>
        <TaskInput />
        <TaskList />
      </Layout>
      <Footer />
    </main>
  );
};

export default App;
