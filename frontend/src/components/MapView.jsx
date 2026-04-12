import React, { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import markerIcon from '../assets/marker.svg';

const INDIA = { center: [78.9629, 22.5937], zoom: 4.8 };

export default function MapView({ selectedPlace, onMarkerClick }) {
  const mapContainerRef = useRef(null);
  const mapRef          = useRef(null);
  const markerRef       = useRef(null);

  useEffect(() => {
    if (mapRef.current) return;

    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style: 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json',
      center: [78.9629, 20.5937],
      zoom: 2.5,
      minZoom: 2,
      maxZoom: 16,
      attributionControl: false,
    });

    map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'top-right');

    map.on('load', () => {
      // Animate zoom into India on load
      setTimeout(() => {
        map.flyTo({
          center: INDIA.center,
          zoom: INDIA.zoom,
          duration: 3200,
          easing: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
        });
      }, 600);
    });

    mapRef.current = map;
    return () => { map.remove(); mapRef.current = null; };
  }, []);

  // Fly to selected place + add marker
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    if (markerRef.current) {
      markerRef.current.remove();
      markerRef.current = null;
    }

    if (!selectedPlace) return;

    const { lat, lng } = selectedPlace;
    if (!lat || !lng) return;

    map.flyTo({ center: [lng, lat], zoom: 9, duration: 1800, essential: true });

    // Custom gold pin marker
    const el = document.createElement('div');
    el.style.cssText = `
      width:28px; height:38px;
      background:linear-gradient(135deg,var(--gold),var(--gold-dark));
      border-radius:50% 50% 50% 0;
      transform:rotate(-45deg);
      border:2px solid rgba(255,255,255,0.25);
      box-shadow:0 4px 14px rgba(var(--gold-rgb),0.55);
      cursor:pointer;
      transition:transform 0.2s;
    `;
    el.onmouseenter = () => { el.style.transform = 'rotate(-45deg) scale(1.15)'; };
    el.onmouseleave = () => { el.style.transform = 'rotate(-45deg) scale(1)'; };

    const marker = new maplibregl.Marker({ element: el, anchor: 'bottom' })
      .setLngLat([lng, lat])
      .addTo(map);

    el.addEventListener('click', () => { if (onMarkerClick) onMarkerClick(selectedPlace); });
    markerRef.current = marker;
  }, [selectedPlace, onMarkerClick]);

  return <div ref={mapContainerRef} id="teleported-map" />;
}
