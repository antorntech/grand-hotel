import { useEffect, useState } from "react";

const useRooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch("rooms.json")
      .then((res) => res.json())
      .then((json) => setRooms(json));
  }, []);
  return [rooms, setRooms];
};

export default useRooms;
