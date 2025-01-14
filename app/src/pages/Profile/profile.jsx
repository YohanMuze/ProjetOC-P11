//import { useSelector } from "react-redux";
import { useEffect } from "react";
import EditName from "../../components/EditName";
import { Navigate } from "react-router";
import { useDispatch } from "react-redux";
import { getUserDatas } from "../../slices/user.slice";

function Profile() {
  const dispatch = useDispatch();
  const token = sessionStorage.getItem("userToken");

  useEffect(() => {
    if (token) {
      dispatch(getUserDatas(token));
    } else {
      return;
    }
  });

  if (!token) {
    return <Navigate to="/sign-in" />;
  } else {
    return (
      <div className="display-flex">
        <main className="main bg-dark">
          <EditName />
          <h2 className="sr-only">Accounts</h2>
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Checking (x8349)</h3>
              <p className="account-amount">$2,082.79</p>
              <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Savings (x6712)</h3>
              <p className="account-amount">$10,928.42</p>
              <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
              <p className="account-amount">$184.30</p>
              <p className="account-amount-description">Current Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default Profile;
