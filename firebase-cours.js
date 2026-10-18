import { db } from './assets/js/firebase.js';
import { collection, getDocs } from 'firebase/firestore';

async function chargerCoursFirebase() {
  try {
    const resultat = await getDocs(collection(db, 'cours'));
    console.log('🔥 Connexion Firestore réussie !');
    console.log('Nombre de cours trouvés :', resultat.size);
    resultat.forEach((doc) => {
      console.log('Cours :', doc.id, doc.data());
    });
  } catch (erreur) {
    console.error('Erreur Firestore :', erreur.message);
  }
}

chargerCoursFirebase();
