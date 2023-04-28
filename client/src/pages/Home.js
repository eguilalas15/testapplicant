import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";


function Home() {
    const [listOfPosts, setListOfPosts] = useState([]);
    const [pageNumber, setPageNumber] = useState();

    const applicantsPerPage = 10;
    const pagesVisited = pageNumber * applicantsPerPage;


    let navigate = useNavigate();
useEffect(() => {
  axios.get("http://localhost:3001/applicants").then((response) => {
    setListOfPosts(response.data);
  });
}, []);

return (
  <div className="AppList">
    <table id = "AppList" border={1}>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Contact No</th>
        <th>Gender</th>
        <th>Civil Status</th>
        <th>Birthdate</th>
        <th>Email Add</th>
        <th>Address</th>
        <th>Position Applied</th>
        <th>Source</th>
      </tr>
    {listOfPosts.map((value, key) => {
      return (
        <tr>
          <td> <div classname ="app" onClick={()=> {
          navigate(`/applicant/${value.id}`)}} >{value.id}</div> </td>
          <td>{value.appName}</td>
          <td>{value.contactNO}</td>
          <td>{value.gender}</td>
          <td>{value.civilstat}</td>
          <td>{value.birthdate}</td>
          <td>{value.email} </td>
          <td>{value.address} </td>
          <td>{value.position} </td>
          <td>{value.source} </td>
        
        </tr>
      );
    })}
    </table>
  </div>
);
}

export default Home
