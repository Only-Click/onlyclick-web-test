import React, { useEffect } from "react";
import { useParams } from "react-router";

function SubCategoryPage() {
  const params = useParams();
  useEffect(() => {
    console.log(params.sub_name);
    console.log(params.name);
  }, []);
  return <div></div>;
}

export default SubCategoryPage;
