import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Applicant() {
  let { id } = useParams();
  const [ApplicantObject, setApplicantObject] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3001/applicants/byId/${id}`).then((response) => {
        setApplicantObject(response.data);
    });
  });
  return (
    <div className="appPage">
      <div className="leftSide">
        <div className="applicant" id="individual">
          <div className="id"> {ApplicantObject.idapply} </div>
          <div className="appname">{ApplicantObject.appName}</div>
          <div className="contactno">{ApplicantObject.contactNO}</div>
        </div>
      </div>
      <div className="rightSide">Comment Section</div>
    </div>
  );
}

export default Applicant;