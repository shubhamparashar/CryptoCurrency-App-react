import React from "react";
import { Row, Col, Typography, Collapse, Avatar } from "antd";
import millify from "millify";
import HTMLReactParser from "html-react-parser";

import { useGetCryptoExchangesQuery } from "../services/crytoApi";
import exchangeIcon from "../images/cryptoExchange.png";
import Loader from "./Loader";

const Exchanges = () => {
  const { Text, Title } = Typography;
  const { Panel } = Collapse;

  const { data, isFetching } = useGetCryptoExchangesQuery();

  const exchangesList = data?.data?.exchanges;

  if (isFetching) return <Loader />;
  // console.log(cryptoExchanges);
  return (
    <>
      <Title level={1}>
        <strong>Exchanges </strong>
        <Avatar src={exchangeIcon} alt="exchangeIcon" />
      </Title>
      <Row className="exchanges-heading-row">
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Change</Col>
      </Row>
      <Row>
        {exchangesList.map((exchange) => (
          <Col span={24}>
            <Collapse>
              <Panel
                key={exchange.id}
                showArrow={false}
                header={
                  <Row key={exchange.id}>
                    <Col span={6}>
                      <Text>
                        <strong>{exchange.rank}.</strong>
                      </Text>
                      <Avatar
                        className="exchange-image"
                        src={exchange.iconUrl}
                      />
                      <Text>
                        <strong>{exchange.name}</strong>
                      </Text>
                    </Col>
                    <Col span={6}>${millify(exchange.volume)}</Col>
                    <Col span={6}>{millify(exchange.numberOfMarkets)}</Col>
                    <Col span={6}>{millify(exchange.marketShare)}%</Col>
                  </Row>
                }
              >
                {HTMLReactParser(exchange.description || "")}
              </Panel>
            </Collapse>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Exchanges;
