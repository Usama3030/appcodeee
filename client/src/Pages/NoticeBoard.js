import React from 'react'
import Table from "react-bootstrap/Table";

const NoticeBoard = () => {
  return (
    <div className="container-fluid">
    <div className="row g-3 my-2">
      <div className="col-md-3 p-1">
        <div className="p-3 bg-secondary shadow-sm d-flex justify-content-around align-items-center rounded">
          <div>
            <h3 className="fs-2">230</h3>
            <p className="fs-5">product</p>
          </div>
        </div>
      </div>
      <div className="col-md-3 p-1">
        <div className="p-3 bg-warning shadow-sm d-flex justify-content-around align-items-center rounded">
          <div>
            <h3 className="fs-2">230</h3>
            <p className="fs-5">product</p>
          </div>
        </div>
      </div>
      <div className="col-md-3 p-1">
        <div className="p-3 bg-secondary shadow-sm d-flex justify-content-around align-items-center rounded">
          <div>
            <h3 className="fs-2">230</h3>
            <p className="fs-5">product</p>
          </div>
        </div>
      </div>
      <div className="col-md-3 p-1">
        <div className="p-3 bg-primary shadow-sm d-flex justify-content-around align-items-center rounded">
          <div>
            <h3 className="fs-2">230</h3>
            <p className="fs-5">product</p>
          </div>
        </div>
      </div>
    </div>
    <div className="row g-3 my-2">
      <div className="col-md-12 p-1">
        <div className="p-3 bg-light shadow-sm d-flex justify-content-around align-items-center rounded">
          <div>
            <h3 className="fs-2">230</h3>
            <p className="fs-5">product</p>
          </div>
        </div>
      </div>
      </div>
      <div className="row">
          <div className="col-md-12 p-1">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>className</th>
                  <th>Room</th>
                  <th>Active</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan={2}>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
            </div>
            </div>
    </div>
  )
}

export default NoticeBoard
