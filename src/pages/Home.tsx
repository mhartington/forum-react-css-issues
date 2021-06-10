import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton fill="clear" class="nav-button">
          About
        </IonButton>
          <IonButton fill="clear" class="nav-button">
            Posts
          </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
