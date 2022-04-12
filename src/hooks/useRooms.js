import { useEffect, useState } from "react";

const useRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch("rooms.json")
      .then((res) => res.json())
      .then((json) => setRooms(json));
  }, []);

  useEffect(() => {
    fetch("roomDetails.json")
      .then((res) => res.json())
      .then((json) => setDetails(json));
  }, []);

  return [rooms, setRooms, details, setDetails];
};

export default useRooms;
