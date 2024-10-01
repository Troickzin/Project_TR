import {
  Background_Div,
  Background_Effect,
  Background_Image,
} from "./Background.Style";
function Background() {
  return (
    <>
      <Background_Div>
        <Background_Image src="src/assets/background.jpg" />
        <Background_Effect />
      </Background_Div>
    </>
  );
}

export default Background;
