import React, { useState } from 'react';
import './style.css';
import { IonGrid, IonRow, IonCol, IonButton, IonInput, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonLabel, IonBackButton } from '@ionic/react';
import './Calculator.css';
import { arrowBack, arrowBackCircleOutline } from 'ionicons/icons';

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>('');

  const handleClick = (value: string) => {
    setInput(input + value);
  };

  const handleCalculate = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handleClear = () => {
    setInput('');
  };

  return (
    <IonPage className="general-background">
    <IonHeader>
        <IonToolbar>
          <IonTitle>Calculator</IonTitle>
          <IonButton routerDirection="root" routerLink="/ionic-t-sawan-on/home" slot="start">
            <IonIcon aria-hidden="true" icon={arrowBack} />
          </IonButton>
        </IonToolbar>
        </IonHeader>
      <IonContent fullscreen>
        <div className="calculator-container" >
        <header>
        <h1>Solve equations in a snap</h1>
      </header>
      <IonGrid className="calculator" style={{ marginTop: '2rem' }}>
            <IonRow>
        <IonCol size="12">
          <IonInput className="display" value={input} readonly></IonInput>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol size="3">
          <IonButton className="btn" onClick={() => handleClick('1')}>1</IonButton>
        </IonCol>
        <IonCol size="3">
          <IonButton className="btn" onClick={() => handleClick('2')}>2</IonButton>
        </IonCol>
        <IonCol size="3">
          <IonButton className="btn" onClick={() => handleClick('3')}>3</IonButton>
        </IonCol>
        <IonCol size="3">
          <IonButton className="operator" onClick={() => handleClick('/')}>/</IonButton>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol size="3">
          <IonButton className="btn" onClick={() => handleClick('4')}>4</IonButton>
        </IonCol>
        <IonCol size="3">
          <IonButton className="btn" onClick={() => handleClick('5')}>5</IonButton>
        </IonCol>
        <IonCol size="3">
          <IonButton className="btn" onClick={() => handleClick('6')}>6</IonButton>
        </IonCol>
        <IonCol size="3">
          <IonButton className="operator" onClick={() => handleClick('*')}>*</IonButton>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol size="3">
          <IonButton className="btn" onClick={() => handleClick('7')}>7</IonButton>
        </IonCol>
        <IonCol size="3">
          <IonButton className="btn" onClick={() => handleClick('8')}>8</IonButton>
        </IonCol>
        <IonCol size="3">
          <IonButton className="btn" onClick={() => handleClick('9')}>9</IonButton>
        </IonCol>
        <IonCol size="3">
          <IonButton className="operator" onClick={() => handleClick('-')}>-</IonButton>
        </IonCol>
      </IonRow><IonRow>
        <IonCol size="3">
          <IonButton className="btn" onClick={() => handleClick('0')}>0</IonButton>
        </IonCol>
        <IonCol size="3">
          <IonButton className="btn" onClick={() => handleClick('.')}>.</IonButton>
        </IonCol>
        <IonCol size="3">
          <IonButton className="operator" onClick={handleCalculate}>=</IonButton>
        </IonCol>
        <IonCol size="3">
          <IonButton className="operator" onClick={() => handleClick('+')}>+</IonButton>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol size="12">
          <IonButton className="clear" onClick={handleClear}>Clear</IonButton>
        </IonCol>
      </IonRow>
    </IonGrid>
     </div>
     </IonContent>
   </IonPage>
  );
};

export default Calculator;