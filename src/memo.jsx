import { useMemo, useState } from "react";
    
const Serch = () => {
  const [planet] = useState(["Mercury", "Venus", "Earth", "Mars", "Saturn"]);
  const [filter, setFilter] = useState("");

  const filteredPlanets = useMemo(() => {
    return planet.filter((p) => p.toLowerCase().includes(filter.toLowerCase()));
  }, [filter, planet]);
  return (
    <div className="serch">
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search"
      />
      <ul>
        {filteredPlanets.map((p, index) => (
          <li key={index}>{p}</li>
        ))}
      </ul>
    </div>
  );
};

export default Serch;
