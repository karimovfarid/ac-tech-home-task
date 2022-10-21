import * as React from 'react';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import CircularProgress from '@mui/material/CircularProgress';

import CardHolder from './components/CardHolder';
import CardHandler from './components/CardHandler';

import { fakeData } from './utils/fakeData';
import { filterDataBySearchInput } from './utils/searchFilter';

import './App.scss'

function App() {
  const [organizations, setOrganiztions] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [search, setSearch] = React.useState('');

  React.useEffect(() => {
    setIsLoading(true)
    fakeData(1000).then(data => {
      setIsLoading(false)
      setOrganiztions(data)
    })
  }, [])

  return (
    <Box className='container'>
      <CardHandler
        allOrganization={organizations.length}
        handleSearch={setSearch}
        setOrganiztions={data => {
          setOrganiztions(state => {
            const newArray = [...state, { title: data }]
            return newArray;
          })
        }}
      />
      <Divider
        className='divider'
        variant='middle'
      />
      {filterDataBySearchInput(organizations, search).length === 0 && !isLoading && 'Please add organization(s)'}
      {isLoading ? <Box className='loader-holder'><CircularProgress /></Box> : <CardHolder organizations={filterDataBySearchInput(organizations, search)} />}
    </Box>
  );
}

export default App;
