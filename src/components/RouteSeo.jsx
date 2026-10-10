import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { applyMetaToDocument } from '../seo';

// Keeps <title>, description and canonical in sync on client-side navigation.
// The first render already has these tags written into the pre-rendered HTML.
const RouteSeo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    applyMetaToDocument(pathname);
  }, [pathname]);

  return null;
};

export default RouteSeo;
