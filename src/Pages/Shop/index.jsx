import Background from "../../Containers/Background/Background_Two";
import Float_Account from "../../Containers/Float_Account";
import Float_Bar from "../../Containers/Float_Bar";
import "./style.css";

function Shop() {
  document.title = "TKS Shop";

  return (
    <>
      <Background />
      <Float_Bar Type="Shop" />
      <Float_Account />
    </>
  );
}

export default Shop;
