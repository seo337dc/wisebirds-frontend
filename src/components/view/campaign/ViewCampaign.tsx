"use client";

import { useState } from "react";
import TableSection from "./TableSection";

const size = 25;

const ViewCampaign = () => {
  const [page, setPage] = useState(0);
  const handlePage = (pageValue) => setPage(pageValue);

  return (
    <div>
      <TableSection page={page} size={size} handlePage={handlePage} />
    </div>
  );
};

export default ViewCampaign;
