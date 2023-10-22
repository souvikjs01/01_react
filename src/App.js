
import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';
import Card from './components/Card';
function App() {
  const response = [
    {
      itemName: "Nirma",
      itemDate: 20,
      itemMonth: "june",
      itemYear: 1998
    },
    {
      itemName: "Nirma2",
      itemDate: 202,
      itemMonth: "june2",
      itemYear: 19982
    },
    {
      itemName: "Nirma3",
      itemDate: 203,
      itemMonth: "june3",
      itemYear: 19983
    },
  ];
  return (
    <>
    <Card>
      <Item name={response[0].itemName} />
      <ItemDate  day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear} />

      <Item name={response[1].itemName} />
      <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear} />

      <Item name={response[2].itemName} />
      <ItemDate  day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear} />
      <div className="App">
        Hello jee
      </div>
    </Card>
    </>
  );
}

export default App;
