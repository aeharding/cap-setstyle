import {
  IonButton,
  IonContent,
  IonHeader,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";
import { Keyboard, KeyboardStyle } from "@capacitor/keyboard";
import { useState } from "react";

const Home: React.FC = () => {
  const [kbStyle, setKbStyle] = useState(KeyboardStyle.Dark);

  function toggle() {
    const style =
      kbStyle === KeyboardStyle.Dark ? KeyboardStyle.Light : KeyboardStyle.Dark;

    Keyboard.setStyle({
      style,
    });
    setKbStyle(style);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
            <IonLabel>Current style: {kbStyle}</IonLabel>
            <IonButton onClick={toggle}>Toggle</IonButton>
            <textarea />
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Home;
