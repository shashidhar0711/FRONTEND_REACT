function App() {
  const isLoggedIn = false;

  return (
    <div>
        // conditional rendering
      {!isLoggedIn && <button>Login</button>}
    </div>
  );
}