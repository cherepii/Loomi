class App {
  run = async (name = 'Hello') => {
    console.log(`${name} World!`);
  }
}

const app = new App;
app.run()
   .then(() => console.log("done"))
   .catch(() => console.log("Error"));