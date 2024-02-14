import Header from '../Header';
import AnimalsList from './AnimalsList';
import { animals } from './AnimalsList'; // Correct import statement

function AnimalPage() {
  return (
    <div>
      <Header currentPage="animal" />
      <AnimalsList animals={animals} /> {/* Pass the birds data to AnimalList */}
    </div>
  );
}

export default AnimalPage;


