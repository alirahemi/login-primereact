import React, { useState } from 'react';

import { AuthWebsite } from './components/AuthWebsite';
import { NoAuthWebsite } from './components/NoAuthWebsite';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import './App.css';


export const App = () => {

  const [user, setUser] = useState<string>('');

  return user ? 
  <AuthWebsite logout={() => setUser("")} user={user}/> 
  : 
  <NoAuthWebsite login={(username: string) => setUser(username)}/>
  
}