import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import MapView       from '../components/MapView';
import Navbar        from '../components/Navbar';
import FloatingCard  from '../components/FloatingCard';
import ProfileSidebar from '../components/ProfileSidebar';

export default function Home() {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [profileOpen,   setProfileOpen]   = useState(false);

  // Listen for profile open event from Navbar
  useEffect(() => {
    const handler = () => setProfileOpen(true);
    window.addEventListener('openProfile', handler);
    return () => window.removeEventListener('openProfile', handler);
  }, []);

  return (
    <div className="map-page">
      <MapView
        selectedPlace={selectedPlace}
        onMarkerClick={(place) => setSelectedPlace(place)}
      />

      <Navbar onSelectPlace={(place) => setSelectedPlace(place)} />

      <AnimatePresence>
        {selectedPlace && (
          <FloatingCard
            place={selectedPlace}
            onClose={() => setSelectedPlace(null)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {profileOpen && (
          <ProfileSidebar onClose={() => setProfileOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
