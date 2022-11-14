import app from './app';

const PORT = process.env.PORT || 4000;

const handleListening = () => {
  console.log(`✅ Server Listening on port http://localhost:${PORT} 🚀`);
};

console.log('hi');
console.log('hi2');

app.listen(PORT, handleListening);
