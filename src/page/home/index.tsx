import axios from "axios";
import { async } from "q";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<any[]>([]);
  const [comment, setComment] = useState<any[]>([]);
  useEffect(() => {
    axios.get(" http://localhost:3000/users").then((response) => {
        setData(response.data);
    });
    getData("http://localhost:3000/comments", setComment);
  }, []);
  //   delete trên servers
  const handleDelele = (id: string) => {
    axios.delete("http://localhost:3000/users/" + id).then((response) => {
      
      getData("http://localhost:3000/users", setData);
    });
  };

  const handleAdd = () => {
    const data={
        name: "võ sỹ quyết111111",
        doB: "1949-10-12T01:37:24.455Z",
        email: "Mckayla_Hintz26@example.org",
        work: "Forward Data Assistant",
      }

    axios
      .post("http://localhost:3000/users",data )
      .then((response) => {
        getData("http://localhost:3000/users", setData);
      });
  };

  return (
    <>
      <h1>xin chào home</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleDelele(`${item.id}`)}>delete</button>{" "}
          </li>
        ))}
      </ul>
      <button onClick={handleAdd}>add</button>
      <ul>
        {comment.map((item) => (
          <li key={item.id}>{item.body}</li>
        ))}
      </ul>
    </>
  );
}
const getData = async (url: string, setData: Function) => {
  const response = await axios.get(url);
  setData(response.data);
};
