/**
 * gv-current-year
 * Inserts current year into a <span>
 */
() => {
    'use strict';
    const yearSpan = document.querySelector('.gv-current-year');

    if (!yearSpan) return;

    const currentYear = new Date().getFullYear();
    yearSpan.innerText = currentYear.toString();
};
