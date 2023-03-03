import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const response = await axios.get("http://jsonplaceholder.typicode.com/posts")
      if (response.data) {
        setUsers(response.data)
      }
    } catch (e) {
      console.log(e)
    }
  }
  const removeRow = size => {
    document.getElementById(size).style.display = 'none'
  }
  return (
    <>
      <table className="table w-auto m-5 border border-dark">
        <thead className="bg-info">
          <tr>
            <th scope="col" className="">id</th>
            <th scope="col">userid</th>
            <th scope="col">title</th>
            <th scope="col">body</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} id={index} >
              <td scope="row">{index + 1}</td>
              <td>{user.userId}</td>
              <td className="text-start">{user.title}</td>
              <td className="text-start">{user.body}</td>
              <td>
                <button className="btn btn-danger mt-1" onClick={()=>removeRow(index)}>Delete
                </button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default Home;