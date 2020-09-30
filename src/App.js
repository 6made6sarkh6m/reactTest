import React from 'react';
import Table from './components/Table';
import AddContact from './components/AddContact';
const contacts = [
  {
    name: 'Nurbek Amanbekov',
    age: 22,
    city: 'Astana'
  },
  {
    name: 'Yerassyl',
    age: 23,
    city: 'Astana'
  },
  {
    name: 'Nurtas',
    age: 23,
    city: 'Shymkent'
  }
];
function App() {

  return (
    <div className="App">
      
    <Table people={contacts} />
    <AddContact/>
    </div>
  );
}

export default App;
