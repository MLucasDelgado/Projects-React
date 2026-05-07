import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

function App() {
  const users = [
    {
      userName: "midudev",
      name: "Miguel Angel Duran",
    },
    {
      userName: "Lucas_Delg4do",
      name: "Lucas Delgado",
    },
    {
      userName: "Znorux",
      name: "Znorux",
    },
  ];

  return (
    <section className="App">
      {users.map(({ userName, name }) => {
        return (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            name={name}
          />
        );
      })}
    </section>
  );
}

export default App;
