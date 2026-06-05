import { initTheme } from './theme.js';
import { initFilterModal } from './filterModal.js';
import { initFilterAccordion } from './filterAccordion.js';

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initFilterModal();
    initFilterAccordion();
});