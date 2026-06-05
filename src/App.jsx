import { useState } from 'react';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Gallery from './components/Gallery/Gallery';
import FilterModal from './components/FilterModal/FilterModal';
import './styles/app.scss';

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    artist: '',
    location: '',
    yearFrom: '',
    yearTo: ''
  });
  const [searchQuery, setSearchQuery] = useState('');

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleApplyFilters = (newFilters) => {
    setFilters(newFilters);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <Header />
      <main>
        <Search onOpenFilter={openModal} onSearch={handleSearch} />
        <Gallery filters={filters} searchQuery={searchQuery} />
        {/* УБЕРИ ЭТОТ КОМПОНЕНТ <Pagination /> */}
      </main>
      <FilterModal 
        isOpen={isModalOpen} 
        onClose={closeModal}
        onApply={handleApplyFilters}
        initialFilters={filters}
      />
    </>
  );
}

export default App;