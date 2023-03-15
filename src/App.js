import "./App.css";

function App() {
    // This is returing JSX

    // We can freely print out String and Number
    const title = "Welcome to the new Blog";
    const likes = 50;

    const link = "https://www.google.com/";

    // Objects can't be printrd out
    // const person = {name: 'Madhu', age: 21};

    return (
        <div className="App">
            <div className="content">
                <h1>{title}</h1>
                <p>Liked {likes} times</p>
                {/* <p>Here's the object {person}</p> */}

                {/* We can directly output Dynamice values onto screen */}
                <p>{"Hello Pandu's"}</p>
                <p>{[1, 2, 3, 4, 5]}</p>
                <p>{Math.random() * 100}</p>

                {/* The value of the link is dynamic */}
                <a href={link}>Open Site</a>
            </div>
        </div>
    );
}

export default App;
