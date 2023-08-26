import { Footer, Layout, Navbar, TaskInput, TaskList } from "./components";

const App = () => {
  return (
    <main>
      <Navbar />
      <Layout>
        <TaskInput />
        <TaskList />
      </Layout>
      <Footer />
    </main>
  );
};

export default App;
