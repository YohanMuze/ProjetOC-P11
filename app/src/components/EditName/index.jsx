import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { editUserName, toggleEditName } from "../../slices/user.slice";
import { useRef } from "react";

function EditNameShell({ children }) {
  return <div className="header">{children}</div>;
}

export default function EditName() {
  const user = useSelector((state) => state.user);
  const editIsOpen = user.editIsOpen;
  const form = useRef();
  const dispatch = useDispatch();

  const handleEditModal = (e) => {
    dispatch(toggleEditName());
  };

  const handleFormEdit = async (e) => {
    e.preventDefault();
    let newUserName = form.current[0].value;
    const token = sessionStorage.getItem("userToken");
    const datas = {
      token,
      newUserName,
    };
    dispatch(editUserName(datas)).then((result) => {
      if (result) {
        dispatch(toggleEditName());
      }
    });
  };

  return editIsOpen ? (
    <EditNameShell>
      <h1>Edit user info</h1>
      <form
        id="formEditUN"
        ref={form}
        onSubmit={(e) => handleFormEdit(e)}
        className="account-form-edit-name"
      >
        <div className="input-wrapper">
          <label className="account-form-edit-name-label" htmlFor="username">
            User name
            <input
              type="text"
              id="username"
              placeholder={user.userName}
            ></input>
          </label>
        </div>
        <div className="input-wrapper">
          <label className="account-form-edit-name-label" htmlFor="firstname">
            First name
            <input
              type="text"
              id="firstname"
              placeholder={user.firstName}
              disabled
            ></input>
          </label>
        </div>
        <div className="input-wrapper">
          <label className="account-form-edit-name-label" htmlFor="lastname">
            Last name
            <input
              type="text"
              id="lastname"
              placeholder={user.lastName}
              disabled
            ></input>
          </label>
        </div>
        <div className="account-form-edit-name-btn-container">
          <button
            type="button"
            onClick={() => handleEditModal()}
            className="edit-button"
          >
            Cancel
          </button>
          <button form="formEditUN" type="submit" className="edit-button">
            Save
          </button>
        </div>
      </form>
    </EditNameShell>
  ) : (
    <EditNameShell>
      <h1>
        Welcome back
        <br />
        {user.firstName} {user.lastName}
      </h1>
      <button onClick={() => handleEditModal()} className="edit-button">
        Edit Name
      </button>
    </EditNameShell>
  );
}
