import { Slot } from "expo-router";
import { useEffect, useState } from "react";

const AppLayout = () => {
  const [loadPage, setLoadPage] = useState(false);

  useEffect(() => {
    setLoadPage(true);
  }, []);

  if (loadPage) {
    return <Slot />;
  }

  return <Slot />;
};

export default AppLayout;
