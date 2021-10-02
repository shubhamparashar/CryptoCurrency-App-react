import React from "react";

import { useGetCryptoExchangesQuery } from "../services/crytoApi";

const Exchanges = () => {
  const { data: cryptoExchanges, isFetching } = useGetCryptoExchangesQuery();
  if (isFetching) return "Loading...";
  console.log(cryptoExchanges);
  return <div>Exchanges</div>;
};

export default Exchanges;
