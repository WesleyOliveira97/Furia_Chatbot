import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatContainer from './components/ChatContainer';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <div className="container">
          <ChatContainer />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
