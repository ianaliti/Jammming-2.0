import './App.css';
import Homepage from './pages/homepages/Homepages';
import { library } from '@fortawesome/fontawesome-svg-core'

// import your icons
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

function App() {
  return (
    <div className="App">
      <Homepage />
    </div>
  );
}

export default App;
library.add(fab, fas, far)
