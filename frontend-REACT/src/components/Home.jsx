const Home = () => {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-green-100 text-xl">
        🎉 Welcome to the Home Page!
        <button
          onClick={() => {
            localStorage.clear();
            window.location.href = "/login";
          }}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    );
  };
  
  export default Home;
  