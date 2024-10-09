import "./App.css";

function App() {
  return (
    <>
      <h1>Jasuda</h1>
      {import.meta.env.VITE_APPWRITE_BUCKET_ID}
    </>
  );
}

export default App;

