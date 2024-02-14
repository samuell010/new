import Header from '../Header';
import AnimalsList from './AnimalsList'; // Correct import statement
import { birds } from './AnimalsList'; // Correct import statement

function BirdPage() {
  return (
    <div>
      <Header currentPage="bird" />
      <AnimalsList birds={birds} /> {/* Pass the birds data to AnimalList */}
    </div>
  );
}

export default BirdPage;
