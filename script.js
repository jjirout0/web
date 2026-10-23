// Získání elementu našeho falešného kurzoru
const cursor = document.getElementById('custom-cursor');

// Funkce, která aktualizuje pozici falešného kurzoru podle pohybu myši
document.addEventListener('mousemove', e => {
    // Zobrazí kurzor, pokud je skrytý (při prvním pohybu myši)
    if (cursor.style.display === 'none' || !cursor.style.display) {
        cursor.style.display = 'block';
    }

    // Nastavení pozice X a Y našeho falešného kurzoru
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Skryje falešný kurzor, pokud myš opustí okno prohlížeče
document.addEventListener('mouseleave', () => {
    cursor.style.display = 'none';
});