import { useState } from 'react';
import { Onboarding } from './components/Onboarding';
import { Dashboard } from './components/Dashboard';
import { Scanner } from './components/Scanner';
import { ScanResult } from './components/ScanResult';
import { MapView } from './components/MapView';
import { Profile } from './components/Profile';

export type Screen = 'onboarding' | 'dashboard' | 'scanner' | 'scanResult' | 'map' | 'profile';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('onboarding');
  const [scannedMaterial, setScannedMaterial] = useState({ type: '', instructions: '' });

  const handleScan = (material: { type: string; instructions: string }) => {
    setScannedMaterial(material);
    setCurrentScreen('scanResult');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {currentScreen === 'onboarding' && (
        <Onboarding onComplete={() => setCurrentScreen('dashboard')} />
      )}
      {currentScreen === 'dashboard' && (
        <Dashboard onNavigate={setCurrentScreen} />
      )}
      {currentScreen === 'scanner' && (
        <Scanner onScan={handleScan} onNavigate={setCurrentScreen} />
      )}
      {currentScreen === 'scanResult' && (
        <ScanResult
          material={scannedMaterial}
          onNavigate={setCurrentScreen}
        />
      )}
      {currentScreen === 'map' && (
        <MapView onNavigate={setCurrentScreen} />
      )}
      {currentScreen === 'profile' && (
        <Profile onNavigate={setCurrentScreen} />
      )}
    </div>
  );
}
