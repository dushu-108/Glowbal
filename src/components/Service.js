import { useEffect, useState } from 'react';
import Card from './Servicecard';

function Service() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/ttg3671/glowbal_assignment/refs/heads/main/services')
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="bg-black pt-16 pb-8 px-8"> 
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-5xl mb-8 font-light">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, id) => (
            <Card
              key={id}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
