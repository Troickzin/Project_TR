import Background_One from "../../Containers/Background/Background_One";
import Float_Bar from "../../Containers/Float_Bar";
import Float_Account from "../../Containers/Float_Account";
import Float_Social from "../../Containers/Float_Social";
import Api from "../../Services/Api";
import "./style.css";

function Home() {
  document.title = "TKS";

  async function getUser(token) {
    const user = await Api.post("/User/GetUser", { token: token });
    console.log(user.data.username);
  }

  getUser(localStorage.getItem("LoginToken"));

  return (
    <>
      <Background_One />
      <Float_Bar Type="Home" />
      <Float_Account />
      <Float_Social />
    </>
  );
}

export default Home;
