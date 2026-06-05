import { useState } from 'react';
import './FilterModal.scss';

function FilterModal({ isOpen, onClose, onApply }) {
  const [activeGroup, setActiveGroup] = useState(null);
  const [selectedArtist, setSelectedArtist] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [yearFrom, setYearFrom] = useState('');
  const [yearTo, setYearTo] = useState('');

  const toggleGroup = (group) => {
    setActiveGroup(activeGroup === group ? null : group);
  };

  const handleApply = () => {
    onApply({
      artist: selectedArtist,
      location: selectedLocation,
      yearFrom: yearFrom,
      yearTo: yearTo
    });
    onClose();
  };

  const handleClear = () => {
    setSelectedArtist('');
    setSelectedLocation('');
    setYearFrom('');
    setYearTo('');
    onApply({
      artist: '',
      location: '',
      yearFrom: '',
      yearTo: ''
    });
  };

  if (!isOpen) return null;

  return (
    <div className={`filter-modal ${isOpen ? 'active' : ''}`} id="filterModal">
      <div className="filter-modal__header">
        <button className="filter-modal__close" id="closeFilterBtn" onClick={onClose}>
          <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.386207 14.8252C0.165517 15.049 0.165517 15.3846 0.386207 15.6084C0.606897 15.8322 0.937931 15.8322 1.15862 15.6084L7.88966 8.8951L14.731 15.8322C14.9517 16.0559 15.2828 16.0559 15.5034 15.8322C15.7241 15.6084 15.7241 15.2727 15.5034 15.049L8.66207 8.11189L15.8345 0.951049C16.0552 0.727273 16.0552 0.391608 15.8345 0.167832C15.6138 -0.0559441 15.2828 -0.0559441 15.0621 0.167832L7.88966 7.32867L0.937931 0.27972C0.717241 0.0559441 0.386207 0.0559441 0.165517 0.27972C-0.0551724 0.503497 -0.0551724 0.839161 0.165517 1.06294L7.22759 8.11189L0.386207 14.8252Z" fill="currentColor"/>
          </svg>
        </button>
      </div>

      <div className="filter-modal__content">
        <div className={`filter-group ${activeGroup === 'artist' ? 'active' : ''}`}>
          <div className="filter-group__header" onClick={() => toggleGroup('artist')}>
            <span>artist</span>
            <span className="filter-group__toggle"></span>
          </div>
          <div className="filter-group__body">
            <div className="select-wrap">
              <select 
                className="filter-select" 
                value={selectedArtist}
                onChange={(e) => setSelectedArtist(e.target.value)}
              >
                <option value="">Select the artist</option>
                <option value="Claude Monet">Claude Monet</option>
                <option value="Pablo Picasso">Pablo Picasso</option>
                <option value="Vincent van Gogh">Vincent van Gogh</option>
                <option value="Jean-Honore Fragonard">Jean-Honore Fragonard</option>
              </select>
            </div>
          </div>
        </div>

        <div className={`filter-group ${activeGroup === 'location' ? 'active' : ''}`}>
          <div className="filter-group__header" onClick={() => toggleGroup('location')}>
            <span>location</span>
            <span className="filter-group__toggle"></span>
          </div>
          <div className="filter-group__body">
            <div className="select-wrap">
              <select 
                className="filter-select"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                <option value="">Select the location</option>
                <option value="Louvre Museum">Louvre Museum</option>
                <option value="Van Gogh Museum">Van Gogh Museum</option>
                <option value="Orsay Museum">Orsay Museum</option>
                <option value="Hermitage">Hermitage</option>
              </select>
            </div>
          </div>
        </div>

        <div className={`filter-group ${activeGroup === 'years' ? 'active' : ''}`}>
          <div className="filter-group__header" onClick={() => toggleGroup('years')}>
            <span>years</span>
            <span className="filter-group__toggle"></span>
          </div>
          <div className="filter-group__body">
            <div className="year-inputs">
              <input 
                type="number" 
                placeholder="From" 
                className="year-input"
                value={yearFrom}
                onChange={(e) => setYearFrom(e.target.value)}
              />
              <span className="year-dash">
                <svg width="16" height="2" viewBox="0 0 16 2" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.7 1.4H15.4C15.6 1.4 15.7 1.3 15.9 1.2C15.9 1 16 0.9 16 0.7C16 0.5 15.9 0.4 15.8 0.2C15.7 0.0999998 15.5 0 15.3 0H8.7H7.3H0.7C0.5 0 0.4 0.0999998 0.2 0.2C0.1 0.4 0 0.5 0 0.7C0 0.9 0.1 1 0.2 1.2C0.3 1.3 0.5 1.4 0.7 1.4H7.4H8.7Z" fill="currentColor"/>
                </svg>
              </span>
              <input 
                type="number" 
                placeholder="To" 
                className="year-input"
                value={yearTo}
                onChange={(e) => setYearTo(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="filter-modal__footer">
        <span className="filter-modal__clear" id="clearFilters" onClick={handleClear}>clear</span>
        <span className="filter-modal__result" id="showResults" onClick={handleApply}>show the results</span>
      </div>
    </div>
  );
}

export default FilterModal;