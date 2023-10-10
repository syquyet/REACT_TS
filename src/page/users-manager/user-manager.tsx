import { useEffect, useState } from "react";
import "./user-manager.css";
import axios from "axios";
export default function UsersManager() {
  const [data, setData] = useState<any[]>([]);
  const [value, setValue] = useState<string>("");
  useEffect(() => {
    axios.get(" http://localhost:3000/users").then((response) => {
      setData(response.data);
    });
    getData("http://localhost:3000/users", setData);
  }, []);
  //   thêm user
  const handleAdd = () => {
    const data = {
      name: "Võ Sỹ Quyết111111",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/55.jpg",
      doB: "1999-04-16T06:49:33.302Z",
      address: "Pinellas Park",
      city: "Wymanbury",
      id: "30",
    };

    axios.post("http://localhost:3000/users", data).then((response) => {
      getData("http://localhost:3000/users", setData);
    });
  };
  //   xóa user
  const handleDelele = (id: string) => {
    axios.delete("http://localhost:3000/users/" + id).then((response) => {
      getData("http://localhost:3000/users", setData);
    });
  };
  //   seach user
  const hadleSeach = (value: string) => {
    getData("http://localhost:3000/users?name=" + value, setData);
  };

  //   lấy data
  const getData = async (url: string, setData: Function) => {
    const response = await axios.get(url);
    setData(response.data);
  };

  return (
    <body>
      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-8">
                  <button
                    className="btn-addUSer btn btn-primary"
                    onClick={handleAdd}
                  >
                    Add user
                  </button>
                </div>
                <div className="col-sm-4">
                  <div className="search-box">
                    <i className="material-icons"></i>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search…"
                      onChange={(event) => {
                        setValue(event.target.value);
                      }}
                      value={value}
                    />
                    <button className="btn-addUSer btn btn-primary" onClick={() => hadleSeach(value)}>seach</button>
                  </div>
                </div>
              </div>
            </div>
            <table className="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Name</th>
                  <th>doB</th>
                  <th>Address</th>
                  <th>City</th>
                  <th>avatar</th>

                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.doB}</td>
                    <td>{item.address}</td>
                    <td>{item.city}</td>
                    <td>
                      <img src={item.avatar} alt="" />
                    </td>

                    <td>
                      <a
                        href="#"
                        className="edit"
                        title="Edit"
                        data-toggle="tooltip"
                      >
                        <i className="material-icons"></i>
                      </a>
                      <a
                        href="#"
                        className="delete"
                        title="Delete"
                        data-toggle="tooltip"
                        onClick={() => handleDelele(`${item.id}`)}
                      >
                        <i className="material-icons"></i>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* Form add user */}
            <div id="addEmployeeModal">
              <div className="modal-dialog">
                <div className="modal-content">
                  <form>
                    <div className="modal-header">
                      <h4 className="modal-title">Add User</h4>
                      <button
                        id="close"
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-hidden="true"
                      >
                        ×
                      </button>
                    </div>
                    <div className="modal-body">
                      <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>Address</label>
                        <input type="email" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>City</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>Pin Code</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>Country</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="modal-footer">
                      <input
                        type="reset"
                        className="btn btn-default"
                        data-dismiss="modal"
                        defaultValue="Reset"
                      />
                      <input
                        type="submit"
                        className="btn btn-success"
                        defaultValue="Add"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
