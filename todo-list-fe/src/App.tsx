import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import { User } from './models/User.model';

const App: React.FC = () => {

  const [count, setCount] = useState(0);
  const [data, setData] = useState<User[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get<User[]>('https://664f5401fafad45dfae35964.mockapi.io/v1/users/users');
      console.log(data?.data);
      setData(data?.data || []);
    }

    fetchData()
      .catch(console.error);
  }, [])

  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <>
      <button onClick={handleClick}>
        You pressed me {count} times
      </button>
      <div>
        {data.map((value, index) =>
          <div key={value?.id}>
            {value?.age}
            {value?.firstName}
            {value?.lastName}
          </div>
        )}
      </div>
    </>

  );
}

export default App;
