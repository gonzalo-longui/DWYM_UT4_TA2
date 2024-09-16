import { Card } from './components/card.jsx';
import usericon from "../src/assets/usericon.png";
import styles from './components/card.module.css';

function App() {

  const cardsData = [
    { title: 'Título 1', description: 'Description blablabla', assignedTo: 'pepito', startDate: '10/02/2004', endDate: '11/09/2024' },
    { title: 'Título 2', description: 'Description blablabla2', assignedTo: 'pepito2', startDate: '10/02/2005', endDate: '11/09/2024' },
    { title: 'Título 3', description: 'Description blablabla3', assignedTo: 'pepito3', startDate: '10/02/2006', endDate: '11/09/2024' }
  ]

  return (
    <div className="cards-container">
      {cardsData.map((card, index) => (
        <Card key={index}>
          <h3>{card.title}</h3>
          <p>{card.description}</p> 
          <p>
            <img src={usericon} alt="icono de persona" className={styles.usericon} />
            {card.assignedTo}
          </p>
          <p>{card.startDate} to {card.endDate}</p>
        </Card>
      ))}
    </div>
  )
}

export default App
