import './App.css';
import 'primereact/resources/themes/mdc-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import { useEffect } from 'react';

import { supabase } from './lib/supabase';
import Routes from './routes/Routes';

function App() {
  useEffect(() => {
    async function getProfile() {
      const data = await supabase.from('company').select(`*`);
      console.log(data);
    }

    getProfile();
  }, []);
  return (
    <>
      <Routes></Routes>
    </>
  );
}

export default App;
