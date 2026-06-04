// Fonction pour ouvrir la modal et remplir les données dans la grille
function openModal(title, objectif, description, part, modalite) {
    document.getElementById('modal-title').innerText = title;
    
    // Remplissage des 4 cases
    document.getElementById('modal-objectif').innerHTML = objectif;
    document.getElementById('modal-description').innerHTML = description;
    document.getElementById('modal-part').innerHTML = part;
    document.getElementById('modal-modalite').innerHTML = modalite;
    
    // Afficher la boite
    document.getElementById('project-modal').style.display = 'flex';
}

// Fonction pour fermer quand on clique sur la croix
document.querySelector('.close-modal').addEventListener('click', function() {
    document.getElementById('project-modal').style.display = 'none';
});

// Fonction pour fermer quand on clique dans le vide (hors de la boite)
window.addEventListener('click', function(event) {
    const modal = document.getElementById('project-modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});